import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ResultFooter from './ResultFooter';
import ResultHeader from './ResultHeader';

const Card = ({userInfo, setUserInfo}) => {
    const {avatar_url, name, login, bio, blog, company, html_url, followers, following, public_repos} = userInfo.data;
    return (
        
        <Root>
            <ResultHeader htmlUrl={html_url} setUserInfo={setUserInfo} />
            <img src={avatar_url} alt="avatar" />
            <StyledProfile>
                <Profile
                    avatarUrl={avatar_url}
                    name={name}
                    login={login}
                    bio={bio}
                    blog={blog}
                    company={company}
                ></Profile>
                <ResultFooter
                    followers={followers}
                    following={following}
                    publicRepos={public_repos}
                ></ResultFooter>
            </StyledProfile>
        </Root>
    );
};

const Root = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  color: rgb(45, 47, 49);
  background-color: rgb(251, 251, 253);
  width: 35%;
  padding: 20px;
  border-radius: 30px;
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

    & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 30px;
  }
`;

const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Card;
