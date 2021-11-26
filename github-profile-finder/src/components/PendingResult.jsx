import React from "react";
import styled from "styled-components";

const PendingResult = () => {
  return (
    <Root>
      <StyledYellow className='yellow'></StyledYellow>
      <StyledRed className='red'></StyledRed>
      <StyledBlue className='blue'></StyledBlue>
    </Root>
  );
};

const Root = styled.div`
  & > div {
    width: 10px;
    height: 10px;
    animation: loading_circle 1s linear 0s infinite normal none;

    @keyframes loading_circle {
      0% {
        transform: rotate(0deg);
        border-radius: 50%;
      }
      50% {
        transform: rotate(90deg);
        border-radius: 0%;
      }
      100% {
        transform: rotate(180deg);
        border-radius: 50%;
      }
    }
  }
`;

const StyledYellow = styled.div`
  background-color: #ffff56;
`;

const StyledRed = styled.div`
  background-color: #ff725f;
  position: relative;
  left: -15px;
  top: 3px;
`;

const StyledBlue = styled.div`
  position: relative;
  right: -5px;
  background-color: #2382ff;
`;

export default PendingResult;
