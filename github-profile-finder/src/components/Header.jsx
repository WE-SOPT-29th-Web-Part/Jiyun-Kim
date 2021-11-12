import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Title>
            GitHub Profile Finder
        </Title>
    );
};

const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 32px;
    color: rgb(229, 230, 231);
`;

export default Header;
