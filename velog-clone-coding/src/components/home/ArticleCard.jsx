import React from "react";
import styled, { css } from "styled-components";

const ArticleCard = ({ article }) => {
  const { id, title, body, summary, series, tags, thumbnail, date } = article;
  return (
    <StyledArticleCard>
      <StyledWrapper thumbnail={thumbnail}>
        <img src={thumbnail} alt='articleImg' />
      </StyledWrapper>
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <StyledTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </StyledTags>
      <div>{date}</div>
    </StyledArticleCard>
  );
};

const StyledArticleCard = styled.section`
  width: 100%;
  padding: 64px 0;
  border-bottom: 1px solid rgb(233, 236, 239);

  &:last-child {
    padding-top: 0;
  }

  & > h3 {
    font-size: 1.5rem;
    color: rgb(33, 37, 41);
    margin: 0;
  }
  & > h4 {
    margin-top: 8px;
    margin-bottom: 32px;
    font-size: 1rem;
    font-weight: normal;
    color: rgb(73, 80, 87);
  }

  & > div {
    margin-top: 16px;
    color: rgb(134, 142, 150);
    font-size: 0.875rem;
  }
`;

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > span {
    height: 32px;
    border-radius: 50px;
    background-color: rgb(241, 243, 245);
    color: rgb(12, 166, 120);
    padding: 0 16px;
    margin: 0 14px 14px 0;
    line-height: 32px;
    text-align: center;
    font-size: 1rem;
  }
  & > span:hover {
    cursor: pointer;
  }
`;

const StyledWrapper = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({ thumbnail }) =>
    thumbnail === "" &&
    css`
      display: none;
      `};
      
    & > img {
      width: 100%;
    height: auto;
  }
`;

export default ArticleCard;
