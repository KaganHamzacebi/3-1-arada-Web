import Popup from "reactjs-popup";
import modal from "bootstrap/js/src/modal";
import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../App";
import {useCookies} from "react-cookie";
import {ProfileNotificationContext} from "../Profile";
import {PasswordChangeContext, ProfileFormContext} from "../ProfileForm";
import UserService from "../../../service/UserService";

export default function PasswordChangeModal(
    props
) {
    const {
        register,
        handleSubmit: handleSubmitPass
    } = useForm();

    const userService = new UserService();

    const {user, userToken} = useContext(UserContext);
    const {setIsProfileRequest} = useContext(ProfileFormContext);
    const {open, setOpen} = useContext(PasswordChangeContext);
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const {
        setShowNotification,
        setNotificationMessage,
        setIsSuccessNotification
    } = useContext(ProfileNotificationContext);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("An error occurred!");
    const contentStyle = {borderRadius: "8px", padding: "16px", width: "40vw"};

    const closeModal = () => setOpen(false);

    const onSubmitPass = data => {
        if (data.newPassword === data.newPasswordRepeat) {
            data.email = user.email;
            delete data.newPasswordRepeat;
            userService.updatePass(data)
                .then((res) => {
                    if (res.status === 200) {
                        closeModal();
                        setShowNotification(true);
                        setNotificationMessage("Password is successfully changed!");
                        setIsSuccessNotification(true);
                        setTimeout(() => setShowNotification(false), 2000);
                    }
                })
                .catch((err) => {
                    setShowError(true);
                    if (err.response) {
                        setErrorMessage(err.response.data);
                    } else {
                        setErrorMessage("An error occurred!");
                    }
                    setTimeout(() => setShowError(false), 2000);
                })
        } else {
            setErrorMessage("Old and new passwords do not match");
            setShowError(true);
            setTimeout(() => setShowError(false), 2000);
        }
    }

    return (
        <Popup
            open={open}
            closeOnDocumentClick
            onClose={closeModal}

            {...{contentStyle, modal}}
        >
            <form className="w-full" onSubmit={handleSubmitPass(onSubmitPass)}>
                <div>
                    <div className="w-full border-b p-2">
                        <span className="font-semibold text-2xl text-gray-600">Change password</span>
                    </div>
                    <div className="p-2 pt-3 flex flex-col gap-y-4">
                        <div>
                            <span className="text-sm font-semibold text-gray-500">Old Password</span>
                            <input
                                {...register("oldPassword")}
                                type="password"
                                minLength={6}
                                maxLength={40}
                                className="w-full mt-1 p-2 rounded ring-1 ring-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-500">New Password</span>
                            <input
                                {...register("newPassword")}
                                type="password"
                                minLength={6}
                                maxLength={40}
                                className="w-full mt-1 p-2 rounded ring-1 ring-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-500">New Password Repeat</span>
                            <input
                                {...register("newPasswordRepeat")}
                                type="password"
                                minLength={6}
                                maxLength={40}
                                className="w-full mt-1 p-2 rounded ring-1 ring-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                                required
                            />
                        </div>
                        <div className="flex">
                            <div
                                className={`bg-red-500 p-1 px-2 rounded-xl flex opacity-0 transition duration-500 ${showError ? "opacity-100" : "opacity-0"}`}>
                                <span className="font-semibold text-white m-auto">{errorMessage}</span>
                            </div>
                            <div className="flex ml-auto">
                                <div className="mr-2 cursor-pointer bg-red-600 font-semibold p-1 px-2 rounded-lg text-white"
                                        onClick={() => closeModal()}>Cancel
                                </div>
                                <button className="font-semibold cursor-pointer p-1 px-2 rounded-lg bg-green-600 text-white"
                                        type="submit"
                                        onClick={() => setIsProfileRequest(false)}>Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Popup>
    )
}