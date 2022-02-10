import {useNavigate} from "react-router-dom";
import LogoGreen from "../../assets/images/logo_green.png";
import LogoWhite from "../../assets/images/logo_white.png";
import {LocationMarkerIcon} from "@heroicons/react/outline";
import LoginForm from "./LoginForm"
import "./Login.css";
import Flower from "../../assets/images/3.png";
import Leaf from "../../assets/images/7.png";
import Cactus from "../../assets/images/9.png";


export default function Login() {
    const navigate = useNavigate();

    return (
        <div id="loginWrapper" className="w-full md:h-full">
            <img src={Flower} className="fixed hidden md:block transform scale-50 -right-40 -bottom-56 z-50" />
            <img src={Leaf} className="fixed hidden scale-75 rotate-18 md:block transform scale-50 -left-30 -bottom-56 z-50" />
            <img src={Cactus} className="fixed hidden md:block transform scale-50 -left-40 -bottom-56 z-40" />
            <div className="m-auto">
                <div className="grid grid-cols-1 p-6 lg:flex lg:p-0">
                    <img src={LogoGreen} alt="logo_mobile" className="w-32 h-32 block lg:hidden m-auto"/>
                    <div className="p-12 hidden lg:block bg-theme-login rounded-l-lg shadow-xl">
                        <div className="h-full w-full py-6 grid grid-rows-2">
                            <div id="Logo" className="flex flex-col">
                                <img src={LogoWhite} alt="logo" onClick={() => navigate("/")}
                                     className="w-36 h-36 hidden lg:block m-auto cursor-pointer"/>
                                <h1 className="text-4xl font-bold text-white text-center">3in1</h1>
                            </div>
                            <div className="flex">
                                <ol className="text-white text-sm m-auto space-y-2">
                                    <li className="flex"><LocationMarkerIcon className="w-4 h-4"/>
                                        <span className="ml-2">Simply create your calendar</span>
                                    </li>
                                    <li className="flex"><LocationMarkerIcon className="w-4 h-4"/>
                                        <span className="ml-2">Add content for each days</span>
                                    </li>
                                    <li className="flex"><LocationMarkerIcon className="w-4 h-4"/>
                                        <span className="ml-2">Share it to the world</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="p-12 bg-theme-brown rounded-r-lg shadow-xl transform transition-all ">
                        <LoginForm/>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <span className="text-black"> Forgot&nbsp;
                        <span className="font-bold underline cursor-pointer"
                              onClick={() => {
                                  navigate("/register?forgot=true")
                              }}>
                         password?
                    </span>
                </span>
                </div>
            </div>
        </div>
    );
}