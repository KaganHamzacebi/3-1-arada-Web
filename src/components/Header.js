import {NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/images/logo_white.png";
import {MenuIcon} from "@heroicons/react/solid"
import {useState} from "react";

export default function Header() {

    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed w-full z-50 bg-transparent bg-opacity-5 bg-green-900">
            <div className="flex px-4 md:px-16">
                <img src={Logo} onClick={() => navigate("/")} className="w-28 h-28 select-none cursor-pointer" />
                <div className="my-auto ml-4 select-none hidden sm:block">
                    <span className="text-white text-4xl m-auto">3</span>
                    <span className="text-white ml-2 text-4xl m-auto">i</span>
                    <span className="text-white ml-2 text-4xl m-auto">n</span>
                    <span className="text-white ml-2 text-4xl m-auto">1</span>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8">
                    <NavLink to="/sleep" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                        Sleep
                    </NavLink>
                    <NavLink to="/chat" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                        Chat
                    </NavLink>
                    <NavLink to="/meditation" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                        Meditation
                    </NavLink>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8 my-auto">
                    <NavLink to="/login" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 px-3 rounded-lg bg-theme-darkbrown shadow-xl" >
                        Login
                    </NavLink>
                </div>
                <div className="block md:hidden flex my-auto p-1 border-2 rounded-xl cursor-pointer">
                    <MenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-8 h-8 text-white" />
                </div>
                {/* Mobile Header */}
                <div className={`${isMobileMenuOpen ? "block" : "hidden"}   md:hidden absolute p-4 top-20 left-0 w-full`}>
                    <div className="bg-theme-green rounded-xl flex flex-col p-1 bg-opacity-90">
                        <NavLink to="/sleep" className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                            Sleep
                        </NavLink>
                        <NavLink to="/chat" className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                            Chat
                        </NavLink>
                        <NavLink to="/meditation" className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                            Meditation
                        </NavLink>
                        <NavLink to="/login" className="text-xl my-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-brown hover:bg-opacity-50 hover:text-green-800" >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}