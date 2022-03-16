import React from "react";
import {Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip} from "chart.js";
import {Radar} from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function SleepQulityRadarChart(props) {
    let dataset = props.data ? props.data : [{
        label: "Monday",
        data: [2, 9, 3, 5, 2, 3],
        borderWidth: 1
    },
        {
            label: "Tuesday",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderWidth: 1
        }]
    const data = {
        labels: [
            "12",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
        ],
        datasets: dataset

    };

    return <div>
        {data && <Radar data={data}/>}
    </div>;
}
