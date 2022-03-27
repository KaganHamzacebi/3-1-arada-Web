import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {CogIcon, LogoutIcon} from "@heroicons/react/solid";
import ProfileService from "../../service/ProfileService";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import "./ProfileForm.css";

export default function ProfileForm() {
    const navigate = useNavigate();
    const profileService = new ProfileService();
    const {user, userToken} = useContext(UserContext);
    const [isEditMode, setIsEditMode] = useState(false);

    const [firstNameValue, setFirstNameValue] = useState("Melissa");
    const [lastNameValue, setLastNameValue] = useState("Göşmen");
    const [emailValue, setEmailValue] = useState("gosmenmelissa@gmail.com");
    const [genderValue, setGenderValue] = useState("FEMALE");
    const [birthDateValue, setBirthDateValue] = useState("1998-02-14");

    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {};

    useEffect(() => {

    });

    const save = () => {

    };

    const cancel = () => {

    };

    return (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full my-auto space-y-2 flex flex-col relative">
                <CogIcon className="w-6 h-6 cursor-pointer transform translate duration-500 hover:rotate-90 self-end" onClick={() => {
                    setIsEditMode(!isEditMode)
                }} color="white"/>
                <div className={`${isEditMode ? "block" : "hidden"} absolute -bottom-14 right-0`}>
                    <div
                        className="flex flex-row p-1 px-2 rounded-lg cursor-pointer bg-white"
                        onClick={() => {

                        }}>
                            <span
                                className="text-theme-pink font-bold my-auto self-start">
                                Save
                            </span>
                    </div>
                </div>
                <div className={`${isEditMode ? "block" : "hidden"} absolute -bottom-14 right-16`}>
                    <div
                        className="flex flex-row p-1 px-2 rounded-lg cursor-pointer bg-red-600"
                        onClick={() => {
                            cancel();
                        }}>
                            <span
                                className="text-white font-bold my-auto self-start">
                                Cancel
                            </span>
                    </div>
                </div>
                <div className="absolute -bottom-14 left-0">
                    <div
                        className="flex flex-row p-1 px-2 rounded-lg cursor-pointer transform transition-all duration-500 hover:bg-red-600 group"
                        onClick={() => {

                        }}>
                        <LogoutIcon
                            className="w-4 h-4 transform transition-all group-hover:text-white duration-500 text-theme-pink my-auto self-start mr-2"/>
                        <span
                            className="transform transition-all duration-500 text-theme-pink group-hover:text-white font-bold my-auto self-start">
                                Logout
                            </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                    <div>
                        <span className="text-white font-semibold">First Name</span>
                        <input
                            {...register("name")}
                            placeholder="First Name"
                            maxLength={50}
                            disabled={!isEditMode}
                            defaultValue={firstNameValue}
                            className={`w-full ${isEditMode ? "text-black" : "text-white font-bold"} mt-1 p-2 rounded outline-none`}
                            required
                        />
                    </div>
                    <div>
                        <span className="text-white font-semibold">Last Name</span>
                        <input
                            {...register("surname")}
                            placeholder="Last Name"
                            maxLength={50}
                            disabled={!isEditMode}
                            defaultValue={lastNameValue}
                            className={`w-full ${isEditMode ? "text-black" : "text-white font-bold"} mt-1 p-2 rounded outline-none`}
                            required
                        />
                    </div>
                </div>
                <div>
                    <span className="text-white font-semibold">Email</span>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        type="email"
                        maxLength={50}
                        disabled={!isEditMode}
                        defaultValue={emailValue}
                        className={`w-full ${isEditMode ? "text-black" : "text-white font-bold"} mt-1 p-2 rounded outline-none`}
                        required
                    />
                </div>
                <div>
                    <span className="text-white font-semibold">Password</span>
                    {
                        isEditMode ?
                            <button className="w-full text-white font-bold bg-gray-400 rounded mt-1 p-2">
                                Change Password
                            </button>
                            :
                            <input
                                {...register("password")}
                                placeholder="Password"
                                type={"password"}
                                minLength={6}
                                maxLength={40}
                                disabled="disabled"
                                defaultValue={"********"}
                                className={`w-full text-white font-bold mt-1 p-2 rounded outline-none`}
                                required
                            />
                    }
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                    <div>
                        <span className="text-white font-semibold">Gender</span>
                        <select
                            {...register("gender")}
                            className={`w-full ${isEditMode ? "text-black" : "text-white font-bold"} mt-1 p-2 rounded outline-none`}
                            defaultValue={genderValue}
                            required
                            disabled={!isEditMode}
                        >
                            <option value="FEMALE">Female</option>
                            <option value="MALE">Male</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div>
                        <span className="text-white font-semibold">Birth Date</span>
                        <input
                            {...register("birthDate")}
                            placeholder="Birth Date"
                            defaultValue={birthDateValue}
                            type="date"
                            className={`w-full ${isEditMode ? "text-black" : "text-white font-bold"} mt-1 p-2 rounded outline-none`}
                            disabled={!isEditMode}
                        />
                    </div>
                </div>
            </div>
        </form>
    );

}