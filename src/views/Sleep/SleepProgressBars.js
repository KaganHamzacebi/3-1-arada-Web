import {useContext, useEffect, useState} from "react";
import AnimatedProgressProvider from "../../components/AnimatedProgressProvider/AnimatedProgressProvider";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {SleepProgressContext} from "./Sleep";

export default function SleepProgressBars(props) {

    const [monValue, setMonValue] = useState(props.monValue);
    const [tueValue, setTueValue] = useState(props.tueValue);
    const [wedValue, setWedValue] = useState(props.wedValue);
    const [thuValue, setThuValue] = useState(props.thuValue);
    const [friValue, setFriValue] = useState(props.friValue);
    const [satValue, setSatValue] = useState(props.satValue);
    const [sunValue, setSunValue] = useState(props.sunValue);
    const {currentDay, setCurrentDay} = useContext(SleepProgressContext);

    useEffect(() => {
        setMonValue(props.monValue);
        setTueValue(props.tueValue);
        setWedValue(props.wedValue);
        setThuValue(props.thuValue);
        setFriValue(props.friValue);
        setSatValue(props.satValue);
        setSunValue(props.sunValue);
    }, [props])

    const onClick = (day) => {
        setCurrentDay(day);
    }

    return (
        <div className="w-full h-full flex gap-x-4 p-4">
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 0 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>MON</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(0)
                }}>
                    {/* Sleep Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={monValue}
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
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 1 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>TUE</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(1)
                }}>
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={tueValue}
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
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 2 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>WED</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(2)
                }}>
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={wedValue}
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
                                            pathColor: `#f7786b`
                                        }
                                    )}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 3 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>THU</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(3)
                }}>
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={thuValue}
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
                                            pathColor: `#c94c4c`
                                        }
                                    )}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 4 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>FRI</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(4)
                }}>
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={friValue}
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
                                            pathColor: `#b5e7a0`
                                        }
                                    )}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 5 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>SAT</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(5)
                }}>
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={satValue}
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
                                            pathColor: `#ff7b25`
                                        }
                                    )}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
            <div
                className="w-full rounded-lg">
                <span
                    className={`ml-4 mt-2 text-xl ${currentDay === 6 ? "text-green-600 font-black" : "text-gray-500 font-semibold"} align-items-center`}>SUN</span>
                <div className="m-auto w-2/3 lg:w-1/2 cursor-pointer" onClick={() => {
                    onClick(6)
                }}>
                    {/* Meditation Progress Bar */}
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={sunValue}
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
                                            pathColor: `#a2b9bc`
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