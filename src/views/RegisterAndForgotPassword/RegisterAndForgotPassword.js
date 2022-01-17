import {AcademicCapIcon} from "@heroicons/react/solid";
import {LocationMarkerIcon} from "@heroicons/react/outline";
import RegisterForm from "./RegisterForm";
import {useState} from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function RegisterAndForgotPassword() {

    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <div className="m-auto">
            <div className="flex flex-end">
                <div className="p-12 bg-theme-green rounded-l-lg shadow-xl">
                    <div className="h-full w-full py-6 grid grid-rows-2">
                        <div id="Logo" className="flex flex-col">
                            <AcademicCapIcon className="w-32 h-32 text-white m-auto"/>
                            <h1 className="text-4xl font-bold text-white text-center">3in1</h1>
                        </div>
                        <div className="flex self-end">
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
                <div className="p-12 bg-theme-brown rounded-r-lg shadow-xl transform transition-all duration-300">
                    {
                        isForgotPassword ?
                            <ForgotPasswordForm/>
                            :
                            <RegisterForm/>
                    }
                </div>
            </div>
            <div className="text-center mt-2">
                <span className="text-black">Already have an <a href="/login" className="font-bold underline cursor-pointer">account?</a></span>
                <span className="text-black"> / {isForgotPassword ? "Sign " : "Forgot " }
                    <span className="font-bold underline cursor-pointer"
                          onClick={() => {
                              setIsForgotPassword(!isForgotPassword)
                          }}>
                        {isForgotPassword ? "up" : "password?"}
                    </span>
                </span>
            </div>
        </div>
    );
}