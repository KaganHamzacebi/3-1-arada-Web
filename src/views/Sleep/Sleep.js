import React from "react";
import LineChart from "./LineChart";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Sleep.css";
import PolarLine from "./PolarLine";
import ScopeableLineChart from "./ScopeableLineChart";
import PolarBarChart from "./PolarBarChart";

class Sleep extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="sleepWrapper">
            <Header/>
            <div class="pt-48 md:pt-30 ">
                <div class="grid grid-cols-2 gap-4">
                    <ScopeableLineChart componentId="sleepingTime"/>
                    <ScopeableLineChart componentId="sleepingStart"/>
                    <PolarLine/>
                    <div>CALENDAR WILL APPEAR HERE</div>
                    <PolarBarChart componentId="generalPolarBar"/>
                    <LineChart componentId="sleepQualityByDay"/>
                </div>
            </div>

            <Footer/>

        </div>);
    }
}

export default Sleep;