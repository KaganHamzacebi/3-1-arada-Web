import React from "react";
import Header from "../../components/Header";
import "./Sleep.css";
import 'react-day-picker/lib/style.css';
import SleepService from "../../service/SleepService";
import moment from "moment";
import PolarLine from "./PolarLine";


class Sleep extends React.Component {
    constructor(props) {
        super(props);
        this.service = new SleepService()
        this.state = {
            calendarData: {
                selectedDays: [],
                hoverRange: null,
            },
            sleepTimeData: null,
            sleepValueData: null,
            sleepStartEndData: {},
            sleepQualityPolarData: {},
            sleepPolarLİneData: {},
            sleepQualityByHourData: {}

        }
        this.service.getLineChartData().then((res) => {
            this.setState({sleepTimeData: res.data.timeData, sleepValueData: res.data.data});
        })
    }

    render() {
        let firstColor = '#ffffff'
        let secondColor = '#d68be0'
        let thirdColor = '#ff6c94'
        return (
            <div id="sleepWrapper">
                <Header firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}/>
                <div class="pt-40 md:pt-30">
                    <div className="grid grid-cols-6 md:grid-cols-6 md:grid-rows-3 md:grid-flow-col gap-x-8 gap-y-4">
                        <div className="row-span-3 col-span-3 px-8 py-12 ml-3.5 bg-theme-gray rounded-xl opacity-95 shadow-xl ">
                           {/* <Sleep componentId="sleepingStart" timeData={this.state.sleepTimeData}
                                                valueData={this.state.sleepValueData}/>*/}
                        </div>
                        <div
                            className="row-span-1 col-span-3 bg-theme-gray px-8 py-4 mr-3.5 ml-3.5 pr-2 rounded-xl opacity-95 shadow-xl">
                            {/*<ScopeableLineChart componentId="sleepingStart2" timeData={this.state.sleepTimeData}
                                                valueData={this.state.sleepValueData}/>*/}
                        </div>
                        <div className="row-span-2 col-span-3 py-12 ml-3.5">
                            <div
                                className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col gap-x-8 gap-y-4">
                                <div id="calendarDiv" className="row-span-2 col-span-1 pr-2 py-12  bg-theme-gray rounded-xl opacity-95 shadow-xl">
                                    {/*<Example componentId="calendar"
                                             selectedDays={this.state.calendarData.selectedDays}
                                             hoverRange={this.state.calendarData.hoverRange}
                                             handleWeekClick={this.handleWeekClick.bind(this)}
                                             handleDayLeave={this.handleDayLeave.bind(this)}
                                             handleDayEnter={this.handleDayEnter.bind(this)}
                                             handleDayChange={this.handleDayChange.bind(this)}
                                             getWeekRange={this.getWeekRange.bind(this)}
                                             getWeekDays={this.getWeekDays.bind(this)}
                                    />*/}
                                </div>
                                <div className="row-span-2 col-span-2 px-8 py-12 mr-3.5 ml-3.5 bg-theme-gray rounded-xl opacity-95 shadow-xl">
                                    <PolarLine className="mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
                .add(6, 'days').toDate()
        };
    }

    handleDayChange = (date, getWeekDays) => {
        let days = this.getWeekDays(date);
        debugger;
        this.setState({
            calendarData: {
                ...this.state.calendarData,
                selectedDays: days,
            }
        });
        debugger;
    };

    handleDayEnter = date => {
        let range = this.getWeekRange(date);
        this.setState({
            calendarData: {
                ...this.state.calendarData,
                hoverRange: range,
            }

        });
    };

    handleDayLeave = () => {
        this.setState({
            calendarData: {
                ...this.state.calendarData,
                hoverRange: undefined,
            }

        });
    };

    handleWeekClick = (weekNumber, days, e) => {
        debugger;
        this.setState({
            calendarData: {
                ...this.state.calendarData,
                selectedDays: days,
            }
        });
    };

}

export default Sleep;