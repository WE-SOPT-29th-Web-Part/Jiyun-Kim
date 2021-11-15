import React, { useState } from "react";
import styled from "styled-components";
import History from "./History";
import { callUserData } from "../libs/githubApi.js";
import { getLocalStorage } from "../libs/localStorage.js";

const Search = ({ setUserInfo }) => {
  const [user, setUser] = useState("");
  const [history, setHistory] = useState(getLocalStorage("history"));

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //괄호로 묶으면 return문 생략 가능
    //현재의 status와 data 값을 풀어헤치고, status 값만 pending으로 바꿔줌.
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: "pending",
    }));
    callUserData(user).then((response) => {
      onSetUserInfo(response);
      onSetHistory();
    });

    setUser("");
  };

  const onSetUserInfo = (data) => {
    const status = data ? "resolved" : "rejected";
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      data, //key value가 같을 때 다음과 같이 : 안 해줘도 됨
      status: status,
    }));
  };

  const onSetHistory = () => {
    if (onCheckOverlap()) return;
    if (history.length < 3) setHistory([...history, user]);
    else setHistory([...history.splice(1, history.length - 1), user]);
  };

  const onCheckOverlap = () => {
    const result = history.filter((item) => item === user);
    return result.length;
  };

  return (
    <SearchBarStyled>
      <form onSubmit={handleSubmit}>
        <Input
          value={user}
          type='text'
          placeholder='Github 프로필을 검색해보세요.'
          onChange={handleChange}
        />
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
`;

const Input = styled.input`
  width: 220px;
  height: 40px;
  padding: 16px;
  margin-right: 15px;
  outline: none;
  color: rgb(251, 251, 253);
  background-color: rgb(27, 29, 33);
  border: 0;
  border-bottom: 2px solid rgb(251, 251, 253);
`;

export default Search;
