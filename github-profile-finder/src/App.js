import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import Search from './components/Search';
import styled from 'styled-components';

function App() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo])

  return (
    <Root>
      <Header></Header>
      <Search
        setUserInfo={setUserInfo}
      ></Search>
      <Result
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      ></Result>
    </Root>
  );
}

const Root = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
