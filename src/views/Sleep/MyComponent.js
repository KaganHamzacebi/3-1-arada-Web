import React, {useState} from "react";
import Header from "../../components/Header";
import 'react-bootstrap';
import {Col, Container, Row} from "react-bootstrap";
import "../Home/Home.css";
import SleepTimesChart from "./SleepTimesChart";
import Calendar from "./Calendar";
import SleepService from "../../service/SleepService";
import SleepQulityRadarChart from "./SleepQulityRadarChart";

export default function MyComponent() {
    const sleepService = new SleepService();
    const [chartData, setChartData] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState(null);
    return (
        <div id="homeWrapper">
            <Header/>
            <div className="pt-48 pb-40 md:pt-60 px-8 md:px-24">
                <Container>
                        <Row className="justify-content-md-evenly" md={12}>
                            <Col className="bg-theme-gray pr-1 rounded-xl" md={6}>
                                <SleepTimesChart service={sleepService} chartData={chartData} setChartData={(data) => setChartData(data)}></SleepTimesChart>
                            </Col>
                            <Col md={5}>
                                <Row>
                                    <Col className="bg-theme-gray mb-1">
                                        <SleepTimesChart chartData={chartData}></SleepTimesChart>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="bg-theme-gray mr-1">
                                        <Calendar data={data} setData={setData} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}></Calendar>
                                    </Col>
                                    <Col className="bg-theme-gray ">
                                        <SleepQulityRadarChart data={data}></SleepQulityRadarChart>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                </Container>
            </div>
        </div>
    );
}

