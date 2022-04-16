import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./Calendar.css";
import {useState} from "react";
import SleepService from "../../service/SleepService";
import {useCookies} from "react-cookie";

export default function Calendar(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    let startDate = props.startDate;
    let setStartDate = props.setStartDate;
    let endDate = props.endDate;
    let setEndDate = props.setEndDate;
    let data = props.data;
    let setData = props.setData;
    const [isOpen, setIsOpen] = useState(false);

    const sleepService = new SleepService();
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
    };
    const handleClick = (e) => {
        //console.log(sleepService.getLineChartData());
        if (setData){
            sleepService.getSleepTimeData(userToken,{startDate,endDate}).then((response) => {
                setData(response.data);
            })
        }

        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="m-2 justify-center">
            <button className="example-custom-input" onClick={event => handleClick(event)}>
                <DatePicker
                    dateFormat="dd.MM.yyyy"
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    shouldCloseOnSelect={false}
                    selectsRange/>
            </button>
        </div>
    );
}