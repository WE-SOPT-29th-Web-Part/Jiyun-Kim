import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImgWrapper from "../components/common/ImgWrapper";
import Profile from "../components/home/Profile";
import { StyledTags } from "../components/home/ArticleCard";

const Article = () => {
  const location = useLocation();
  const article = location.state;
  const { title, body, thumbnail, date, tags } = article;

  return (
    <StyledArticlePage>
      <Header />
      <StyledArticleHeader>
        <h1>{title}</h1>
        <div>
          <StyledHeaderLeft>
            <span>김지윤</span>
            <span> · </span>
            <span>{date}</span>
          </StyledHeaderLeft>
          <ArticleOptions article={article} />
        </div>
      </StyledArticleHeader>

      <StyledTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </StyledTags>
      {thumbnail && (
        <ImgWrapper top='14px' height='100%'>
          <img src={thumbnail} alt='thumbnail' />
        </ImgWrapper>
      )}
      <StyledBody>{body}</StyledBody>
      <Profile />
    </StyledArticlePage>
  );
};

const StyledArticlePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 50%;
  }
`;

const StyledArticleHeader = styled.div`
  margin-bottom: 14px;

  & > h1 {
    align-items: left;
    font-size: 3rem;
    font-weight: 800;
    color: rgb(52, 58, 64);
  }

  & > div {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
  }

  & button {
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    color: rgb(134, 142, 150);
    font-size: 1rem;
    margin-left: 8px;
  }
  & button:hover {
    color: rgb(33, 37, 41);
    cursor: pointer;
  }
  & button:first-child {
    margin: 0;
  }
`;

const StyledHeaderLeft = styled.div`
  color: rgb(73, 80, 87);
  & > span:nth-child(1) {
    color: rgb(52, 58, 64);
    font-weight: bold;
  }
  & > span:nth-child(2) {
    margin: 0 5px;
  }
`;

const StyledBody = styled.div`
  font-size: 1.125rem;
  margin: 80px 0;
`;

export default Article;
