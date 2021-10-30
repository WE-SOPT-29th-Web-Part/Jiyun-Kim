import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ResultFooter from './ResultFooter';

const Result = ({userInfo, setUserInfo}) => {
    const {avatar_url, name, login, bio, html_url, followers, following, public_repos} = userInfo;
    return !userInfo.login ? <></> : (
        
        <Root>
            <button onClick={() => {setUserInfo({})}}>닫기</button>
            <Profile
                avatarUrl={avatar_url}
                name={name}
                login={login}
                bio={bio}
            ></Profile>
            <a href={html_url} target="_blank">Visit Github</a>
            <ResultFooter
                followers={followers}
                following={following}
                publicRepos={public_repos}
            ></ResultFooter>
        </Root>
    );
};

const Root = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  color: white;
  background-color: rgb(44, 48, 53);
  width: 390px;
  border-radius: 20px;
  position: relative;
  animation: slideDown 400ms ease-in 0s 1 normal forwards;

  @keyframes slideDown {
    0% {
        transform: translateY(-20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
  }

  /* styled component의 장점 => 중첩 스타일링이 가능 */

  & > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 50px;
    height: 30px;
    background-color: rgb(36, 39, 43);
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  & > a {
      color: gold;
      border: 1px solid gold;
      border-radius: 5px;
      padding: 8px;
      text-decoration: none;
      &:hover {
          background-color: gold;
          color: rgb(44, 48, 53);
      }
  }
`;



export default Result;