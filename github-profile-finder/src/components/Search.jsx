import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import History from './History';
import { callUserData } from '../libs/githubApi.js'
import { getLocalStorage } from '../libs/localStorage.js'

const Search = ({setUserInfo}) => {
    const [user, setUser] = useState('');
    const [history, setHistory] = useState(getLocalStorage('history'));

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        //괄호로 묶으면 return문 생략 가능
        //현재의 status와 data 값을 풀어헤치고, status 값만 pending으로 바꿔줌.
        setUserInfo((currentUserInfo) => ({...currentUserInfo, status: 'pending'}));
        callUserData(user)
        .then((response) => {
            onSetUserInfo(response);
            onSetHistory();
        });

        setUser('');
    };

    const onSetUserInfo = (data) => {
        const status = data ? 'resolved' : 'rejected';
        setUserInfo((currentUserInfo) => ({
            ...currentUserInfo,
            data,   //key value가 같을 때 다음과 같이 : 안 해줘도 됨
            status: status,
        }));
    }
    
    const onSetHistory = () => {
        if (history.length < 3) setHistory([...history, user]);
        else setHistory([...history.splice(1, history.length - 1), user])
    }

    return (
        <SearchBarStyled>
            <form onSubmit={handleSubmit}>
                <Input 
                value={user} 
                type="text" 
                placeholder="Github 프로필을 검색해보세요."
                onChange={handleChange}/>
            </form>
            <History 
                history={history}
                setHistory={setHistory}
                setUserInfo={setUserInfo}
            />
        </SearchBarStyled>
    );
};

const SearchBarStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 320px;
    height: 57px;
    padding: 16px;
    color: rgb(229, 230, 231);
    background-color: rgb(36, 39, 43);
    outline: none;
    border: 8px solid rgba(105, 105, 105, 0.5);
    border-radius: 20px;
`;

export default Search;
