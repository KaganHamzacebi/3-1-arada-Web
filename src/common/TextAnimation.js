import React from "react";
import * as echarts from "echarts";

class TextAnimation extends React.Component{
    constructor(props) {
        super(props);
        this.componentId = props.componentId;
        this.text = props.text;
        this.fontSize = props.fontSize
        this.option = {
            graphic: {
                elements: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: this.text,
                            fontSize: this.fontSize,
                            fontWeight: 'bold',
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#DABD9DB2',
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 1500,
                            loop: false,
                            keyframes: [
                                {
                                    percent: 1,
                                    style: {
                                        lineDashOffset: 200,
                                        lineDash: [200, 0]
                                    }
                                },
                                {
                                    // Stop for a while.
                                    percent: 0.8,
                                    style: {
                                        fill: '#C3765A7F'
                                    }
                                },
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: '#92A74B'
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        };

    }
    componentDidMount(){
        let myChart  = echarts.init(document.getElementById(this.componentId));
        this.option && myChart.setOption(this.option);
    }
    render(){
        return <div id={this.componentId} style={{width:"130px", height:"80px"}}></div>
    }
}
export default TextAnimation;