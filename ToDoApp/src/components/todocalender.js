import React from 'react';


const ToDoCalender = () => {
    const date = new Date();
    const day = date.getDate();

    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"][date.getDay()];

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ][date.getMonth()];

    const enOrdinalRules = new Intl.PluralRules("en", {
        type:"ordinal"
    });

    const enOrdinalRulesMap = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    }

    const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)]

    return (
        <div className="todo_calender">
            <h1>{`${weekDay}, ${day}${enOrdinalSuffix}`}</h1>
            <p className="month">{month}</p>
        </div>
    )
}

export default ToDoCalender;