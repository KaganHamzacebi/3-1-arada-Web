import {
    CakeIcon,
    CalendarIcon,
    ChatAlt2Icon,
    ClipboardCheckIcon,
    ClockIcon,
    MoonIcon,
    StarIcon,
    ClipboardListIcon,
    HeartIcon
} from "@heroicons/react/solid";

export default function Achievements(
    achievement
) {

    switch (achievement.achievementType) {
        case "LOGIN_INTO_ACCOUNT":
            return <StarIcon  data-tip={achievement.description}
                             className={`w-14 h-14 ${achievement.completed ? "text-yellow-400" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "USE3IN1_FOR_THREE_MONTHS":
            return <CalendarIcon  data-tip={achievement.description}
                          className={`w-14 h-14 ${achievement.completed ? "text-red-400" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "USE3IN1_FOR_ONE_YEAR":
            return <CakeIcon  data-tip={achievement.description}
                                 className={`w-14 h-14 ${achievement.completed ? "text-pink-400" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "USE_CHAT_MODULE_FOR_100_HOURS":
            return <ChatAlt2Icon  data-tip={achievement.description}
                             className={`w-14 h-14 ${achievement.completed ? "text-green-400" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "USE_SLEEP_MODULE_FOR_100_HOURS":
            return <MoonIcon  data-tip={achievement.description}
                                 className={`w-14 h-14 ${achievement.completed ? "text-blue-800" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "USE_MEDITATION_MODULE_FOR_30_MINUTES_DAILY":
            return <ClipboardCheckIcon  data-tip={achievement.description}
                             className={`w-14 h-14 ${achievement.completed ? "text-blue-600" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "USE_SLEEP_MODULE_FOR_8_HOURS_DAILY":
            return <ClockIcon data-tip={achievement.description}
                                       className={`w-14 h-14 ${achievement.completed ? "text-green-600" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "COMPLETE_YOUR_SLEEP_GOAL_3_TIMES":
            return <HeartIcon data-tip={achievement.description}
                              className={`w-14 h-14 ${achievement.completed ? "text-green-600" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
        case "COMPLETE_15_ITEMS_IN_TODO_LIST":
            return <ClipboardListIcon data-tip={achievement.description}
                              className={`w-14 h-14 ${achievement.completed ? "text-purple-600" : "text-gray-600"} transition transform duration-700 hover:scale-125`}/>
    }
}