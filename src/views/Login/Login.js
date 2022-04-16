import {useNavigate} from "react-router-dom";
import LogoGreen from "../../assets/images/logo_green.png";
import LogoWhite from "../../assets/images/logo_white.png";
import {LocationMarkerIcon} from "@heroicons/react/outline";
import LoginForm from "./LoginForm"
import "./Login.css";
import {createContext, useState} from "react";
import {ExclamationCircleIcon} from "@heroicons/react/solid";

export const LoginErrorContext = createContext(null);

export default function Login() {
    const navigate = useNavigate();

    const [showLoginError, setShowLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("An unexpected error occurred!");

    return (
        <LoginErrorContext.Provider value={{setShowLoginError, setLoginErrorMessage}}>
            <div
                className={`fixed left-1/2 p-6 pointer-events-none bottom-8 text-center transition-all duration-500 opacity-0 ${showLoginError ? "opacity-100" : "opacity-0"} transform translate -translate-x-1/2 rounded-xl bg-gray-200 z-50`}>
                <div className="flex flex-row">
                    <ExclamationCircleIcon className="w-8 h-8 mr-2 text-theme-blue"/>
                    <span
                        className="m-auto text-xl text-theme-blue">Username or password is incorrect!</span>
                </div>
            </div>
            <div id="loginWrapper" className="w-full md:h-full">
                <div className="m-auto">
                    <div className="grid grid-cols-1 p-6 lg:flex lg:p-0">
                        <img src={LogoGreen} alt="logo_mobile" onClick={() => navigate("/")}
                             className="w-32 h-32 cursor-pointer block lg:hidden m-auto"/>
                        <div className="p-12 hidden lg:block bg-theme-green rounded-l-lg shadow-xl">
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
                        <div
                            className="p-12 bg-theme-brown rounded-r-lg shadow-xl transform transition-all duration-300">
                            <LoginForm/>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-black">Create an <a href="/register"
                                                                  className="font-bold underline cursor-pointer">account?</a></span>
                        <span className="text-black"> / Forgot&nbsp;
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
        </LoginErrorContext.Provider>
    );
}