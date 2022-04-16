import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import faker from "faker";
import {useEffect} from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function SleepQualityChart(props) {
    let chartData = props.chartData;
    let setChartData = props.setChartData;
    useEffect(() => {
        if (setChartData) {
            /*props.service.getLineChartData().then((response) => {
                debugger;
                setChartData(response.data);
            })*/
        }

    }, [])

    const options = {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'minute',
                    stepSize: 30,
                    displayFormats: {hour: 'HH:mm'}
                },
                grid: {
                    display: false
                }
            }],
            yAxes: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                tension: 0.4
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sleep Quality',
            },
            backgroundColor: "red",
            borderColor: "lightblue",
            fill: false,
            lineTension: 0.4,
            radius: 6,
            borderJoinStyle: "round",
            tension: 40,
        },
    };

    const labels = [
        "14:00",
        "14:10",
        "14:20",
        "14:30",
        "14:40",
        "14:50",
        "15:00",
        "15:10",
        "15:20",
        "15:30",
        "15:40",
        "15:50",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Quality',
                data: labels.map(() => faker.datatype.number({min: 1, max: 10})),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],

    };
    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    );
}