import * as echarts from 'echarts';
import {Component} from "react";

class LineChart extends Component{
    constructor(props){
        debugger;
        super(props);
        this.state = {
            chartOption : props.chartOptions
        };
        this.options = {
            seriesLine : {
                smoothMonotone : 'y',
                coordinateSystem:"polar",
        },
            grid :{ show: false},
            title: {
                text: 'ECharts Getting Started Example'
            },
            tooltip: {},
            xAxis: {

                data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
            },
            yAxis: {
                splitLine:{show : false},
            },
            series: [
                {
                    name: 'sales',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20],
                    smooth:true,
                    symbol : "none",

                }
            ]
        }
    }
    componentDidMount() {
        let myChart  = echarts.init(document.getElementById("denemekardes"));
        myChart.setOption(this.options);
    }

    render(){
        return(

            <div id="denemekardes" style={{width:"600px", height:"400px"}}>
            </div>

        )
    }
}
export default LineChart;