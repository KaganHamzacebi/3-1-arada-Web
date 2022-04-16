import React, {useState} from "react";
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


export default function MyComponent() {
    const sleepService = new SleepService();
    const [chartData, setChartData] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState(null);
    const [isCurrentWeek, setIsCurrentWeek] = useState(true);
    const [week, setWeek] = useState(0);
    const [sleepData, setSleepData] = useState(null);

    const dateBack = () => {
        setWeek(week+1);
        setIsCurrentWeek(false);

        sleepService.getSleepData(week);

    }

    const dateForward = () => {
        if(isCurrentWeek){
            //TODO doNothing
        }else{
            setWeek(week + 1);
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
                                onClick={() => { dateBack()
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
                                onClick={() => { dateForward()
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-evenly mt-8" md={12}>
                        <Col className="bg-theme-gray rounded-xl">
                            <SleepQualityChart service={sleepService} chartData={chartData}
                                               setChartData={(data) => setChartData(data)}></SleepQualityChart>
                        </Col>
                        <Col md={1}>

                        </Col>
                        <Col md={4} className="bg-theme-gray rounded-xl">
                            <Row md={12}>
                                <Col className="pt-20" md={8}>
                                    <div
                                        className="w-full rounded-lg">
                                        <span
                                            className="ml-4 mt-2 text-xl text-gray-500 font-semibold align-items-center">Today's Sleep Quality</span>
                                        <div className="m-auto w-2/3 lg:w-1/2">
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
                                <Col md={4}>
                                    <Col>
                                        <Row md={12} className="">
                                            <Col md={4}>
                                                <MoonIcon data-tip="Sleep Time"
                                                    className="w-14 h-14 text-blue-800 transition transform duration-700 hover:scale-125"/>
                                            </Col>
                                            <Col className="mt-3">
                                                 <span
                                                     className="mt-8 p-1 ml-3 bg-theme-green font-bold rounded-md text-white text-xl">
                                                00:35
                                            </span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <SunIcon data-tip="Wake Time"
                                                    className="w-14 h-14 text-yellow-400 transition transform duration-700 hover:scale-125"/>
                                            </Col>
                                            <Col className="mt-3">
                                                 <span
                                                     className="mt-8 p-1 ml-3 bg-theme-green font-bold rounded-md text-white text-xl"> 07:12</span>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={4}>
                                                <EmojiHappyIcon data-tip="Best Sleep Quality Time"
                                                    className="mr-0 w-14 h-14 text-pink-700 transition transform duration-700 hover:scale-125"/>
                                            </Col>
                                            <Col className="mt-3">
                                                  <span
                                                      className="mt-8 p-1 ml-3 bg-theme-green font-bold rounded-md text-white text-xl"> 03:48</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <EmojiSadIcon data-tip="Worst Sleep Quality Time"
                                                    className="mr-0 w-14 h-14 text-teal-500 transition transform duration-700 hover:scale-125"/>
                                            </Col>
                                            <Col className="mt-3" >
                                                   <span
                                                       className="mt-8 p-1 ml-3 bg-theme-green font-bold rounded-md text-white text-xl"> 01:20</span>
                                            </Col>
                                        </Row>
                                    </Col>
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




