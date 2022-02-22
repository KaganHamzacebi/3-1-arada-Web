let timeData;
let valueData;
export default {
    grid: {
        show: false
    },
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
    axisPointer: {
        link: [
            {
                xAxisIndex: 'all'
            }
        ]
    },
    dataZoom:
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1],
            type: 'slider',
            backgroundColor: "rgba(194,53,49,0.25)"
        },
    brush: {
        brushLink: [0, 1],
        brushStyle: {
            borderWidth: 1,
            color: 'rgba(218,144,99,0.8)',
            borderColor: 'rgb(210,126,52)'
        },
    },

    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {show: false},
            data: [
                "6/12",
                "6/13",
                "6/14",
                "6/15",
                "6/15",
                "6/15",
                "6/18",
                "6/15",
                "6/20",
                "6/21",
                "6/22",
                "6/23",
                "6/24",
                "6/25",
                "6/26",
                "6/27",
                "6/28",
                "6/29",
                "6/30",
                "7/1",
                "7/2",
                "7/3",
                "7/4",
                "7/5",
                "7/6",
                "7/7",
                "7/8",
                "7/9",
                "7/10",
                "7/11",
                "7/12",
                "7/13",
                "7/14",
                "7/15",
                "7/16",
                "7/17",
                "7/18",
                "7/19",
                "7/20",
                "7/21",
                "7/22",
                "7/23",
                "7/24",
                "7/25",
                "7/26",
                "7/27",
                "7/28",
                "7/29",
                "7/30",
                "7/31",
                "8/1",
                "9/1",
                "10/1"
            ],
        }
    ],
    yAxis: [

        {
            splitLine: {show: false},
            name: 'Sleep Time',
            type: 'value',
            max: 24
        }
    ],
    series: [
        {
            name: 'Sleep Time',
            type: 'line',
            showSymbol: false,
            smooth: true,
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
}