import React, { useState } from "react";
import styled, { css } from "styled-components";
import { imageClient } from "../../libs/api";
import ImgWrapper from "../common/ImgWrapper";

const PreviewLeftView = ({ articleData, onDataChange }) => {
  const [previewLength, setPreviewLength] = useState(0);
  const handleChange = (e) => {
    if (e.target.value.length > 150) {
      e.target.value = articleData.summary;
      return;
    }
    setPreviewLength(e.target.value.length);
    onDataChange({
      summary: e.target.value,
    });
  };

  const handleImageChange = async (e) => {
    const formData = new FormData();
    const imageFile = e.target.files[0];
    formData.append("file", imageFile);
    //formData 안의 file이라는 키에 imageFile을 추가하겠다.
    const { data } = await imageClient.post("", formData);
    onDataChange({ thumbnail: data.url });
  };

  return (
    <StyledLeftView>
      <h3>포스트 미리보기</h3>
      <input type='file' id='file' onChange={handleImageChange} />
      <label for='file'>썸네일 업로드</label>
      <ImgWrapper height='193px' top='15px'>
        <img src={articleData.thumbnail} alt='thumbnail' />
      </ImgWrapper>
      <p>{articleData.title}</p>
      <textarea
        placeholder='당신의 포스트를 짧게 소개해보세요.'
        onChange={handleChange}
        value={articleData.summary}
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
  & > input {
    display: none;
  }
  & > label {
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
  & > label:hover {
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
