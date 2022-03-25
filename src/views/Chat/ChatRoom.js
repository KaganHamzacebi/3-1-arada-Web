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
    const {sendMessage, chatData, connectionData} = useContext(ChatContext);
    const [sendMessageText, setSendMessageText] = useState("");
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        const emoji = emojiObject.emoji;
        const newText = sendMessageText + emoji;
        setSendMessageText(newText);
    };

    useEffect(() => {
        if (!connectionData) {
            navigate("/register");
        }
    }, [])

    return (
        <div id="chatRoomWrapper">
            <Header/>
            <div className="px-8 md:px-24 pt-32 md:pt-40 pb-8 md:pb-24 w-full h-full">
                <div className="w-full h-full flex flex-col p-4 bg-gray-300 bg-opacity-95 rounded shadow-xl">
                    {/* Messages */}
                    <div id="messagesDiv"
                         className="w-full h-full flex flex-col border border-opacity-50 rounded p-4 mb-4 overflow-y-auto">
                        {/* Messages Table */}
                        {
                            chatData.map((msg) => {
                                return (
                                    <div key={msg.id}
                                         className={`p-3 mb-2.5 rounded-lg max-w-sm h-fit font-medium shadow-xl ${msg.senderName !== connectionData.username ? "bg-theme-green self-start" : "bg-blue-600 self-end"}`}>
                                        <span className="text-white break-all">{msg.message}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Send Message Text Input & Button */}
                    <div className="flex justify-self-end">
                        <input type="text" value={sendMessageText} onInput={e => setSendMessageText(e.target.value)}
                               onKeyDown={(e) => {
                                   if(e.which === 13) {
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