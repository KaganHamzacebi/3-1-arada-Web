import {ChatIcon, EmojiHappyIcon} from "@heroicons/react/solid";
import {useContext, useEffect, useState} from "react";
import Picker, {SKIN_TONE_NEUTRAL} from 'emoji-picker-react';
import {ChatContext} from "./Chat";

import "./ChatRoom.css";
import {DotsHorizontalIcon} from "@heroicons/react/solid";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";
import ChatService from "../../service/ChatService";
import {UserContext} from "../../App";


export default function ChatRoom() {
    const navigate = useNavigate();
    const chatService = new ChatService();
    const {
        sendMessage,
        chatData,
        connectionData,
        stompClient,
        setErrorMessage,
        setShowNotification,
        setNotificationMessage,
        setIsSuccessNotification
    } = useContext(ChatContext);
    const [sendMessageText, setSendMessageText] = useState("");
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const {user, setUser, userToken} = useContext(UserContext);
    const [isChatEnded, setIsChatEnded] = useState(false);
    const [closeConfirm, setCloseConfirm] = useState(false);

    const reportUser = () => {
        setIsMenuVisible(false);
        const data = {
            reporter: connectionData.username,
            reported: connectionData.receiverName
        };
        chatService.reportChat(data, userToken)
            .then((res) => {
                if (res.status === 200) {
                    setShowNotification(true);
                    setIsSuccessNotification(true);
                    setNotificationMessage("User successfully reported!");
                    setTimeout(() => setShowNotification(false), 2000);
                }
            })
            .catch((err) => {
                console.log(err);
                if (err.response) {
                    setNotificationMessage(err.response.data);
                } else {
                    setNotificationMessage("An error occurred!");
                }
                setIsSuccessNotification(true);
                setShowNotification(true);
                setTimeout(() => setShowNotification(false), 2000);
            })
    }

    const onEmojiClick = (event, emojiObject) => {
        const emoji = emojiObject.emoji;
        const newText = sendMessageText + emoji;
        setSendMessageText(newText);
    };

    useEffect(() => {
        if (!connectionData) {
            navigate("/register");
        }
        window.addEventListener('beforeunload', () => {
            console.log("before unload");
            chatService.closeSocket(userToken).then(rs => console.log(rs));
            stompClient.close();
        });
        setInterval(() => {
            chatService.checkConnection(userToken).then((res) => {
                if (!res.data) {
                    setIsChatEnded(true);
                    stompClient.disconnect();
                    clearInterval();
                }
            })
        }, 10000);
    }, [])

    const closeChat = () => {
        setCloseConfirm(true);
    }

    return (
        <div id="chatRoomWrapper">
            <Header/>
            {
                isChatEnded &&
                <div
                    className="fixed w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 px-12 py-4 text-center shadow-lg left-1/2 top-24 transform translate -translate-x-1/2 rounded-xl bg-gray-300 z-50">
                    <div className="flex flex-col items-center gap-y-4">
                        <span className="text-xl font-semibold">Chat has been ended by other user.</span>
                        <button
                            className="px-8 py-2 bg-red-600 rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-red-500 shadow-xl"
                            onClick={() => navigate("/")}>Close Chat
                        </button>
                    </div>
                </div>
            }
            <div className="px-8 md:px-24 pt-32 md:pt-40 pb-8 md:pb-24 w-full h-full">
                <div className="w-full h-full flex flex-col p-4 bg-gray-300 bg-opacity-95 rounded shadow-xl relative">
                    <DotsHorizontalIcon onClick={() => setIsMenuVisible(!isMenuVisible)} alt="chat_menu"
                                        className="absolute w-7 cursor-pointer right-7 top-0 text-gray-600"/>
                    <div
                        className={`absolute right-7 top-6 bg-opacity-60 rounded-lg bg-gray-400 flex flex-col gap-y-1 p-1 transition duration-300 opacity-0 ${isMenuVisible ? "opacity-100" : "opacity-0"} `}>
                        <div
                            onClick={() => {
                                reportUser()
                            }}
                            className="text-white cursor-pointer bg-red-600 hover:bg-red-500 font-semibold rounded-lg p-2">
                            Report User
                        </div>
                    </div>
                    {/* Messages */}
                    <div id="messagesDiv"
                         className="w-full h-full flex flex-col border border-opacity-50 rounded p-4 mb-4 overflow-y-auto">
                        {/* Messages Table */}
                        {
                            chatData.map((msg, index) => {
                                return (
                                    <div key={index}
                                         className={`p-3 mb-2.5 rounded-lg max-w-sm h-fit font-medium shadow-xl ${msg.senderName !== connectionData.username ? "bg-theme-green self-start" : "bg-blue-600 self-end"}`}>
                                        <span className="text-white break-all">{msg.message}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Send Message Text Input & Button */}
                    <div className="flex justify-self-end">
                        <input type="text" value={sendMessageText}
                               disabled={isChatEnded}
                               onInput={e => setSendMessageText(e.target.value)}
                               onKeyDown={(e) => {
                                   if (e.which === 13) {
                                       sendMessage(sendMessageText);
                                       setSendMessageText("");
                                   }
                               }}
                               placeholder="Type a message"
                               className="w-full h-full text-xl focus:outline-none text-gray-600 p-2 rounded mr-4"/>
                        <div className="rounded-full bg-purple-700 p-2.5 mr-2 flex relative">
                            <EmojiHappyIcon className="w-5 text-white cursor-pointer m-auto"
                                            onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}/>
                            <div
                                className={`absolute bottom-12 right-0 ${isEmojiPickerVisible ? "visible" : "hidden"} `}>
                                <Picker
                                    onEmojiClick={onEmojiClick}
                                    disableAutoFocus={true}
                                    skinTone={SKIN_TONE_NEUTRAL}
                                    groupNames={{smileys_people: 'PEOPLE'}}
                                    native
                                />
                            </div>
                        </div>
                        <div className="rounded-full bg-theme-green p-2.5 flex">
                            <ChatIcon className="w-5 text-white cursor-pointer m-auto" onClick={() => {
                                sendMessage(sendMessageText);
                                setSendMessageText("");
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}