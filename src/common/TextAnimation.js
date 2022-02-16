import React from "react";
import * as echarts from "echarts";

class TextAnimation extends React.Component{
    constructor(props) {
        super(props);
        this.componentId = props.componentId;
        this.text = props.text;
        this.fontSize = props.fontSize
        this.fontWeight = props.fontWeight ? props.fontWeight : "normal";
        this.firstColor = props.firstColor ? props.firstColor : '#DABD9DB2';
        this.secondColor = props.secondColor ? props.secondColor : 'white';
        this.thirdColor = props.thirdColor ? props.thirdColor : '#92A74B';
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
                            fontWeight: this.fontWeight,
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: this.firstColor,
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 1000,
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
                                        fill: this.secondColor,
                                    }
                                },
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: this.thirdColor,
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
        let width = this.text.length * this.fontSize / 1.7;
        let height = this.fontSize + 2;
        let size = {width:width,height:height};
        return <div id={this.componentId} style={size}></div>
    }
}
export default TextAnimation;