import React, { useState } from "react";
import styled, { css } from "styled-components";

const PreviewLeftView = ({ articleData, setArticleData }) => {
  const [previewLength, setPreviewLength] = useState(0);
  const handleChange = (e) => {
    if (e.target.value.length > 150) {
      e.target.value = articleData.summary;
      return;
    }
    setPreviewLength(e.target.value.length);
    setArticleData((articleData) => ({
      ...articleData,
      summary: e.target.value,
    }));
  };

  return (
    <StyledLeftView>
      <h3>포스트 미리보기</h3>
      <button>썸네일 업로드</button>
      <p>{articleData.title}</p>
      <textarea
        placeholder='당신의 포스트를 짧게 소개해보세요.'
        onChange={handleChange}
      />
      <StyledSummaryLength word={previewLength}>
        <span>{previewLength}</span>
        <span>/150</span>
      </StyledSummaryLength>
    </StyledLeftView>
  );
};

const StyledLeftView = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;

  & > h3 {
    font-size: 1.3125rem;
    color: rgb(52, 58, 64);
    margin-bottom: 8px;
  }
  & > button {
    width: 167px;
    height: 32px;
    margin-top: 16px;
    padding: 4px 32px;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(32, 201, 151);
    background-color: white;
  }
  & > .img__button:hover {
    background-color: rgb(248, 249, 250);
    cursor: pointer;
  }
  & > p {
    margin-top: 24px;
    font-size: 1.125rem;
  }
  & > textarea {
    width: 100%;
    height: 118px;
    outline: none;
    border: none;
    resize: none;
    font-size: 0.875rem;
    margin-top: 8px;
    padding: 12px 16px;
  }
`;

const StyledSummaryLength = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 4px;
  & > span {
    font-size: 0.75rem;
    color: rgb(134, 142, 150);
    ${({ word }) =>
      word >= 150 &&
      css`
        color: red;
      `}
  }
`;

export default PreviewLeftView;
