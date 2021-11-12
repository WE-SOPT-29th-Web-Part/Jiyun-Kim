import React from 'react';
import { callUserData } from '../libs/githubApi'
import styled from 'styled-components';

const HistoryItem = ({item, history, setHistory, setUserInfo}) => {
    const handleHistory = () => {
        setUserInfo((currentUserInfo) => ({...currentUserInfo, status: 'pending'}));
        callUserData(item)
        .then((response) => {
            onSetUserInfo(response);
        });
    }

    const onSetUserInfo = (data) => {
        const status = data ? 'resolved' : 'rejected';
        setUserInfo((currentUserInfo) => ({
            ...currentUserInfo,
            data,   //key value가 같을 때 다음과 같이 : 안 해줘도 됨
            status: status,
        }));
    }

    const handleDelete = () => {
        setHistory(history.filter(historyItem => historyItem !== item))
    }

    return (
        <LiStyled >
            <span onClick={handleHistory}>{item}</span>
            <button onClick={handleDelete}>X</button>
        </LiStyled>
    );
};

const LiStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;
    padding: 8px 16px;
    background-color: rgb(229, 230, 231);
    color: rgb(36, 39, 43);
    border-radius: 30px;
    margin-right: 5px;
    
    & > span {
        cursor: pointer;
    }

    & > button {
        border: 0;
    background-color: rgb(229, 230, 231);
    color: rgb(36, 39, 43);
    cursor: pointer;
    width: 15px;
    height: 15px;
    }
`;

export default HistoryItem;