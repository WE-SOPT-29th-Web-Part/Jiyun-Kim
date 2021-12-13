import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { client } from "../../libs/api.js";
import { useNavigate } from "react-router";
import PreviewLeftView from "./PreviewLeftView.jsx";

const ArticlePreview = ({
  editData,
  articleData,
  onDataChange,
  preview,
  setPreview,
}) => {
  const navigate = useNavigate();
  const createArticle = async () => {
    if (editData) {
      await client.patch(`/article/${editData.id}`, articleData);
      navigate(`/article/${editData.id}`, { state: articleData });
      return;
    }
    await client.post("/article", {
      ...articleData,
    });
    navigate("/");
  };

  const handleCancel = () => {
    setPreview(false);
  };

  return (
    <StyledPreview preview={preview}>
      <PreviewLeftView articleData={articleData} onDataChange={onDataChange} />
      <StyledCenterBar></StyledCenterBar>
      <StyledRightPage>
        <StyledCancelBtn onClick={handleCancel}>취소</StyledCancelBtn>
        <Link to='/'>
          <StyledPublishBtn onClick={() => createArticle()}>
            출간하기
          </StyledPublishBtn>
        </Link>
      </StyledRightPage>
    </StyledPreview>
  );
};

const StyledPreview = styled.div`
  ${({ preview }) =>
    !preview
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 249, 250);
  transition: all 300ms ease 500ms;
`;

const StyledCenterBar = styled.div`
  margin: 0 32px;
  width: 1px;
  height: 50%;
  background-color: rgb(233, 236, 239);
`;

const StyledRightPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCancelBtn = styled.button`
  padding: 0 18px;
  width: 72px;
  height: 40px;
  background-color: rgb(134, 142, 150);
  color: white;
  border-radius: 4px;
  font-size: 1.125rem;
  border: 0;
  &:hover {
    background-color: rgb(173, 181, 189);
    cursor: pointer;
  }
`;

const StyledPublishBtn = styled.button`
  padding: 0 18px;
  margin-left: 14px;
  width: 108px;
  height: 40px;
  font-size: 1.125rem;
  color: white;
  background-color: rgb(18, 184, 134);
  border: 0;
  border-radius: 4px;

  &:hover {
    background-color: rgb(32, 201, 151);
    cursor: pointer;
  }
`;

export default ArticlePreview;
