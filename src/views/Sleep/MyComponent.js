import React, {useContext, useEffect, useState} from "react";
import Header from "../../components/Header";
import 'react-bootstrap';
import {Col, Container, Row} from "react-bootstrap";
import "../Home/Home.css";
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
import moment from "moment/moment";
import SleepQualityChart from "./SleepQualityChart";


export default function MyComponent() {
    const sleepService = new SleepService();
    const {user, userToken} = useContext(UserContext);
    const [chartData, setChartData] = useState([]);
    const [chartLabel, setChartLabel] = useState([]);

    const [monValue, setMonValue] = useState(0);
    const [tueValue, setTueValue] = useState(0);
    const [wedValue, setWedValue] = useState(0);
    const [thuValue, setThuValue] = useState(0);
    const [friValue, setFriValue] = useState(0);
    const [satValue, setSatValue] = useState(0);
    const [sunValue, setSunValue] = useState(0);

    const [isCurrentWeek, setIsCurrentWeek] = useState(true);
    const [week, setWeek] = useState(1);

    const [currentDay, setCurrentDay] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState(null);
    const [sleepData, setSleepData] = useState(null);


    useEffect(() => {
        console.log(currentDay);
        setCurrentDay(getDate(new Date()));
        sleepService.getSleepData(week - 1, userToken).then((res) => {
                if (res.status === 200) {
                    if (res == null) {
                    } else {
                        var list = res.data.list[3].sleepTimeList.map((element) => {
                            return moment(element).format("HH:mm").toString();
                        });
                        setChartLabel(list);

                        console.log(res.data.list[3].sleepQualityList);
                        console.log(list);

                        setChartData(res.data.list[3].sleepQualityList);
                        setChartLabel(list);

                        console.log("sleep");

                        console.log(chartData);
                        console.log(chartLabel);

                        setMonValue(res.data.list[0] == null ? 0 : res.data.list[0].averageSleepQuality * 10);
                        setTueValue(res.data.list[1] == null ? 0 : res.data.list[1].averageSleepQuality * 10);
                        setWedValue(res.data.list[2] == null ? 0 : res.data.list[2].averageSleepQuality * 10);
                        setThuValue(res.data.list[3] == null ? 0 : res.data.list[3].averageSleepQuality * 10);
                        setFriValue(res.data.list[4] == null ? 0 : res.data.list[5].averageSleepQuality * 10);
                        setSatValue(res.data.list[5] == null ? 0 : res.data.list[6].averageSleepQuality * 10);
                        setSunValue(res.data.list[6] == null ? 0 : res.data.list[7].averageSleepQuality * 10);
                    }
                }
            }
        );
    }, [currentDay])

    const getDate = (date) => {
        setCurrentDay(date.getDay() - 1 == 0 ? 7 : date.getDay() - 1);
    }

    const dateBack = () => {
        setWeek((week) => week + 1);
        setIsCurrentWeek(false);

        sleepService.getSleepData(week, userToken).then((res) => {
                if (res.status === 200) {
                    if (res == null) {
                    } else {
                        setSleepData(res.data.list);
                        setMonValue(res.data.list[0] == null ? 0 : res.data.list[0].averageSleepQuality * 10);
                        setTueValue(res.data.list[1] == null ? 0 : res.data.list[1].averageSleepQuality * 10);
                        setWedValue(res.data.list[2] == null ? 0 : res.data.list[2].averageSleepQuality * 10);
                        setThuValue(res.data.list[3] == null ? 0 : res.data.list[3].averageSleepQuality * 10);
                        setFriValue(res.data.list[4] == null ? 0 : res.data.list[5].averageSleepQuality * 10);
                        setSatValue(res.data.list[5] == null ? 0 : res.data.list[6].averageSleepQuality * 10);
                        setSunValue(res.data.list[6] == null ? 0 : res.data.list[7].averageSleepQuality * 10);
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
            setIsCurrentWeek(week == 0 ? true : false);
            sleepService.getSleepData(week, userToken).then((res) => {
                    if (res.status === 200) {
                        if (res == null) {
                        } else {
                            setSleepData(res.data);
                            setMonValue(res.data.list[0] == null ? 0 : res.data.list[0].averageSleepQuality * 10);
                            setTueValue(res.data.list[1] == null ? 0 : res.data.list[1].averageSleepQuality * 10);
                            setWedValue(res.data.list[2] == null ? 0 : res.data.list[2].averageSleepQuality * 10);
                            setThuValue(res.data.list[3] == null ? 0 : res.data.list[3].averageSleepQuality * 10);
                            setFriValue(res.data.list[4] == null ? 0 : res.data.list[5].averageSleepQuality * 10);
                            setSatValue(res.data.list[5] == null ? 0 : res.data.list[6].averageSleepQuality * 10);
                            setSunValue(res.data.list[6] == null ? 0 : res.data.list[7].averageSleepQuality * 10);
                        }
                    }
                }
            );
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
                            <SleepProgressBars currentDay={currentDay} setCurrentDay={setCurrentDay}
                                               monValue={monValue} tueValue={tueValue} wedValue={wedValue}
                                               thuValue={thuValue} friValue={friValue}
                                               satValue={satValue} sunValue={sunValue}/>
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
                            <SleepQualityChart data={chartData} label={chartLabel}></SleepQualityChart>
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
    );
}




