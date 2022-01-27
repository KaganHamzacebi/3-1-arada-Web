import {NavLink} from "react-router-dom";
import Logo from "../assets/images/logo_white.png";

export default function Header() {

    return (
        <div className="fixed w-full">
            <div className="flex px-16">
                <img src={Logo} className="w-28 h-28 select-none" />
                <div className="m-auto ml-4 select-none">
                    <span className="text-white text-4xl m-auto">3</span>
                    <span className="text-white ml-2 text-4xl m-auto">i</span>
                    <span className="text-white ml-2 text-4xl m-auto">n</span>
                    <span className="text-white ml-2 text-4xl m-auto">1</span>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8 mb-8">
                    <NavLink to="/sleep" className="text-2xl m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                        Sleep
                    </NavLink>
                    <NavLink to="/chat" className="text-2xl m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                        Chat
                    </NavLink>
                    <NavLink to="/meditation" className="text-2xl m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                        Meditation
                    </NavLink>
                    <NavLink to="/login" className="text-2xl m-auto font-semibold text-white p-2 px-3 rounded-lg bg-theme-darkbrown shadow-xl" >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}