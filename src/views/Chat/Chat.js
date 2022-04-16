import "./Chat.css";

import ChatService from "../../service/ChatService";
import ChatGecis from "../../assets/images/chat_gecis.png";
import SplashBackground from "../../assets/images/bacground_splash.png";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";
import {createContext, useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import {ThreeDots} from "react-loader-spinner";
import ChatRoom from "./ChatRoom";
import {ExclamationCircleIcon} from "@heroicons/react/solid"


export const ChatContext = createContext(null);

let stompClient = null;
export default function Chat() {
    const navigate = useNavigate();
    const chatService = new ChatService();
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const {user, setUser, userToken} = useContext(UserContext);
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate("/register");
        }
    }, [])

    useEffect(() => {
        let interval = null;
        if (isLoading) {
            interval = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timer, isLoading])

    const [connectionData, setConnectionData] = useState({
        username: user ? user.username : "",
        receiverName: "",
        connected: false,
    });

    const stopChattingQueue = () => {
        setIsLoading(false);
        setTimer(0);
    }

    const registerUser = () => {
        const loadingTimeout = setTimeout(() => setIsLoading(true), 100);
        chatService.connectChat(userToken, user.username)
            .then((res) => {
                if (res.status === 200) {
                    stompClient = chatService.connectSocket(userToken);
                    stompClient.connect({Authorization: `Bearer ${userToken}`}, function () {
                            setConnectionData({...connectionData, "connected": true, "receiverName": res.data.receiver});
                            stompClient.subscribe('/user/' + connectionData.username + '/private', onMessageReceived, {Authorization: `Bearer ${userToken}`});
                        },
                        function (err) {
                            console.log(err);
                        });
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                clearTimeout(loadingTimeout);
                setIsLoading(false);
                if (err.response) {
                    setErrorMessage(err.response.data);
                }
                else {
                    setErrorMessage("An error occurred!");
                }
                setShowErrorMessage(true);
                setTimeout(() => setShowErrorMessage(false), 2000);
            })
    }
    const onMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
        setChatData(chatData => [...chatData, payloadData]);
        scrollToBottom();
    }

    const sendMessage = (messageText) => {
        const chatMessage = {
            senderName: connectionData.username,
            receiverName: connectionData.receiverName,
            message: messageText,
            status: "MESSAGE"
        };

        stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
        setChatData(chatData => [...chatData, chatMessage]);
        scrollToBottom();
    }

    function scrollToBottom() {
        const messageDiv = document.getElementById("messagesDiv");
        if (messageDiv) {
            messageDiv.scrollTop = messageDiv.scrollHeight;
        }
    }

    return (
        <ChatContext.Provider value={{sendMessage, chatData, connectionData, stompClient}}>
            {
                <div
                    className={`fixed left-1/2 p-6 top-24 text-center transition-all duration-500 opacity-0 ${showErrorMessage ? "opacity-100" : "opacity-0"} transform translate -translate-x-1/2 rounded-xl bg-gray-200 z-50`}>
                    <div className="flex flex-row">
                        <ExclamationCircleIcon className="w-8 h-8 mr-2 text-theme-blue"/>
                        <span className="m-auto text-xl text-theme-blue">{errorMessage}</span>
                    </div>
                </div>
            }
            {
                connectionData.connected ?
                    <ChatRoom/>
                    :
                    <div>
                        {
                            isLoading &&
                            <div
                                className="fixed w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 px-12 py-4 text-center shadow-lg left-1/2 top-24 transform translate -translate-x-1/2 rounded-xl bg-gray-300 z-50">
                                <div className="flex flex-col items-center">
                                    <span className="text-xl font-semibold">Looking for people to chat</span>
                                    <span className="text-2xl pt-4 font-bold">{timer} s</span>
                                    <ThreeDots color="green"/>
                                    <button
                                        className="px-8 py-2 bg-red-600 rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-red-500 shadow-xl"
                                        onClick={() => stopChattingQueue()}>Stop Queue
                                    </button>
                                </div>
                            </div>
                        }
                        <div id="chatWrapper" style={{filter: `blur(${isLoading ? "4px" : "0px"}`}}>
                            <Header currentComponent={2}/>
                            <div className="m-auto">
                                <div>
                                    <div className="flex flex-row">
                                        <img src={ChatGecis} alt="chat_gecis" className="z-20"/>
                                        <img src={SplashBackground} alt="chat_splash"
                                             className="fixed lg:w-4/12 opacity-30 z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                                    </div>
                                    <div className="mb-2 text-center">
                            <span
                                className="font-semibold text-gray-600">Click the button below to start chatting</span>
                                    </div>
                                    <div className="flex">
                                        <button onClick={() => registerUser()}
                                                disabled={isLoading}
                                                className={`m-auto ${isLoading ? "bg-gray-600" : "bg-theme-green"} px-8 py-4 rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-green-600 shadow-xl z-20`}>Start
                                            Chatting!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </ChatContext.Provider>
    )
}