import {LocationMarkerIcon} from "@heroicons/react/outline";
import RegisterForm from "./RegisterForm";
import {createContext, useEffect, useState} from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LogoWhite from "../../assets/images/logo_white.png";
import LogoGreen from "../../assets/images/logo_green.png";
import {useNavigate, useSearchParams} from "react-router-dom";

import "./RegisterAndForgotPassword.css";
import {ExclamationCircleIcon} from "@heroicons/react/solid";
import UserService from "../../service/UserService";

export const RegisterErrorContext = createContext(null);

export default function RegisterAndForgotPassword() {

    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const navigate = useNavigate();
    const userService = new UserService();
    const [searchParams, setSearchParams] = useSearchParams();
    const [showRegisterError, setShowRegisterError] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState("An unexpected error occurred!");

    useEffect(() => {
        const showForgot = searchParams.get("forgot");
        setIsForgotPassword(showForgot === "true")
    }, [])

    return (
        <RegisterErrorContext.Provider value={{setShowRegisterError, setRegisterErrorMessage}}>
            <div id="registerAndForgotPasswordWrapper" className="w-full md:h-full">
                <div
                    className={`fixed left-1/2 pointer-events-none p-6 bottom-8 text-center transition-all duration-500 opacity-0 ${showRegisterError ? "opacity-100" : "opacity-0"} transform translate -translate-x-1/2 rounded-xl bg-gray-200 z-50`}>
                    <div className="flex flex-row">
                        <ExclamationCircleIcon className="w-8 h-8 mr-2 text-theme-blue"/>
                        <span className="m-auto text-xl text-theme-blue">{registerErrorMessage ? registerErrorMessage : "An unexpected error occurred!"}</span>
                    </div>
                </div>
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
                            {
                                isForgotPassword ?

                                    <ForgotPasswordForm/>
                                    :
                                    <RegisterForm/>
                            }
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-black">Already have an <a href="/login"
                                                                        className="font-bold underline cursor-pointer">account?</a></span>
                        <span className="text-black"> / {isForgotPassword ? "Sign " : "Forgot "}
                            <span className="font-bold underline cursor-pointer"
                                  onClick={() => {
                                      navigate("/register?forgot=true")
                                  }}>
                        {isForgotPassword ? "up" : "password?"}
                    </span>
                </span>
                    </div>
                </div>
            </div>
        </RegisterErrorContext.Provider>
    );
}