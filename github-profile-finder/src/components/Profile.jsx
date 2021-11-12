import React from 'react';
import styled from 'styled-components';

const ResultFooter = ({name, login, bio, blog, company}) => {
    return (
        <Profile>
            <StyledInfo>
                <h3>{name}</h3>
                <h4>{login}</h4>
                <div>{company}</div>
                <div>{blog}</div>
                <p>{bio}</p>
            </StyledInfo>
        </Profile>
    );
};

const Profile = styled.article`
  display: flex;
  align-items: center;
  padding-top: 40px;
  
`;

const StyledInfo = styled.div`
    & > h3 {
      font-size: 24px;
      margin-top: 24px;
      font-weight: bold;
    }

    & > h4 {
      font-size: 14px;
      margin-top: 5px;
    }

    & > div {
        font-size: 0.25rem;
      margin-top: 10px;
    }

    & > p {
      padding: 10px 0;
      text-align: center;
    }
`;

export default ResultFooter;
