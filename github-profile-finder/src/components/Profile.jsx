import React from 'react';
import styled from 'styled-components';

const ResultFooter = ({avatarUrl, name, login, bio}) => {
    return (
        <Profile>
            <img src={avatarUrl} alt="avatar" />
            <h3>{name}</h3>
            <h4>{login}</h4>
            <p>{bio}</p>
        </Profile>
    );
};

const Profile = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 30px;
  }

  & > h3 {
      font-size: 24px;
      margin-top: 24px;
      font-weight: bold;
  }

  & > h4 {
      font-size: 14px;
      margin-top: 5px;
  }

  & > p {
      padding: 20px 45px;
      text-align: center;
  }
`;

export default ResultFooter;
