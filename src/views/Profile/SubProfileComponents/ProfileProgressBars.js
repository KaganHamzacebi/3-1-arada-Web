import AnimatedProgressProvider from "../../../components/AnimatedProgressProvider/AnimatedProgressProvider";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useEffect, useState} from "react";

export default function ProfileProgressBars(
    props
) {

    const [sleepProgressValue, setSleepProgressValue] = useState(props.sleepValue);
    const [meditationProgressValue, setMeditationProgressValue] = useState(props.meditationValue);

    useEffect(() => {
        setSleepProgressValue(props.sleepValue);
        setMeditationProgressValue(props.meditationValue);
    }, [props])

    return (
        <div className="w-full h-full flex gap-x-4 p-4">
            <div className="w-full flex flex-col bg-gray-100 shadow border-1 border-gray-600 border-opacity-10 rounded-lg">
                <span className="ml-4 mt-2 text-xl text-gray-500 font-semibold">Sleep<br></br>Progress</span>
                <div className="m-auto w-2/3 lg:w-1/2">
                    {/* Sleep Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={sleepProgressValue}
                        duration={2}
                        easingFunction={easeQuadInOut}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    strokeWidth={12}
                                    /* This is important to include, because if you're fully managing the
                              animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({
                                            pathTransition: "none",
                                            pathColor: `rgba(146, 167, 75, ${100 / 100})`,
                                            textColor: '#92A74B'
                                        }
                                    )}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
            <div className="w-full flex flex-col bg-gray-100 shadow border-1 border-gray-600 border-opacity-10 rounded-lg">
                <span className="ml-4 mt-2 text-xl text-gray-500 font-semibold">Meditation<br></br>Progress</span>
                <div className="m-auto w-2/3 lg:w-1/2">
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={meditationProgressValue}
                        duration={2.5}
                        easingFunction={easeQuadInOut}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    strokeWidth={12}
                                    /* This is important to include, because if you're fully managing the
                              animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({
                                            pathTransition: "none",
                                            pathColor: `rgba(62, 152, 199, ${100 / 100})`
                                        }
                                    )}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
        </div>
    )
}