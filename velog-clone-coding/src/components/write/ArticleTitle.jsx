import React from "react";
import styled from "styled-components";

const ArticleTitle = ({ onDataChange, title }) => {
  const handleChange = (e) => {
    onDataChange({ title: e.target.value });
  };
  return (
    <StyledTextarea
      placeholder='제목을 입력하세요.'
      onChange={handleChange}
      rows='1'
      value={title}
    ></StyledTextarea>
  );
};

const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  font-size: 2.75rem;
  width: 90%;
  height: auto;
  padding-top: 32px;
  font-family: inherit;
  font-weight: bold;
  color: rgb(33, 37, 41);
  display: flex;
`;

export default ArticleTitle;
