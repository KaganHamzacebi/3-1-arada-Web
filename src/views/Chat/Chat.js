import "./Chat.css";

import ChatService from "../../service/ChatService";
import ChatGecis from "../../assets/images/chat_gecis.png";
import SplashBackground from "../../assets/images/bacground_splash.png";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";
import {createContext, useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import {ThreeDots} from "react-loader-spinner";

export const ChatContext = createContext(null);

let stompClient = null;
export default function Chat() {
    const navigate = useNavigate();
    const chatService = new ChatService();
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const {user, setUser, userToken} = useContext(UserContext);
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [])

    const [connectionData, setConnectionData] = useState({
        username: user ? user.username : "",
        receiverName: "",
        connected: false,
    });

    const startChattingQueue = () => {
        setIsLoading(true);
        registerUser();
    }

    const stopChattingQueue = () => {
        setIsLoading(false);
        setTimer(0);
    }

    useEffect(() => {
        let interval = null;
        if (isLoading) {
            interval = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)
        }
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [timer, isLoading])

    const registerUser = () => {
        chatService.connectChat(userToken, user.username)
            .then((res) => {
                if (res.status === 200) {
                    stompClient = chatService.connectSocket();
                    stompClient.connect({}, onConnected(res.data), onError);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onConnected = (data) => {
        setConnectionData({...connectionData, "connected": true, "receiverName": data.user2});
        stompClient.subscribe('/user/' + connectionData.username + '/private', onMessageReceived);
        navigate(`/chat/room=${data.chatId}`)
    }

    const onError = (err) => {
        console.log(err);
    }

    const onMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
        chatData.push(payloadData);
    }

    return (
        <ChatContext.Provider value={{stompClient, chatData, connectionData}}>
            {
                isLoading &&
                <div className="fixed w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 px-12 py-4 text-center shadow-lg left-1/2 top-24 transform translate -translate-x-1/2 rounded-xl bg-gray-300 z-50">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-semibold">Looking for people to chat</span>
                        <span className="text-2xl pt-4 font-bold">{timer} s</span>
                        <ThreeDots color="green" />
                        <button className="px-8 py-2 bg-red-600 rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-red-500 shadow-xl" onClick={() => stopChattingQueue()}>Stop Queue</button>
                    </div>
                </div>
            }
            <div id="chatWrapper" style={{filter: `blur(${isLoading ? "4px" : "0px"}`}}>
                <Header/>
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
                            <button onClick={() => startChattingQueue()}
                                    disabled={isLoading}
                                    className={`m-auto ${isLoading ? "bg-gray-600" : "bg-theme-green"} px-8 py-4 rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-green-600 shadow-xl z-20`}>Start
                                Chatting!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ChatContext.Provider>
    )
}