import "./Chat.css";

import ChatService from "../../service/ChatService";
import ChatGecis from "../../assets/images/chat_gecis.png";
import SplashBackground from "../../assets/images/bacground_splash.png";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";

export default function Chat () {
    const chatService = new ChatService();
    const navigate = useNavigate();

    //TODO: Implement start chat function
    function startChat() {
        const chatToken = chatService.startChat();
        navigate(`/user/${chatToken}`);
    }

    return (
        <div id="chatWrapper">
            <Header />
            <div className="m-auto">
                <div>
                    <div className="flex flex-row">
                        <img src={ChatGecis} alt="chat_gecis" className="z-20" />
                        <img src={SplashBackground} alt="chat_splash" className="fixed lg:w-4/12 opacity-30 z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="mb-2 text-center">
                        <span className="font-semibold text-gray-600">Click the button below to start chatting</span>
                    </div>
                    <div className="flex">
                        <button onClick={() => {}} className="m-auto px-8 py-4 bg-theme-green rounded-xl text-white transition-colors duration-500 font-semibold hover:bg-green-600 shadow-xl z-20" >Start Chatting!</button>
                    </div>
                </div>

            </div>
        </div>
    )
}