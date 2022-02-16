import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import  './SelectedWeekExample.css';

function getWeekDays(weekStart) {
    const days = [weekStart];
    for (let i = 1; i < 7; i += 1) {
        days.push(
            moment(weekStart)
                .add(i, 'days')
                .toDate()
        );
    }
    return days;
}

function getWeekRange(date) {
    return {
        from: moment(date).toDate(),
        to: moment(date)
            .add(6,'days').toDate()
    };
}

export default class Example extends React.Component {
    state = {
        hoverRange: undefined,
        selectedDays: [],
    };

    handleDayChange = date => {
        this.setState({
            selectedDays: getWeekDays(date),
        });
    };

    handleDayEnter = date => {
        this.setState({
            hoverRange: getWeekRange(date),
        });
    };

    handleDayLeave = () => {
        this.setState({
            hoverRange: undefined,
        });
    };

    handleWeekClick = (weekNumber, days, e) => {
        this.setState({
            selectedDays: days,
        });
    };

    render() {
        const { hoverRange, selectedDays } = this.state;

        const daysAreSelected = selectedDays.length > 0;

        const modifiers = {
            hoverRange,
            selectedRange: daysAreSelected && {
                from: selectedDays[0],
                to: selectedDays[6],
            },
            hoverRangeStart: hoverRange && hoverRange.from,
            hoverRangeEnd: hoverRange && hoverRange.to,
            selectedRangeStart: daysAreSelected && selectedDays[0],
            selectedRangeEnd: daysAreSelected && selectedDays[6],
        };

        return (
            <div className="SelectedWeekExample">
                <DayPicker
                    selectedDays={selectedDays}
                    showOutsideDays

                    modifiers={modifiers}
                    onDayClick={this.handleDayChange}
                    onDayMouseEnter={this.handleDayEnter}
                    onDayMouseLeave={this.handleDayLeave}
                    onWeekClick={this.handleWeekClick}
                    firstDayOfWeek={1}

                />
                <Helmet>
                    <style>{`
          
          `}</style>
                </Helmet>
            </div>
        );
    }
}