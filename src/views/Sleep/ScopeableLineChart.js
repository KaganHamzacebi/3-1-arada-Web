import React from "react";
import * as echarts from 'echarts';
class ScopeableLineChart extends React.Component{
    constructor(props) {
        super(props);
        this.componentId = props.componentId;
        let timeData = [
            '2009/6/12',
            '2009/6/13',
            '2009/6/14',
            '2009/6/15',
            '2009/6/15',
            '2009/6/15',
            '2009/6/18',
            '2009/6/15',
            '2009/6/20',
            '2009/6/21',
            '2009/6/22',
            '2009/6/23',
            '2009/6/24',
            '2009/6/25',
            '2009/6/26',
            '2009/6/27',
            '2009/6/28',
            '2009/6/29',
            '2009/6/30',
            '2009/7/1',
            '2009/7/2',
            '2009/7/3',
            '2009/7/4',
            '2009/7/5',
            '2009/7/6',
            '2009/7/7',
            '2009/7/8',
            '2009/7/9',
            '2009/7/10',
            '2009/7/11',
            '2009/7/12',
            '2009/7/13',
            '2009/7/14',
            '2009/7/15',
            '2009/7/16',
            '2009/7/17',
            '2009/7/18',
            '2009/7/19',
            '2009/7/20',
            '2009/7/21',
            '2009/7/22',
            '2009/7/23',
            '2009/7/24',
            '2009/7/25',
            '2009/7/26',
            '2009/7/27',
            '2009/7/28',
            '2009/7/29',
            '2009/7/30',
            '2009/7/31',
            '2009/8/1',
            '2009/9/1',
            '2009/10/1'
        ];
        timeData = timeData.map(function (str) {
            return str.replace('2009/', '');
        });
        this.option = {
            title: {
                text: 'Sleep Time',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: true
                }
            },
            legend: {
                data: ['Sleep Time'],
                left: 10
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            axisPointer: {
                link: [
                    {
                        xAxisIndex: 'all'
                    }
                ]
            },
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 30,
                    end: 70,
                    xAxisIndex: [0, 1]
                }
            ],

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: true },
                    data: timeData
                }
            ],
            yAxis: [
                {
                    name: 'Sleep Time',
                    type: 'value',
                    max: 24
                }
            ],
            series: [
                {
                    name: 'Sleep Time',
                    type: 'line',
                    symbolSize: 8,
                    // prettier-ignore
                    data: [
                        3.5,
                        6.7,
                        3.6,
                        1.3,
                        7.8,
                        9.7,
                        11.3,
                        5.7,
                        5.5,
                        3.5,
                        6.7,
                        3.6,
                        1.3,
                        7.8,
                        9.7,
                        11.3,
                        5.7,
                        5.5,
                        9.9,
                        3.5,
                        6.7,
                        3.6,
                        1.3,
                        7.8,
                        9.7,
                        11.3,
                        5.7,
                        5.5,
                        9.9,
                        3.5,
                        6.7,
                        3.6,
                        1.3,
                        7.8,
                        9.7,
                        11.3,
                        5.7,
                        5.5,
                        9.9,
                        3.5,
                        6.7,
                        3.6,
                        1.3,
                        7.8,
                        9.7,
                        11.3,
                        5.7,
                        5.5,
                        9.9,
                        11.3,
                        19.3,
                        24.0,
                        24.0
                    ]
                }
            ]
        };
    }
    componentDidMount() {
        let myChart = echarts.init(document.getElementById(this.componentId));
        this.option && myChart.setOption(this.option);
    }
    render(){
        return (<div id={this.componentId}  style={{width:"800px", height:"400px"}}></div>)
    }


}
export default ScopeableLineChart;