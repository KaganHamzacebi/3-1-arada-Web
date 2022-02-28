import Header from "../../components/Header";
import React from "react";
import CalendarFunc from "./CalendarFunc";
import resizeObserver from "./ResizeObserver";
import line from "./Oprions/Line";
import SleepLineChartFunc from "./SleepLineChartFunc";
import polarSleepQuality from "./Oprions/PolarSleepQuality";
import "./Sleep.css";
import SleepLineChartFunc2 from "./SleepLineChartFunc2";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";

export default function MyComponent() {
    return (
        <div id="sleepWrapper">
            <Header/>
            <div className="pt-40 md:pt-30">
                <Container>
                    <Row>
                        <Col md="auto" id="chart1">
                            <SleepLineChartFunc options={line} resizeObserver={resizeObserver}/>
                        </Col>
                        <Col md="auto" id="chart2">
                            <SleepLineChartFunc2 options={line} resizeObserver={resizeObserver}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CalendarFunc/>
                        </Col>
                        <Col>
                            <SleepLineChartFunc options={polarSleepQuality} resizeObserver={resizeObserver}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

