import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Search from "./components/Search";
import styled from "styled-components";

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: "idle" });
  //아무 데이터도 받아오지 않은 상태 => idle

  const handleClose = () => {
    setUserInfo({});
  };

  const handleStatus = ({ status, data }) => {
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      data, //key value가 같을 때 다음과 같이 : 안 해줘도 됨
      status: status,
    }));
  };

  return (
    <StyledRoot>
      <Header></Header>
      <Search userInfo={userInfo} handleStatus={handleStatus}></Search>
      <Result userInfo={userInfo} onClose={handleClose}></Result>
    </StyledRoot>
  );
}

const StyledRoot = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
