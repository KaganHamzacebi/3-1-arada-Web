import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import  './SelectedWeekExample.css';


export default class Example extends React.Component {
    constructor(props){
        super(props);
       this.props = props;
    }


    render() {

        const daysAreSelected = this.props && this.props.selectedDays && this.props.selectedDays.length > 0;
        const hoverRange = this.props.hoverRange;
        const modifiers = {
            hoverRange,
            selectedRange: daysAreSelected && {
                from: this.props.selectedDays[0],
                to: this.props.selectedDays[6],
            },
            hoverRangeStart: this.props.hoverRange && this.props.hoverRange.from,
            hoverRangeEnd: this.props.hoverRange && this.props.hoverRange.to,
            selectedRangeStart: daysAreSelected && this.props.selectedDays[0],
            selectedRangeEnd: daysAreSelected && this.props.selectedDays[6],
        };
        debugger;
        return (
            <div className="SelectedWeekExample">

                <DayPicker
                    selectedDays={this.props.selectedDays}
                    showOutsideDays
                    modifiers={modifiers}
                    onDayClick={(date)  => {this.props.handleDayChange(date)}}
                    onDayMouseEnter={this.props.handleDayEnter}
                    onDayMouseLeave={this.props.handleDayLeave}
                    onWeekClick={this.props.handleWeekClick}
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