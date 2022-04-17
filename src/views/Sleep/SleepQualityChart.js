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
import {useEffect, useState} from "react";

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
    const [data, setData] = useState(null);
    const [labels, setLabels] = useState(null);

    useEffect(() => {
        console.log("chart");
        console.log(props.data);
        console.log(props.label);
        setData(props.data);
        setLabels(props.label);
        //setLabels(['17:10', '17:11', '17:12', '17:13', '17:14', '17:15', '17:16', '17:17', '17:18', '17:19', '17:20', '17:21']);
    }, [data])

    const options = {
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        displayFormats: {
                            minute: 'HH:mm'
                        }
                    },
                    display: true,
                    grid: {
                        display: false
                    }
                },
                y: {
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
                fill: true,
                lineTension: 0.4,
                radius: 6,
                borderJoinStyle: "round",
                tension: 40,
            },
        }
    };


    const dataForChart = {
        labels: ['17:10', '17:11', '17:12', '17:13', '17:14', '17:15', '17:16', '17:17', '17:18', '17:19', '17:20', '17:21'],
        datasets: [
            {
                label: 'Quality',
                data: [10, 9, 8, 10, 10, 5, 10, 10, 10, 10, 10, 10],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div>
            <Line data={dataForChart} options={options}/>
        </div>
    );
}