import {useForm} from "react-hook-form";
import UserService from "../../service/UserService";
import {useContext, useState} from "react";
import {RegisterErrorContext} from "./RegisterAndForgotPassword";

export default function ForgotPasswordForm() {

    const userService = new UserService();
    const [emailLoading, setEmailLoading] = useState(false);
    const [emailSent, isEmailSent] = useState(false);
    const {setShowRegisterError, setRegisterErrorMessage} = useContext(RegisterErrorContext);

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        if (data.email) {
            setEmailLoading(true);
            userService.forgotPassword(data.email)
                .then((res) => {
                    isEmailSent(true);
                    setEmailLoading(false);
                    console.log(res);
                })
                .catch((err) => {
                    setEmailLoading(false);
                    console.log(err);
                    if (err.response) {
                        setRegisterErrorMessage(err.response.data.message);
                    } else {
                        setRegisterErrorMessage("An error occurred!");
                    }
                    setShowRegisterError(true);
                    setTimeout(() => setShowRegisterError(false), 2000);
                })
        }
    }

    return (
        <form className="h-full flex" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-full space-y-4 flex flex-col">
                <h1 className="text-4xl font-bold text-white mb-12">Forgot Password</h1>
                {
                    emailLoading ?
                        <div className="m-auto">
                            <div className='flex'>
                                <div className="mx-auto loader">
                                    <div className="bubble"></div>
                                    <div className="bubble"></div>
                                    <div className="bubble"></div>
                                </div>
                            </div>
                        </div>
                        :
                        emailSent ?
                            <div className="mx-auto bg-gray-200 p-4 rounded-xl shadow-xl">
                                <span className="text-gray-600 font-semibold">Password Recovery email is sent</span>
                            </div>
                            :
                            <div className="h-full space-y-4 flex flex-col">
                                <div>
                                    <input
                                        {...register("email")}
                                        placeholder="Email"
                                        type="email"
                                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-900 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        className="w-full self-end text-white p-2 bg-theme-green font-semibold cursor-pointer rounded outline-none pointer transform transition-colors duration-500 hover:bg-green-600"
                                        required
                                    />
                                </div>
                            </div>
                }
            </div>
        </form>
    )
}