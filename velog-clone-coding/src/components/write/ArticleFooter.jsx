import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../assets/icons/keyboard_backspace.svg";

const ArticleFooter = ({setPreview }) => {
  const handlePost = async () => {
    setPreview(true);
  };
  const navigate = useNavigate();

  return (
    <StyledFooter>
    <StyledBack onClick={() => navigate("/")}>
        <BackArrow />
        <span>나가기</span>
    </StyledBack>
      <StyledRightButtons>
        <button className='tempPostSave'>
          <b>임시저장</b>
        </button>
        <button className='publishPost' onClick={handlePost}>
          <b>출간하기</b>
        </button>
      </StyledRightButtons>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0 8px rgb(0, 0, 0, 0.1);
`;

const StyledBack = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 114px;
  height: 40px;
  font-size: 1.125rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
  & > svg {
    fill: black;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;

const StyledRightButtons = styled.div`
  font-family: inherit;
  & > .tempPostSave {
    background-color: rgb(233, 236, 239);
    color: rgb(73, 80, 87);
    width: 112px;
    height: 40px;
    padding: 0 20px;
    border: 0;
    font-size: 1.125rem;
    border-radius: 3px;
  }
  & > .tempPostSave:hover {
    background: rgb(241, 243, 245);
  }

  & .publishPost {
    background-color: rgb(18, 184, 134);
    color: white;
    width: 112px;
    height: 40px;
    padding: 0 20px;
    border: 0;
    font-size: 1.125rem;
    border-radius: 3px;
    margin-left: 12px;
  }
  & .publishPost:hover {
    background-color: rgb(38, 209, 158);
  }
`;

export default ArticleFooter;
