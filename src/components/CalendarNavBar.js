import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { differenceInDays } from 'date-fns'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CalendarNavBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const data = daysCheck;

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    var daysCheck = differenceInDays(endDate, startDate);


    return (<div className='NavBarCalendar'>

        <DateRangePicker color='black' ranges={[selectionRange]} minDate={new Date()} rangeColors={["#black"]} onChange={handleSelect} />

        <button className='close-cal rounded-xl'>Close calendar</button>

        {daysCheck == 0 ? <p className={daysCheck == 0 ? "days-0" : "days-updated"}>days selected = 0</p> : <p className='days-updated'>{daysCheck} days selected</p>}



    </div>)
}

export default CalendarNavBar