import React from 'react';
import styled, {css} from 'styled-components';

const ImgWrapper = ({ratio, children}) => {
    return (
        <StyledImageWrapper ratio={ratio}>
            {children}
        </StyledImageWrapper>
    );
};

const StyledImageWrapper = styled.div`
  padding-top: ${({ratio}) => ratio};
  position: relative;

  /* height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden; */
  /* ${({ thumbnail }) =>
    thumbnail === "" &&
    css`
      display: none;
      `};
      
    & > img {
      width: 100%;
    height: auto;
  } */
`;

export default ImgWrapper;