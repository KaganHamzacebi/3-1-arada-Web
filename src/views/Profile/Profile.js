import "./Profile.css";
import Header from "../../components/Header";
import ProfileForm from "./ProfileForm";
import 'react-circular-progressbar/dist/styles.css';
import {createContext, useContext, useEffect, useState} from "react";
import ReactTooltip from 'react-tooltip';
import {CheckCircleIcon, ExclamationCircleIcon, PlusCircleIcon, UserCircleIcon} from "@heroicons/react/solid";
import ProfileProgressBars from "./SubProfileComponents/ProfileProgressBars";
import ProfileAchievements from "./SubProfileComponents/ProfileAchievements";
import Goals from "./SubProfileComponents/Goals";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";
import ProfileService from "../../service/ProfileService";

export const ProfileNotificationContext = createContext(null);

export default function Profile() {
    const navigate = useNavigate();
    const [isProfile, setIsProfile] = useState(true);
    const profileService = new ProfileService();
    const {user, userToken} = useContext(UserContext);

    const [isPasswordChange, setIsPasswordChange] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState(false);
    const [isSuccessNotification, setIsSuccessNotification] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate("/register");
        }
    }, [])

    const updateProfilePhoto = photo => {
        const formData = new FormData();

        formData.append("image", photo);

        profileService.updateUserPhoto(formData, userToken)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => {
                setIsSuccessNotification(false);
                if (err.response) {
                    setNotificationMessage(err.response.data.message);
                } else {
                    setNotificationMessage("An error occurred!");
                }
                setShowNotification(true);
                setTimeout(() => setShowNotification(false), 2000);
            })
    }

    return (
        <ProfileNotificationContext.Provider value={{setShowNotification, setNotificationMessage, setIsSuccessNotification, setIsPasswordChange}}>
            <div id="profileWrapper">
                <ReactTooltip backgroundColor="#4B5563"/>
                <div
                    className={`fixed left-1/2 p-6 bottom-8 text-center transition-all duration-500 opacity-0 ${showNotification ? "opacity-100" : "opacity-0"} transform translate -translate-x-1/2 rounded-xl ${setIsSuccessNotification ? "bg-green-600" : "bg-gray-200"} z-50`}>
                    <div className="flex flex-row">
                        {
                            isSuccessNotification ?
                                <CheckCircleIcon className="w-8 h-8 mr-2 text-white"/>
                                :
                                <ExclamationCircleIcon className="w-8 h-8 mr-2 text-theme-blue"/>
                        }
                        <span
                            className={`m-auto text-xl ${setIsSuccessNotification ? "text-white" : "text-theme-blue"} text-theme-blue"`}>{notificationMessage}</span>
                    </div>
                </div>
                <Header/>
                <div className="w-full h-full pt-28 pb-8 px-14 grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-rows-3 rounded-l-xl bg-theme-blue shadow-lg z-10 relative">
                        <div className="md:row-span-1 flex rounded-tl-xl">
                            <div className="m-auto relative">
                                {
                                    user && user.profilePicture ?
                                        <img
                                            src={`data:image/jpeg;base64,${user.profilePicture}`}
                                            className="m-auto w-40 h-40 border-2 border-gray-300 shadow-2xl rounded-circle relative"
                                            alt="avatar_image"
                                        />
                                        :
                                        <UserCircleIcon
                                            className="m-auto text-gray-300 w-40 h-40 border-2 border-gray-300 shadow-2xl rounded-circle relative"
                                        />
                                }
                                <div
                                    className="absolute w-8 h-8 bottom-1.5 right-1.5 bg-gray-300 rounded-circle shadow-xl">
                                    <PlusCircleIcon className="w-8 h-8 text-green-900"/>
                                </div>
                                <input type="file"
                                       accept="image/*"
                                       onChange={(e) => updateProfilePhoto(e.target.files[0])}
                                       className="absolute opacity-0 w-8 h-8 bottom-1.5 right-1.5 bg-white rounded-circle"/>
                            </div>
                        </div>
                        <div className="md:row-span-2 px-4 rounded-bl-xl">
                            <ProfileForm/>
                        </div>
                    </div>
                    <div className="col-span-2 rounded-r-xl bg-gray-200 shadow-lg z-20 relative">
                        {/* Tabs */}
                        <div className="absolute -right-13 top-10 z-10">
                            {/* Profile tab */}
                            <div
                                className={`${isProfile ? "bg-gray-200" : "bg-gray-300 bg-opacity-70"} cursor-pointer transform rotate-90 p-2 shadow-inner rounded-t-lg`}
                                onClick={() => {
                                    setIsProfile(true)
                                }}
                            >
                                <span className="font-semibold text-theme-pink">Profile</span>
                            </div>
                            {/* Goals tab */}
                            <div
                                className={`${!isProfile ? "bg-gray-200" : "bg-gray-300 bg-opacity-70"} cursor-pointer transform rotate-90 p-2 shadow-inner rounded-t-lg mt-8`}
                                onClick={() => {
                                    setIsProfile(false)
                                }}
                            >

                                <span className="font-semibold text-theme-pink">Goals</span>
                            </div>
                        </div>
                        <div className="w-full h-full grid grid-rows-5">
                            {/* Progress Bars */}
                            <div className="row-span-3">
                                {
                                    isProfile ?
                                        <ProfileProgressBars sleepValue={20} meditationValue={77}/>
                                        :
                                        <Goals sleepGoalValue={7} meditationValue={5}/>
                                }
                            </div>
                            {/* Achievement Bar */}
                            <div className="row-span-2">
                                <ProfileAchievements/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileNotificationContext.Provider>
    )
}