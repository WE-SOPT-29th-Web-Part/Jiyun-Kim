import React from 'react';
import styled from 'styled-components';

const ResultFooter = ({followers, following, publicRepos}) => {
    return (
        <Ul>
            <li>
                <span>{followers}</span>
                followers
            </li>
            <li>
                <span>{following}</span>
                following
            </li>
            <li>
                <span>{publicRepos}</span>
                Repos
            </li>
        </Ul>
    );
};

const Ul = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 10px;
  font-size: 0.725rem;

    & > li {
      height: 59px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1.5;
      margin-right: 10px;

      & > span {
        font-weight: bold;
        margin-right: 2px;
      }
    }
`;

export default ResultFooter;
