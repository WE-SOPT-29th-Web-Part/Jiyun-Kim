import React, { useState, useEffect } from "react";
import { client } from "../../libs/api.js";
import ArticleCard from "./ArticleCard.jsx";
import styled from "styled-components";

const ArticlesContainer = () => {
  const [articleList, setArticleList] = useState([]);
  //데이터 받아보기
  //axios => async/await
  const getArticleList = async () => {
    const { data } = await client.get("/article");
    setArticleList(data);
  };

  //componentDidMount 되면서 실행시키기
  useEffect(() => {
    getArticleList();
  }, []);

  return (
    <StyledArticlesContainer>
      {articleList.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </StyledArticlesContainer>
  );
};

const StyledArticlesContainer = styled.article`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 0 375px;
`;

export default ArticlesContainer;
