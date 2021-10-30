import React from 'react';
import styled from 'styled-components';

const ResultFooter = ({followers, following, publicRepos}) => {
    return (
        <Ul>
            <li>
                <strong>Followers</strong>
                {followers}
            </li>
            <li>
                <strong>Following</strong>
                {following}
                </li>
            <li>
                <strong>Repos</strong>
                {publicRepos}
            </li>
        </Ul>
    );
};

const Ul = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 25px;

  & > li {
      width: 130px;
      height: 59px;
      background-color: rgb(36, 39, 43);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 1.5;
      border-right: 5px solid rgb(44, 48, 53);
      border-left: 5px solid rgb(44, 48, 53);

      & > strong {
          font-weight: bold;
      }

        &:nth-child(1) {
            border-left: none;
            border-bottom-left-radius: 20px;
        }

        &:nth-child(3) {
            border-right: none; 
            border-bottom-right-radius: 20px;
        }
    }
`;

export default ResultFooter;