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
import SleepService from "../../service/SleepService";
import moment from "moment";


class Sleep extends React.Component {
    constructor(props) {
        super(props);
        this.service = new SleepService()
        this.state = {
            calendarData : {
                selectedDays : [],
                hoverRange : null,
            },
            sleepTimeData : null,
            sleepValueData : null,
            sleepStartEndData :{

            },
            sleepQualityPolarData : {

            },
            sleepPolarLİneData : {

            },
            sleepQualityByHourData : {

            }

        }
        this.service.getLineChartData().then((res) => {
            this.setState({sleepTimeData : res.data.timeData, sleepValueData : res.data.data});
        })
    }

    render() {
        let firstColor = '#ffffff'
        let secondColor = '#d68be0'
        let thirdColor = '#ff6c94'
        return (<div id="sleepWrapper">
            <Header firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
            <div class="pt-48 md:pt-30 ">
                <Row className="mb-4 mr-0">
                    <Col xs={12} sm={3} md={6} lg={6}>
                        <ScopeableLineChart componentId="sleepingTime" className="mr-0"/>
                    </Col>
                    <Col xs={12} sm={3} md={6} lg={6}>
                        {
                            this.state.sleepTimeData && this.state.sleepValueData &&
                            <ScopeableLineChart componentId="sleepingStart" timeData={this.state.sleepTimeData} valueData={this.state.sleepValueData}/>
                        }

                    </Col>
                </Row>
                <Row className="mb-4 mr-0">
                    <Col xs={12} sm={3} md={8} lg={8}>
                        <PolarLine className="mr-0"/>
                    </Col>
                    <Col xs={12} sm={3} md={4} lg={4}>
                        <Example componentId="calendar"
                                 selectedDays={this.state.calendarData.selectedDays}
                                 hoverRange={this.state.calendarData.hoverRange}
                                 handleWeekClick={this.handleWeekClick.bind(this)}
                                 handleDayLeave={this.handleDayLeave.bind(this)}
                                 handleDayEnter={this.handleDayEnter.bind(this)}
                                 handleDayChange={this.handleDayChange.bind(this)}
                                 getWeekRange={this.getWeekRange.bind(this)}
                                 getWeekDays={this.getWeekDays.bind(this)}



                        />
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
    getWeekDays(weekStart) {
        debugger;
        const days = [weekStart];
        for (let i = 1; i < 7; i += 1) {
            days.push(
                moment(weekStart)
                    .add(i, 'days')
                    .toDate()
            );
        }
        return days;
    }
    getWeekRange(date) {

        return {
            from: moment(date).toDate(),
            to: moment(date)
                .add(6,'days').toDate()
        };
    }
    handleDayChange = (date,getWeekDays) => {
        let days = this.getWeekDays(date);
        debugger;
        this.setState({
            calendarData : {
                ...this.state.calendarData,
                selectedDays: days,
            }
        });
        debugger;
    };

    handleDayEnter = date => {
        let range = this.getWeekRange(date);
        this.setState({
            calendarData : {
                ...this.state.calendarData,
                hoverRange: range,
            }

        });
    };

    handleDayLeave = () => {
        this.setState({
            calendarData : {
                ...this.state.calendarData,
                hoverRange: undefined,
            }

        });
    };

    handleWeekClick = (weekNumber, days, e) => {
        debugger;
        this.setState({
            calendarData : {
                ...this.state.calendarData,
                selectedDays: days,
            }
        });
    };

}

export default Sleep;