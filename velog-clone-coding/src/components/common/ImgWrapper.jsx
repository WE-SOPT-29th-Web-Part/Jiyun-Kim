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
  height: ${({ height }) => height};
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  & > img {
    width: 100%;
    height: auto;
    //이미지 비율 ratio로 설정하는 방법에 대해 공부하기 위해 남겨놓은 것!
    /* position: absolute;
    left: 0;
    top: 0;
    height: 100%; */
  }
`;

export default ImgWrapper;
