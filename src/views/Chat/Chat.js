import {ChatIcon} from "@heroicons/react/solid";
import {EmojiHappyIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";
import Picker, { SKIN_TONE_NEUTRAL } from 'emoji-picker-react';

import "./Chat.css";
import Header from "../../components/Header";

export default function Chat() {

    const [messages, setMessages] = useState([]);
    const [sendMessageText, setSendMessageText] = useState("");
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        const emoji = emojiObject.emoji;
        const newText = sendMessageText + emoji;
        setSendMessageText(newText);
    };

    const userId = 1234;

    useEffect(() => {
        {/* Fetch messages here */}
        const sampleArr = [
            {
                "messageId": 1,
                "userId": 1234,
                "room": 3,
                "text": "Hello! Whats up?"
            },
            {
                "messageId": 2,
                "userId": 2222,
                "room": 3,
                "text": "Im fine u?"
            },
            {
                "messageId": 3,
                "userId": 2222,
                "room": 3,
                "text": "Fine thanks and you?"
            },
            {
                "messageId": 4,
                "userId": 1234,
                "room": 3,
                "text": "Thank you, sit down."
            },
            {
                "messageId": 5,
                "userId": 1234,
                "room": 3,
                "text": "Hello! Whats up?"
            },
            {
                "messageId": 6,
                "userId": 2222,
                "room": 3,
                "text": "Im fine u?"
            },
            {
                "messageId": 7,
                "userId": 2222,
                "room": 3,
                "text": "Fine thanks and you?"
            },
            {
                "messageId": 8,
                "userId": 1234,
                "room": 3,
                "text": "Thank you, sit down."
            },
            {
                "messageId": 9,
                "userId": 1234,
                "room": 3,
                "text": "Hello! Whats up?"
            },
            {
                "messageId": 10,
                "userId": 2222,
                "room": 3,
                "text": "Im fine u?"
            },
            {
                "messageId": 11,
                "userId": 2222,
                "room": 3,
                "text": "Fine thanks and you?"
            },
            {
                "messageId": 12,
                "userId": 1234,
                "room": 3,
                "text": "Thank you, sit down."
            },
        ];
        setMessages(sampleArr);
    }, []);

    function sendMessage() {/* TODO: implement send message function */}

    return (
        <div id="chatWrapper">
            <Header />
            <div className="px-8 md:px-24 pt-32 md:pt-40 pb-8 md:pb-24 w-full h-full">
                <div className="w-full h-full flex flex-col p-4 bg-gray-300 bg-opacity-95 rounded shadow-xl">
                    {/* Messages */}
                    <div className="w-full grid border border-opacity-50 rounded p-4 mb-4 overflow-y-auto flex flex-col flex-grow">
                        {/* Messages Table */}
                        {
                            messages.map((message) => {
                                return (
                                    <div key={message.messageId} className={`p-3 mb-2.5 rounded-lg max-w-sm font-medium shadow-xl ${message.userId === userId ? "bg-theme-green justify-self-start" : "justify-self-end bg-blue-600"}`}>
                                        <p className="text-white break-all">{message.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Send Message Text Input & Button */}
                    <div className="flex justify-self-end">
                        <input type="text" value={sendMessageText} onInput={e => setSendMessageText(e.target.value)} placeholder="Type a message" className="w-full h-full text-xl focus:outline-none text-gray-600 p-2 rounded mr-4" />
                        <div className="rounded-full bg-purple-700 p-2.5 mr-2 flex relative">
                            <EmojiHappyIcon className="w-5 text-white cursor-pointer m-auto" onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)} />
                            <div className={`absolute bottom-12 right-0 ${isEmojiPickerVisible ? "visible" : "hidden"} `}>
                                <Picker
                                    onEmojiClick={onEmojiClick}
                                    disableAutoFocus={true}
                                    skinTone={SKIN_TONE_NEUTRAL}
                                    groupNames={{ smileys_people: 'PEOPLE' }}
                                    native
                                />
                            </div>
                        </div>
                        <div className="rounded-full bg-theme-green p-2.5 flex">
                            <ChatIcon className="w-5 text-white cursor-pointer m-auto" onClick={() => sendMessage()} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}