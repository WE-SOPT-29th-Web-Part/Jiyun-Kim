import React from 'react';
import Text1 from './Text1';
import Text2 from './Text2';

const Result = ({year, month, date}) => {
    return (
        <div className="result">
            <Text1 
                year={year}
                month={month}
                date={date}
            ></Text1>
            <Text2
                year={year}
                month={month}
                date={date}
            ></Text2>
        </div>
    );
};

export default Result;