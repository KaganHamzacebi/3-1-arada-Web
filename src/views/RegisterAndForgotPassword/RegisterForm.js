import {useForm} from "react-hook-form";
import {EyeIcon, EyeOffIcon} from "@heroicons/react/solid";
import {useState} from "react";
import UserService from "../../service/UserService";

export default function RegisterForm() {
    const userService = new UserService();

    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        await userService.signUp(data)
            .then((res) => {
                if (res.status === 200) {
                    //TODO: successful implementation
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                }
            })
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white mb-12">Sign Up</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            {...register("name")}
                            placeholder="First Name"
                            maxLength={50}
                            className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <input
                            {...register("surname")}
                            placeholder="Last Name"
                            maxLength={50}
                            className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                            required
                        />
                    </div>
                </div>
                <div>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        type="email"
                        maxLength={50}
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />
                </div>
                <div className="relative">
                    <input
                        {...register("password")}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        minLength={6}
                        maxLength={40}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select
                        {...register("gender")}
                        defaultValue={0}
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    >
                        <option value="FEMALE">Female</option>
                        <option value="MALE">Male</option>
                        <option value="OTHER">Other</option>
                    </select>
                    <input
                        {...register("birthDate")}
                        placeholder="Birth Date"
                        type="date"
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                    />
                </div>
                <div>
                    <input
                        {...register("sign")}
                        type="checkbox"
                        className="w-4 h-4 rounded outline-none"
                        required
                    />
                    <label className="pl-2 text-xs text-center text-white">By signing up, you agree to the
                        Terms of Service and Privacy Policy, including Cookie Use.</label>
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