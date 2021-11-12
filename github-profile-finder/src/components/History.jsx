import React, { useEffect } from 'react';
import styled from 'styled-components';
import HistoryItem from './HistoryItem';
import { setLocalStorage } from '../libs/localStorage.js'


const History = ({history, setHistory, setUserInfo}) => {
    

    
    useEffect(() => {
        setLocalStorage({key: 'history', value: history})
    }, [history]);

    return (
        <RootStyled>
            {
                history.map(item => {
                    return <HistoryItem 
                    key={item}
                    item={item}
                    history={history}
                    setHistory={setHistory}
                    setUserInfo={setUserInfo} />;
                })
            }
        </RootStyled>
    );
};

const RootStyled = styled.ul`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;

    /* @keyframes dropDown {
        0% {
            transform: translateY(-10px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    } */
`;

export default History;
