import React from "react";
import LineChart from "./LineChart";
import Header from "../../components/Header";
import "./Sleep.css";
import PolarLine from "./PolarLine";
import ScopeableLineChart from "./ScopeableLineChart";
import PolarBarChart from "./PolarBarChart";
import 'react-day-picker/lib/style.css';
import Example from "./Calendar2";
import {Row, Col} from 'react-flexbox-grid';


class Sleep extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="sleepWrapper">
            <Header/>
            <div class="pt-48 md:pt-30 ">
                <Row className="mb-4 mr-0">
                    <Col xs={12} sm={3} md={6} lg={6}>
                        <ScopeableLineChart componentId="sleepingTime" className="mr-0"/>
                    </Col>
                    <Col xs={12} sm={3} md={6} lg={6}>
                        <ScopeableLineChart componentId="sleepingStart"/>
                    </Col>
                </Row>
                <Row className="mb-4 mr-0">
                    <Col xs={12} sm={3} md={8} lg={8}>
                        <PolarLine className="mr-0"/>
                    </Col>
                    <Col xs={12} sm={3} md={4} lg={4}>
                        <Example componentId="calendar"/>
                    </Col>
                </Row>
                <Row className="mr-0">
                    <Col xs={12} sm={3} md={6} lg={6}>
                        <PolarBarChart componentId="generalPolarBar" className="mr-0"/>
                    </Col>
                    <Col xs={12} sm={3} md={6} lg={6} >
                        <LineChart componentId="sleepQualityByDay" className="mr-0"/>
                    </Col>
                </Row>
            </div>
            {/*<Footer/>*/}
        </div>);
    }
}

export default Sleep;