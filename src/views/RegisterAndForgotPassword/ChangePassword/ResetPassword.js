import {useForm} from "react-hook-form";
import UserService from "../../../service/UserService";
import {useEffect} from "react";
import "./ResetPassword.css";
import {useNavigate, useParams} from "react-router-dom";

export default function ResetPassword() {

    const userService = new UserService();
    const {token} = useParams();
    const navigate = useNavigate();


    const {register, handleSubmit} = useForm();
    const onSubmit = data => {}

    useEffect(() => {
        if (token) {
            userService.checkExpire(token)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            navigate("/");
        }
    })

    return (
        <div id="resetPassWrapper" className="w-screen h-screen">
            <div className="fixed w-8/12 lg:w-4/12 p-4 rounded-xl shadow-xl bg-gray-200 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-b border-gray-300 pb-4">
                        <span className="text-2xl font-semibold text-gray-600">Reset Password</span>
                    </div>
                    <div className="pt-4">
                        <div className="flex">
                            <input
                                {...register("password")}
                                placeholder="Password"
                                type={"password"}
                                minLength={6}
                                maxLength={40}
                                className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                                required
                            />
                        </div>
                        <div className="flex pt-2">
                            <input
                                type="submit"
                                className="w-full text-white p-2 bg-theme-green font-semibold cursor-pointer rounded outline-none pointer transform transition-colors duration-500 hover:bg-green-600"
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}