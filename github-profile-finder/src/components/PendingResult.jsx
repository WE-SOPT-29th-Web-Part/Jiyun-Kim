import React from 'react';
import styled from 'styled-components';

const PendingResult = () => {
    return (
        <Root>
           <div className="yellow"></div>
           <div className="red"></div>
           <div className="blue"></div>
        </Root>
    );
};

const Root = styled.div`
    & > .yellow {
        background-color: #ffff56;
    }
    & > .red {
        background-color: #ff725f;
        position: relative;
        left: -15px;
        top: 3px;
    }
    & > .blue {
        position: relative;
        right: -5px;
        background-color: #2382ff;
    }
    & > div {
        width: 10px;
        height: 10px;
        animation: loading_circle 1s linear 0s infinite normal none;
    
        @keyframes loading_circle {
            0% { transform: rotate(0deg); border-radius: 50%; }
            50% { transform: rotate(90deg); border-radius: 0%; }
            100% { transform: rotate(180deg); border-radius: 50%; }
        }
    }
`;

export default PendingResult;
