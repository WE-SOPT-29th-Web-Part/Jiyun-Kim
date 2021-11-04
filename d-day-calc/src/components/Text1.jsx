import React, { useState, useEffect } from 'react';

const Text1 = ({year, month, date}) => {
    //변하는 값을 상태로 받아와야한다.
    const [day, setDay] = useState('0');
    const [resultDate, setResultDate] = useState('yyyy년 mm월 dd일');

    const handleChange = (e) => {
        setDay(e.target.value);
        calcDate(e.target.value);
    }
    
    const calcDate = (value) => {
        const tempDate = new Date(Number(year), Number(month) - 1, Number(date) + Number(value) - 1);
        setResultDate(`${tempDate.getFullYear()}년 ${tempDate.getMonth() + 1}월 ${tempDate.getDate()}일`);
    }

    useEffect(() => {
        calcDate(day);
    }, [year, month, date]);

    return (
        <div className="text">
            <div className="text__left">
                <input onChange={handleChange} type="text" value={day}></input>
                일째 되는 날은?
            </div>
            <div>
                {resultDate}
            </div>
        </div>
    );
};

export default Text1;