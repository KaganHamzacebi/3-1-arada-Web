import {
    CakeIcon,
    CalendarIcon,
    ChatAlt2Icon, ClipboardCheckIcon,
    ClockIcon,
    DesktopComputerIcon,
    MoonIcon, MusicNoteIcon,
    StarIcon, ThumbUpIcon
} from "@heroicons/react/solid";

export default function ProfileAchievements() {

    return (
        <div className="w-full h-full px-4 pb-4">
            <div className="w-full h-full p-4 bg-gray-100 shadow border-1 border-gray-600 border-opacity-10 rounded-lg">
                <span className="text-xl text-gray-500 font-semibold">Achievements</span>
                <div className="py-2 max-h-36 grid grid-cols-8 overflow-y-auto gap-4">
                    <StarIcon data-tip="Login into account" className="w-14 h-14 text-yellow-400 transition transform duration-700 hover:scale-125" />
                    <DesktopComputerIcon data-tip="Login into website" className="w-14 h-14 text-gray-600 transition transform duration-700 hover:scale-125" />
                    <CalendarIcon data-tip="Use 3in1 for three months" className="w-14 h-14 text-red-400 transition transform duration-700 hover:scale-125" />
                    <CakeIcon data-tip="Use 3in1 for one year" className="w-14 h-14 text-pink-400 transition transform duration-700 hover:scale-125" />
                    <ChatAlt2Icon data-tip="Use chat module for 100 hours" className="w-14 h-14 text-green-600 transition transform duration-700 hover:scale-125" />
                    <MoonIcon data-tip="Use sleep module for 100 hours" className="w-14 h-14 text-blue-800 transition transform duration-700 hover:scale-125" />
                    <ClockIcon data-tip="Complete your sleep goal 3 times" className="w-14 h-14 text-green-600 transition transform duration-700 hover:scale-125" />
                    <ClipboardCheckIcon data-tip="Complete 15 items in TO-DO list" className="w-14 h-14 text-blue-600 transition transform duration-700 hover:scale-125" />
                    <ThumbUpIcon data-tip="Rate your chat experience" className="w-14 h-14 text-green-600 transition transform duration-700 hover:scale-125" />
                    <MusicNoteIcon data-tip="Play a relaxing song while sleeping" className="w-14 h-14 text-purple-600 transition transform duration-700 hover:scale-125" />
                </div>
            </div>
        </div>
    )
}