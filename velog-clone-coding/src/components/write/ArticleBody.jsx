import React from "react";
import styled from "styled-components";

const ArticleBody = ({ body, onDataChange }) => {
  const handleChange = (e) => {
    onDataChange({
      body: e.target.value,
    });
  };
  return (
    <StyledTextarea>
      <textarea
        placeholder='당신의 이야기를 적어보세요...'
        onChange={handleChange}
        value={body}
      />
    </StyledTextarea>
  );
};

const StyledTextarea = styled.div`
  width: 90%;
  display: flex;
  flex-grow: 1;
  padding: 30px 0;
  & > textarea {
    width: 100%;
    outline: none;
    border: none;
    resize: none;
    font-size: 1rem;
  }
`;

export default ArticleBody;
