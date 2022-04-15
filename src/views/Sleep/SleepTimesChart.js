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
import SleepService from "../../service/SleepService";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function SleepTimesChart(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);

    let chartData = props.chartData;
    let setChartData = props.setChartData;
    useEffect(() => {
        if (setChartData){
            props.service.getLineChartData(userToken).then((response) => {
                setChartData(response.data);
            })
        }

    },[])

    const options = {
        scales: {
            x: {
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
                text: 'Chart.js Line Chart',
            },
            backgroundColor: "red",
            borderColor: "lightblue",
            fill: false,
            lineTension: 0.4,
            radius: 6,
            borderJoinStyle: "round",
            tension : 40,
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: chartData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],

    };
    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    );
}