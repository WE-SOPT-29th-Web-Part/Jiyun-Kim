import React, { useState, useEffect } from 'react';

const Text2 = ({year, month, date}) => {
    const [dDay, setdDay] = useState('0');
    const [resultDate, setResultDate] = useState('yyyy년 mm월 dd일');

    const handleChange = (e) => {
        setdDay(e.target.value);
        calcDate(e.target.value);
    }
    const calcDate = (value) => {
        console.log(typeof year);
        console.log(typeof month);
        console.log(typeof date);
        const newDate = new Date(year, month - 1, date - Number(value));
        setResultDate(`${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`)
    }

    useEffect(() => {
        calcDate(dDay);
    }, [year, month, date]);

    return (
        <div className="text">
            <div className="text__left">
                D-<input type="text" value={dDay} onChange={handleChange}></input>
                는?
            </div>
            <div>
                {resultDate}
            </div>
        </div>
    );
};

export default Text2;