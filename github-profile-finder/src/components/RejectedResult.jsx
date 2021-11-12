import React from 'react';
import styled from 'styled-components';

const RejectedResult = () => {
    return (
        <Root>
            사용자가 없습니다.
        </Root>
    );
};

const Root = styled.div`
    color: white;
    font-size: 2rem;
    margin-top: 20px;
`;

export default RejectedResult;
