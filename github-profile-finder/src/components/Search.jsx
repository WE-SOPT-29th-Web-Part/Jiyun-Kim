import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Search = ({setUserInfo}) => {
    const [user, setUser] = useState('');

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //서버에 있는 데이터를 받아오는 방법
        //서버 통신이 필요하다. 서버 통신에는 받아오는데 시간이 걸린다 => 비동기다
        //비동기 처리를 하기 위한 방법 => async await
        //axios는 서버 통신을 도와주는 툴
        const {data} = await axios.get(`https://api.github.com/users/${user}`);
        setUserInfo(data);
        setUser('');
        //구조분해할당
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input 
            value={user} 
            type="text" 
            placeholder="Github 프로필을 검색해보세요."
            onChange={handleChange}/>
        </form>
    );
};

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