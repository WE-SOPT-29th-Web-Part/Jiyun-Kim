import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgWrapper from "../common/ImgWrapper";

const ArticleCard = ({ article }) => {
  const { title, summary, tags, thumbnail, date } = article;
  return (
    //history -> aㅋ=태그를 형성하지 않는다
    //lint는 a태그 만듬 -> 검색엔진에 도움됨
    <StyledArticleCard>
      <Link to={`article/${article.id}`} state={article}>
        {thumbnail && (
          <ImgWrapper ratio='56%' top='0' height='402px'>
            <img src={thumbnail} alt='thumbnail' />
          </ImgWrapper>
        )}
        <h3>{title}</h3>
      </Link>
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

  & > a {
    text-decoration: none;
    width: 100%;
    h3 {
      font-size: 1.5rem;
      color: rgb(33, 37, 41);
      margin: 0;
    }
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

export const StyledTags = styled.div`
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

export default ArticleCard;
