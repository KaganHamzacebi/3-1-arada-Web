import {ChatIcon} from "@heroicons/react/solid";
import {EmojiHappyIcon} from "@heroicons/react/solid";
import {useContext, useEffect, useState} from "react";
import Picker, {SKIN_TONE_NEUTRAL} from 'emoji-picker-react';
import {ChatContext} from "./Chat";

import "./ChatRoom.css";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";


export default function ChatRoom() {
    const navigate = useNavigate();
    const {stompClient, chatData, connectionData} = useContext(ChatContext);
    const [sendMessageText, setSendMessageText] = useState("");
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        const emoji = emojiObject.emoji;
        const newText = sendMessageText + emoji;
        setSendMessageText(newText);
    };

    const sendMessage = () => {
        const chatMessage = {
            senderName: connectionData.username,
            receiverName: connectionData.receiverName,
            message: sendMessageText,
            status: "MESSAGE"
        };

        stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
    }

    useEffect(() => {
        if (!stompClient || !connectionData) {
            navigate("/chat");
        }
    }, [])

    function scrollToBottom() {
        const messageDiv = document.getElementById("messagesDiv");
        messageDiv.scrollTop = messageDiv.scrollHeight;
    }

    return (
        <div id="chatRoomWrapper">
            <Header/>
            <div className="px-8 md:px-24 pt-32 md:pt-40 pb-8 md:pb-24 w-full h-full">
                <div className="w-full h-full flex flex-col p-4 bg-gray-300 bg-opacity-95 rounded shadow-xl">
                    {/* Messages */}
                    <div id="messagesDiv"
                         className="w-full grid border border-opacity-50 rounded p-4 mb-4 overflow-y-auto flex flex-col flex-grow">
                        {/* Messages Table */}
                        {
                            chatData.map((msg) => {
                                return (
                                    <div key={msg.messageId}
                                         className={`p-3 mb-2.5 rounded-lg max-w-sm font-medium shadow-xl ${msg.username === connectionData.username ? "bg-theme-green justify-self-start" : "justify-self-end bg-blue-600"}`}>
                                        <p className="text-white break-all">{msg.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Send Message Text Input & Button */}
                    <div className="flex justify-self-end">
                        <input type="text" value={sendMessageText} onInput={e => setSendMessageText(e.target.value)}
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
                            <ChatIcon className="w-5 text-white cursor-pointer m-auto" onClick={() => sendMessage()}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}