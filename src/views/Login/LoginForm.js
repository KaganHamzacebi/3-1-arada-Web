import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {EyeIcon, EyeOffIcon} from "@heroicons/react/solid";
import UserService from "../../service/UserService";
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie';
import {LoginErrorContext} from "./Login";

export default function LoginForm() {
    const {register, handleSubmit} = useForm();
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const {setShowLoginError, setLoginErrorMessage} = useContext(LoginErrorContext);
    const userService = new UserService();

    const onSubmit = async data => {
        await userService.login(data)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.accessToken) {
                        setCookie("userToken", res.data.accessToken, {secure: true, sameSite: 'none'});
                    }
                    navigate("/");
                    window.location.reload();
                }
            })
            .catch((err) => {
                if (err.response) {
                    setLoginErrorMessage(err.response.data.message);
                } else {
                    setLoginErrorMessage("An error occurred!");
                }
                setShowLoginError(true);
                setTimeout(() => setShowLoginError(false), 2000);
            })

    };
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white mb-12"> Login </h1>
                <div>
                    <input
                        {...register("username")}
                        placeholder="Username"
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />
                </div>
                <div className="relative">
                    <input
                        {...register("password")}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />
                    <EyeIcon
                        className={`absolute w-6 h-6 right-2 top-2 text-theme-brown cursor-pointer z-50 ${showPassword && "hidden"}`}
                        onClick={() => {
                            setShowPassword(!showPassword)
                        }}
                    />
                    <EyeOffIcon
                        className={`absolute w-6 h-6 right-2 top-2 text-theme-brown cursor-pointer z-50 ${!showPassword && "hidden"}`}
                        onClick={() => {
                            setShowPassword(!showPassword)
                        }}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        className="w-full bg-theme-green p-2 font-semibold text-white cursor-pointer rounded outline-none pointer transform transition-colors duration-500 hover:bg-green-600"
                        required
                    />
                </div>
            </div>
        </form>
    );
}