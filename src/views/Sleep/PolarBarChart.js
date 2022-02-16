import React from "react";
import * as echarts from "echarts";
import Theme from "./Theme";

class PolarBarChart extends React.Component{
    constructor(props){
        super(props);
        this.theme = new Theme().theme;

        this.componentId = props.componentId;
        const gaugeData = [
            {
                value: 20,
                name: 'Sleep Quality',
                title: {
                    offsetCenter: ['0%', '-30%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%']
                }
            },
            {
                value: 40,
                name: 'Sleep Time',
                title: {
                    offsetCenter: ['0%', '0%']
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '10%']
                }
            }
        ];
        this.option = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: '#464646'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: 40
                        }
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: gaugeData,
                    title: {
                        fontSize: 14
                    },
                    detail: {
                        width: 50,
                        height: 14,
                        fontSize: 14,
                        color: 'auto',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%'
                    }
                }
            ]
        };
    }
    componentDidMount() {
        echarts.registerTheme('purple-passion', this.theme);
        let myChart = echarts.init(document.getElementById(this.componentId), 'purple-passion',{
            width: window.window.outerWidth * 0.45,
            height: window.window.outerHeight * 0.45,
        });
        this.option && myChart.setOption(this.option);
    }
    render(){
        return (<div id={this.componentId} style={{width:"800px", height:"400px"}}></div>)
    }
}
export default PolarBarChart;