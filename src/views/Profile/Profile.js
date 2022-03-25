import "./Profile.css";
import Header from "../../components/Header";
import ProfileForm from "./ProfileForm";
import 'react-circular-progressbar/dist/styles.css';
import {useState} from "react";
import Melissa from "../../assets/melissa_img.jpeg";
import ReactTooltip from 'react-tooltip';
import ProfileProgressBars from "./SubProfileComponents/ProfileProgressBars";
import ProfileAchievements from "./SubProfileComponents/ProfileAchievements";
import Goals from "./SubProfileComponents/Goals";

export default function Profile() {

    const [isProfile, setIsProfile] = useState(true);

    return (
        <div id="profileWrapper">
            <ReactTooltip backgroundColor="#4B5563" />
            <Header/>
            <div className="w-full h-full pt-28 pb-8 px-14 grid grid-cols-1 md:grid-cols-3">
                <div className="grid grid-rows-3 rounded-l-xl bg-theme-blue shadow-lg z-10 relative">
                    <div className="md:row-span-1 flex rounded-tl-xl">
                        <img
                            src={Melissa}
                            className="m-auto w-40 h-40 border-2 border-gray-300 shadow-2xl rounded-circle relative"
                            alt="avatar_image"
                        />
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
                            onClick={() => {setIsProfile(true)}}
                        >
                            <span className="font-semibold text-theme-pink">Profile</span>
                        </div>
                        {/* Goals tab */}
                        <div
                            className={`${!isProfile ? "bg-gray-200" : "bg-gray-300 bg-opacity-70"} cursor-pointer transform rotate-90 p-2 shadow-inner rounded-t-lg mt-8`}
                            onClick={() => {setIsProfile(false)}}
                        >

                            <span className="font-semibold text-theme-pink">Goals</span>
                        </div>
                    </div>
                    <div className="w-full h-full grid grid-rows-5">
                        {/* Progress Bars */}
                        <div className="row-span-3">
                            {
                                isProfile ?
                                    <ProfileProgressBars sleepValue={95} meditationValue={77} />
                                    :
                                    <Goals sleepGoalValue={7} meditationValue={5} />
                            }
                        </div>
                        {/* Achievement Bar */}
                        <div className="row-span-2">
                            <ProfileAchievements />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}