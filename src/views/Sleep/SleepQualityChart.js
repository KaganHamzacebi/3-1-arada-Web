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
import {useContext, useEffect, useState} from "react";
import {SleepChartContext} from "./Sleep";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function SleepQualityChart() {
    const {chartDayData, chartDayLabel} = useContext(SleepChartContext);

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
        labels: chartDayLabel,
        datasets: [
            {
                label: 'Quality',
                data: chartDayData,
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