import "./Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Flower from "../../assets/images/3.png";
import Leaf from "../../assets/images/7.png";
import Cactus from "../../assets/images/9.png";
import HomeSleep from "../../assets/home_sleep.png";
import HomeChat from "../../assets/home_chat.png";
import HomeMeditation from "../../assets/home_meditation.png";
import {useEffect, useState} from "react";
import SlideMenu from "./SlideMenu";

export default function Home() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div id="homeWrapper">
            <Header/>
            <img src={Flower} className={`fixed transition duration-500 ${scroll ? "opacity-0" : "opacity-100"}  transform scale-50 -right-40 -bottom-56 z-50`} />
            <img src={Leaf} className={`fixed transition duration-500 ${scroll ? "opacity-0" : "opacity-100"} scale-75 rotate-18 transform scale-50 -left-30 -bottom-56 z-50`} />
            <img src={Cactus} className={`fixed transition duration-500 ${scroll ? "opacity-0" : "opacity-100"} transform scale-50 -left-40 -bottom-56 z-40`} />
            <div className="pt-48 pb-40 md:pt-50 px-8 md:px-24 flex flex-col gap-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col gap-x-16 gap-y-4">
                    <div className="row-span-2 px-8 py-12 bg-theme-gray rounded-xl opacity-95 shadow-xl transition duration-700 transform hover:scale-105">
                        <h1 className="text-4xl text-gray-700 font-bold">3 in 1</h1>
                        <h1 className="text-2xl text-black font-black mt-8"><span className="text-blue-800">Sleep</span> - <span className="text-green-800">Chat</span> - <span className="text-yellow-600">Meditation</span></h1>
                        <h1 className="mt-8 text-black">We want to help the world to better sleep. By using 3in1 to track your sleep and find your perfect wake up window, we believe you’ll be part of that change, for the benefit of better health. With also chat and meditation we try to make you feel life better. You can track your sleep, chat anonymously and meditate in any environment</h1>
                    </div>
                    <div className="row-span-1 p-6 bg-theme-gray rounded-xl opacity-95 shadow-xl transition duration-700 transform hover:scale-105">
                        <h1 className="text-2xl text-blue-800 uppercase font-black">Sleep</h1>
                        <div className="flex mt-8 gap-8">
                            <img src={HomeSleep} className="w-24 h-24 m-auto" />
                            <span>With our sleep module you can track your sleep quality easily. Just before going sleep start the application and we will show how good you sleep and how to improve your sleep quality.</span>
                        </div>
                    </div>
                    <div className="row-span-1 p-6 bg-theme-gray rounded-xl opacity-95 shadow-xl transition duration-700 transform hover:scale-105">
                        <div className="flex">
                            <span className="text-green-800 text-2xl font-black">CHAT</span>
                            <span className="text-yellow-600 ml-auto text-2xl font-black">MEDITATION</span>
                        </div>
                        <div className="flex mt-8 gap-8">
                            <img src={HomeChat} className="w-24 h-24 m-auto" />
                            <span>Chat and Meditation is the key of better life. Chat with random people and meditate at any place!</span>
                            <img src={HomeMeditation} className="w-24 h-24 m-auto" />
                        </div>
                    </div>
                </div>
                <div id="grad1" className="opacity-95 py-6 md:mt-48 rounded-xl shadow-xl">
                    <SlideMenu />
                </div>
            </div>
            <Footer />
        </div>
    )
}