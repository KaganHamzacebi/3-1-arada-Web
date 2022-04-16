import React, {useContext, useEffect, useState} from "react";
import Header from "../../components/Header";
import 'react-bootstrap';
import {Col, Container, Row} from "react-bootstrap";
import "../Home/Home.css";
import SleepQualityChart from "./SleepQualityChart";
import SleepService from "../../service/SleepService";
import SleepProgressBars from "./SleepProgressBars";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EmojiHappyIcon,
    EmojiSadIcon,
    MoonIcon,
    SunIcon
} from "@heroicons/react/solid";
import AnimatedProgressProvider from "../../components/AnimatedProgressProvider/AnimatedProgressProvider";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {UserContext} from "../../App";


export default function MyComponent() {
    const sleepService = new SleepService();
    const [chartData, setChartData] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState(null);
    const [isCurrentWeek, setIsCurrentWeek] = useState(true);
    const [week, setWeek] = useState(1);
    const [sleepData, setSleepData] = useState(null);
    const {user, userToken} = useContext(UserContext);


    useEffect(() => {
        sleepService.getSleepData(week-1, userToken).then((res) => {
                if (res.status === 200) {
                    if (res == null) {
                    } else {
                        setSleepData(res);
                    }
                }
            }
        );
    }, [])

    const dateBack = () => {
        setWeek((week) => week + 1);
        console.log("week" + week);
        setIsCurrentWeek(false);

        sleepService.getSleepData(week, userToken).then((res) => {
                if (res.status === 200) {
                    if (res.data == null) {
                        console.log(null);
                    } else {
                        console.log(data);
                    }
                }
            }
        );

    }

    const dateForward = () => {
        if (isCurrentWeek) {
            //TODO doNothing
        } else {
            setWeek(week - 1);
        }
    }

    return (
        <div id="homeWrapper">
            <Header currentComponent={1}/>
            <div className="pt-40 pb-40  px-8 md:px-24 ">
                <Container className="">
                    <Row className="bg-theme-gray rounded-md">
                        <Col md={1}>
                            <ChevronLeftIcon
                                className="align-middle mt-5 w-10 h-8 text-theme-darkbrown cursor-pointer z-50"
                                onClick={() => {
                                    dateBack()
                                }}
                            />
                        </Col>
                        <Col>
                            <SleepProgressBars monValue={20} tueValue={77} wedValue={20} thuValue={77} friValue={20}
                                               satValue={77} sunValue={77}/>
                        </Col>
                        <Col md={1}>
                            <ChevronRightIcon
                                className="align-middle mt-5 w-10 h-8 text-theme-darkbrown cursor-pointer z-50 "
                                onClick={() => {
                                    dateForward()
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-evenly mt-8 gap-x-4" md={12}>
                        <Col className="bg-theme-gray rounded-xl">
                            <SleepQualityChart service={sleepService} chartData={chartData}
                                               setChartData={(data) => setChartData(data)}></SleepQualityChart>
                        </Col>
                        <Col md={4} className="bg-theme-gray rounded-xl">
                            <Row md={12} className="h-full">
                                <Col className="flex" md={7}>
                                    <div
                                        className="m-auto rounded-lg">
                                        <span
                                            className="ml-4 mt-2 text-xl text-gray-500 font-semibold align-items-center">Today's Sleep Quality</span>
                                        <div className="m-auto p-4">
                                            {/* Sleep Progress Bar */}
                                            <AnimatedProgressProvider
                                                valueStart={0}
                                                valueEnd={88}
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
                                </Col>
                                <Col md={5}>
                                    <div className="h-full grid grid-rows-4">
                                        <div className="flex">
                                            <MoonIcon data-tip="Sleep Time"
                                                      className="w-14 h-14 m-auto text-blue-800 transition transform duration-700 hover:scale-125"/>
                                            <span
                                                className="m-auto p-1 bg-theme-green font-bold rounded-md text-white text-xl"> 01:20</span>
                                        </div>
                                        <div className="flex">
                                            <SunIcon data-tip="Wake Time"
                                                     className="w-14 h-14 m-auto text-yellow-400 transition transform duration-700 hover:scale-125"/>
                                            <span
                                                className="m-auto p-1 bg-theme-green font-bold rounded-md text-white text-xl"> 01:20</span>
                                        </div>
                                        <div className="flex">
                                            <EmojiHappyIcon data-tip="Best Sleep Quality Time"
                                                            className="w-14 h-14 m-auto text-teal-500 transition transform duration-700 hover:scale-125"/>
                                            <span
                                                className="m-auto p-1 bg-theme-green font-bold rounded-md text-white text-xl"> 01:20</span>
                                        </div>
                                        <div className="flex">
                                            <EmojiSadIcon data-tip="Worst Sleep Quality Time"
                                                          className="w-14 h-14 m-auto text-pink-700 transition transform duration-700 hover:scale-125"/>
                                            <span
                                                className="m-auto p-1 bg-theme-green font-bold rounded-md text-white text-xl"> 01:20</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
        ;
}




