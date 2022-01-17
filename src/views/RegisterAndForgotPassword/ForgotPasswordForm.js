import {useForm} from "react-hook-form";
import UserService from "../../service/UserService";

export default function ForgotPasswordForm() {

    const userService = new UserService();

    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    //const onSubmit = data => userService.forgotPassword(data);

    return (
        <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-full space-y-4 flex flex-col">
                <h1 className="text-4xl font-bold text-white mb-12">Forgot Password</h1>
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
        </form>
    )
}