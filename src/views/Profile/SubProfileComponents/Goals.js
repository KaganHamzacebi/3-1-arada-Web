import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import GoalImg from "../../../assets/goals_img.svg";

export default function Goals(
    props
) {

    const {register, handleSubmit} = useForm();

    const [sleepValue, setSleepValue] = useState(props.sleepGoalValue);
    const [meditationValue, setMeditationValue] = useState(props.meditationValue);
    const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(false);

    useEffect(() => {
        if (sleepValue == props.sleepGoalValue && meditationValue == props.meditationValue) {
            setIsSaveButtonVisible(false);
        }
        else {
            setIsSaveButtonVisible(true);
        }
    }, [sleepValue, meditationValue])

    return (
        <div className="w-full h-full p-4">
            <div className="flex flex-col w-full h-full p-4 bg-gray-100 shadow border-1 border-gray-600 border-opacity-10 rounded-lg">
                <span className="text-2xl text-gray-500 font-semibold">Goals</span>
                {/* Forms */}
                <div className="flex gap-x-2">
                    <div className="w-1/2 flex flex-col gap-y-4 mt-3 p-4 rounded-lg border border-gray-300">
                        <div className="flex flex-col">
                            <span className="font-bold">Sleep Goal</span>
                            <input
                                {...register("sleepGoal")}
                                placeholder="Sleep Goal"
                                defaultValue={sleepValue === -1 ? 8 : sleepValue}
                                onChange={(e) => {setSleepValue(e.target.value)}}
                                min={0}
                                max={24}
                                type="number"
                                className={`w-full mt-1 p-2 rounded focus:ring-2 focus:ring-theme-pink outline-none`}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">Meditation Goal</span>
                            <input
                                {...register("meditationGoal")}
                                placeholder="Meditation Goal"
                                defaultValue={meditationValue === -1 ? 3 : meditationValue}
                                onChange={(e) => {setMeditationValue(e.target.value)}}
                                min={0}
                                max={24}
                                type="number"
                                className={`w-full mt-1 p-2 rounded focus:ring-2 focus:ring-theme-pink outline-none`}
                                required
                            />
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col mt-3 px-4">
                        <div className="flex flex-grow">
                            <img src={GoalImg} className="m-auto w-8/12"/>
                        </div>
                        <div className="flex-grow">
                            <button className={`w-full font-bold text-white opacity-0 transition-all transform duration-700 ${isSaveButtonVisible ? "opacity-100" : "opacity-0"} mx-auto self-end bg-theme-blue p-2 rounded hover:bg-opacity-80`}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}