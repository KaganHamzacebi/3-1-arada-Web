import * as echarts from 'echarts';
import {Component} from "react";
import Theme from "./Theme";

class LineChart extends Component{
    constructor(props){
        debugger;
        super(props);
        this.theme = new Theme().theme;

        this.state = {
            chartOption : props.chartOptions
        };
        this.componentId = props.componentId;
        this.options = {
            seriesLine : {
                smoothMonotone : 'y',
                coordinateSystem:"polar",
        },
            grid :{ show: false},
            title: {
                text: 'Sleep Quality During Day'
            },
            tooltip: {},
            xAxis: {

                data: ["01:00",
                    "02:00",
                    "03:00",
                    "04:00",
                    "05:00",
                    "06:00",
                    "07:00",
                    "08:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00",
                    "19:00",
                    "20:00",
                    "21:00",
                    "22:00",
                    "23:00",
                    "24:00",
                ]
            },
            yAxis: {
                splitLine:{show : false},
            },
            series: [
                {
                    name: 'sales',
                    type: 'line',
                    data: [15,
                        23,
                        16,
                        86,
                        11,
                        123,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        332,
                        124,
                        555,
                        777,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,],
                    smooth:true,
                    symbol : "none",

                }
            ]
        }
    }
    componentDidMount() {
        echarts.registerTheme('purple-passion', this.theme);
        let myChart = echarts.init(document.getElementById(this.componentId), 'purple-passion', {
            width: window.window.outerWidth * 0.45,
            height: window.window.outerHeight * 0.45,
        });        myChart.setOption(this.options);
    }

    render(){
        return(

            <div id={this.componentId}>
            </div>

        )
    }
}
export default LineChart;