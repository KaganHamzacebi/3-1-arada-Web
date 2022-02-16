import {NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/images/logo_white.png";
import {MenuIcon} from "@heroicons/react/solid"
import {useState} from "react";
import TextAnimation from "../common/TextAnimation";
export default function Header(props) {

    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const firstColor = props.firstColor ? props.firstColor : null;
    const secondColor = props.secondColor ? props.firstColor : null;
    const thirdColor = props.thirdColor ? props.firstColor : null;
    
    return (
        <div className="fixed w-full z-50">
            <div className="flex px-4 md:px-16">
                <img src={Logo} onClick={() => navigate("/")} className="w-28 h-28 select-none cursor-pointer" />
                <div className="my-auto ml-4 select-none hidden sm:block" onClick={() => navigate("/")}>
                    <TextAnimation componentId="appName" text="3 in 1" fontSize={40} fontWeight="bold" firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8">
                    <NavLink to="/sleep" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-darkbrown hover:text-white" >
                        <TextAnimation componentId="sleeptext" text="Sleep" fontSize={20} firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
                    </NavLink>
                    <NavLink to="/chat" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-darkbrown hover:text-white" >
                        <TextAnimation componentId="chattext" text="Chat" fontSize={20} firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
                    </NavLink>
                    <NavLink to="/meditation" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 rounded-lg transition duration-300 hover:bg-theme-darkbrown hover:text-white" >
                        <TextAnimation componentId="meditationtext" text="Meditation" fontSize={20} firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
                    </NavLink>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-x-8 my-auto">
                    <NavLink to="/login" className="text-2xl hidden md:block m-auto font-semibold text-white p-2 px-4 rounded-lg bg-theme-blue hover:bg-opacity-90 shadow-xl" >
                        <TextAnimation componentId="logintext" text="Login" fontSize={25} firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
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