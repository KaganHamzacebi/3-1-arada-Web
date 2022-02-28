import React, {useState} from "react";
import DayPicker from "react-day-picker";
import moment from "moment";
import "./SelectedWeekExample.css";
import 'react-day-picker/lib/style.css';

export default function CalendarFunc() {

    const [selectedDays, setSelectedDays] = useState([]);
    const [hoverRange, setHoverRange] = useState(undefined);
    const [daysAreSelected] = useState(selectedDays && selectedDays.length > 0);
    const [modifiers] = useState({
        today: new Date(),
        hoverRange,
        selectedRange: daysAreSelected && {
            from: selectedDays[0],
            to: selectedDays[6],
        },
        hoverRangeStart: hoverRange && hoverRange.from,
        hoverRangeEnd: hoverRange && hoverRange.to,
        selectedRangeStart: daysAreSelected && selectedDays[0],
        selectedRangeEnd: daysAreSelected && selectedDays[6],
    });

    const getWeekDays = (weekStart) => {
        const days = [weekStart];
        for (let i = 1; i < 7; i += 1) {
            days.push(
                moment(weekStart)
                    .add(i, 'days')
                    .toDate()
            );
        }
        console.log(days);
        return days;
    }

    const getWeekRange = (date) => {
        return {
            from: moment(date)
                .toDate(),
            to: moment(date)
                .add(6)
                .toDate(),
        };
    }

    const handleDayChange = (date) => {
        setSelectedDays(getWeekDays(getWeekRange(date).from));
    };

    const handleDayEnter = (date) => {
        setHoverRange(getWeekRange(date));
    };

    const handleDayLeave = () => {
        setHoverRange(undefined);
    };

    const handleWeekClick = (weekNumber, days, e) => {
        setSelectedDays(days);
    };

    return (<div className="SelectedWeekExample">
        <DayPicker
            selectedDays={selectedDays}
            showOutsideDays
            modifiers={modifiers}
            onDayClick={(date) => {
                handleDayChange(date)
            }}
            onDayMouseEnter={handleDayEnter}
            onDayMouseLeave={handleDayLeave}
            onWeekClick={handleWeekClick}
            firstDayOfWeek={0}
        />
    </div>);
}