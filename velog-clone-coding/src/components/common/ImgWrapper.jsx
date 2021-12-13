import React from "react";
import styled from "styled-components";

const ImgWrapper = ({ ratio, top, height, children }) => {
  return (
    <StyledImageWrapper ratio={ratio} top={top} height={height}>
      {children}
    </StyledImageWrapper>
  );
};

const StyledImageWrapper = styled.div`
  /* padding-top: ${({ ratio }) => ratio}; */
  margin-top: ${({ top }) => top};
  margin-bottom: 10px;
  position: relative;
  display: flex;
  height: ${({ height }) => height};
  width: 100%;
  align-items: center;
  overflow: hidden;

  & > img {
    width: 100%;
    height: auto;
    /* position: absolute;
    left: 0;
    top: 0;
    height: 100%; */
  }
`;

export default ImgWrapper;
