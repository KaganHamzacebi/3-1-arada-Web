import {
    CakeIcon,
    CalendarIcon,
    ChatAlt2Icon, ClipboardCheckIcon,
    ClockIcon,
    DesktopComputerIcon,
    MoonIcon, MusicNoteIcon,
    StarIcon, ThumbUpIcon
} from "@heroicons/react/solid";
import {useContext, useEffect, useState} from "react";
import AchievementService from "../../../service/AchievementService";
import {UserContext} from "../../../App";
import Achievements from "./Achievements";
import ReactTooltip from "react-tooltip";

export default function ProfileAchievements() {

    const {userToken} = useContext(UserContext);
    const achievementService = new AchievementService();
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        achievementService.getAchievements(userToken)
            .then((res) => {
                if (res.status === 200) {
                    setAchievements(res.data.modelList);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className="w-full h-full px-4 pb-4">
            <div className="w-full h-full p-4 bg-gray-100 shadow border-1 border-gray-600 border-opacity-10 rounded-lg">
                <span className="text-xl text-gray-500 font-semibold">Achievements</span>
                <div className="py-2 max-h-36 grid grid-cols-8 overflow-y-auto gap-4">
                    {
                        achievements.map((achievement) => {
                            return <div key={achievement.id}>
                                <ReactTooltip backgroundColor="#4B5563"/>
                                {Achievements(achievement)}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}