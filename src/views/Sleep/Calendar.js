import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import "./Calendar.css";
import {useState} from "react";

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [endDate, setEndDate] = useState(null);
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
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="m-2 justify-center">
            <button className="example-custom-input" onClick={event => handleClick(event)}>
                <DatePicker
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