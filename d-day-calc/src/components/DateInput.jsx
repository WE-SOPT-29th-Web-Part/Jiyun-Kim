import React, { useEffect } from 'react';
//구조분해 할당
const DateInput = ({year, month, date, setYear, setMonth, setDate}) => {
    //input은 변화하는 값
    // const [year, setYear] = useState(new Date().getFullYear());
    // const [month, setMonth] = useState(new Date().getMonth() + 1);
    // const [date, setDate] = useState(new Date().getDate());

    const handleChange = (e, setState) => {
        setState(e.target.value);
    }

    const handleTodayBtn = () => {
        const now = new Date();
        setYear(now.getFullYear());
        setMonth(now.getMonth() + 1);
        setDate(now.getDate());
    }

    //값이 변경된 것을 확인할 수 있다
    //callback 함수와 dependency array를 받는다. 배열의 값이 변경되면 callback함수 실행 
    useEffect((e) => {
        console.log(year, month, date);
    }, [year, month, date])

    return (
        <div className="date">
            <button className="todayBtn" onClick={handleTodayBtn}>오늘</button>
            <div className="dateInput">
                <input 
                onChange={(e) => handleChange(e, setYear)} 
                className="dateInput__input" 
                type="text" value={year}/>년
                <input onChange={(e) => handleChange(e, setMonth)}
                className="dateInput__input" 
                type="text" 
                value={month}/>월
                <input onChange={(e) => handleChange(e, setDate)}
                className="dateInput__input" 
                type="text" 
                value={date}/>일
            </div>
        </div>
    );
};

export default DateInput;