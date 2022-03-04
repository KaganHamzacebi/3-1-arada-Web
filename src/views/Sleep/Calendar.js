import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./Calendar.css";
import {useState} from "react";

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className="m-2 justify-center">
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange/>
        </div>
    );
}