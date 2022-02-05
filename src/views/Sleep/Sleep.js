import React from "react";
import LineChart from "./LineChart";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Sleep.css";
import PolarLine from "./PolarLine";

class Sleep extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div id="sleepWrapper">
            <Header/>
            <LineChart/>
            <PolarLine/>
            <Footer/>
        </div>);
    }
}
export default Sleep;