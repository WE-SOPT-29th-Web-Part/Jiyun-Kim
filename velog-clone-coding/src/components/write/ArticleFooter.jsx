import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../assets/icons/keyboard_backspace.svg";

const ArticleFooter = ({ onPreviewFlagChange }) => {
  const handlePost = async () => {
    onPreviewFlagChange(true);
  };
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <StyledBack onClick={() => navigate("/")}>
        <BackArrow />
        <span>나가기</span>
      </StyledBack>
      <div>
        <StyledPostSaveBtn>임시저장</StyledPostSaveBtn>
        <StyledPublishPostBtn onClick={handlePost}>
          출간하기
        </StyledPublishPostBtn>
      </div>
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

const StyledPostSaveBtn = styled.button`
  background-color: rgb(233, 236, 239);
  color: rgb(73, 80, 87);
  width: 112px;
  height: 40px;
  padding: 0 20px;
  border: 0;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 3px;

  &:hover {
    background: rgb(241, 243, 245);
  }
`;

const StyledPublishPostBtn = styled.button`
  background-color: rgb(18, 184, 134);
  color: white;
  width: 112px;
  height: 40px;
  padding: 0 20px;
  border: 0;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 3px;
  margin-left: 12px;

  &:hover {
    background-color: rgb(38, 209, 158);
  }
`;

export default ArticleFooter;
