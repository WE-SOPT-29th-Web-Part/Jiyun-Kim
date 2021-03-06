import React from "react";
import styled from "styled-components";

const ResultHeader = ({ htmlUrl, onClose }) => {
  const handleCloseCard = () => {
    onClose();
  };

  return (
    <StyledHeader>
      <a href={htmlUrl} target='_blank' rel='noreferrer'>
        <img
          src='https://github.githubassets.com/images/mona-loading-default.gif'
          alt=''
        />
      </a>
      <button onClick={handleCloseCard}>x</button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;

  & > button {
    width: 30px;
    height: 30px;
    background-color: rgb(251, 251, 253);
    outline: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  & > button:hover {
    background-color: rgb(236, 235, 235);
  }

  & > a {
    border-radius: 50%;
    text-decoration: none;
    color: rgb(27, 29, 33);
    margin-right: 5px;
    & > img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default ResultHeader;
