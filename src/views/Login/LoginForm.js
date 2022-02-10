import {useForm} from "react-hook-form";
import {useState} from "react";
import {EyeIcon, EyeOffIcon} from "@heroicons/react/solid";
import UserService from "../../service/UserService";

export default function LoginForm() {

    const {register, handleSubmit} = useForm();
    //const onSubmit = data => console.log(data);
    const userService = new UserService();
    const onSubmit = data => userService.login(data);
    const [showPassword, setShowPassword] = useState(false);

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
                        className="w-full bg-theme-darkbrown p-2 font-semibold text-white cursor-pointer rounded outline-none pointer transform transition-colors duration-500 hover:bg-theme-darkerbrown"
                        required
                    />
                </div>
            </div>
        </form>
    );
}