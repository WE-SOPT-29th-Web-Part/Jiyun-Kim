import React, { useState } from "react";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTags from "../components/write/ArticleTags";
import ArticleTitle from "../components/write/ArticleTitle";
import ArticlePreview from "../components/write/ArticlePreview";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import { client } from "../libs/api.js";

const Write = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;
  const [articleData, setArticleData] = useState(
    article ?? {
      // title: article?.title ?? '',
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: "",
    }
  );
  const [preview, setPreview] = useState(false);

  const handleDataChange = (rest) => {
    setArticleData((articleData) => ({
      ...articleData,
      ...rest,
    }));
  };

  const handlePreviewPage = (flag) => {
    setPreview(flag);
  };

  const publishPost = async () => {
    if (article) {
      await client.patch(`/article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    const postData = await client.post("/article", {
      ...articleData,
    });
    navigate("/", { state: postData });
  };

  return (
    <StyledWritePage>
      <StyledArticle>
        <ArticleTitle
          onDataChange={handleDataChange}
          title={articleData.title}
        />
        <StyledCenterLine>
          <div></div>
        </StyledCenterLine>
        <ArticleTags
          tags={articleData.tags}
          articleData={articleData}
          onDataChange={handleDataChange}
        />
        <ArticleBody body={articleData.body} onDataChange={handleDataChange} />
        <ArticleFooter onPreviewFlagChange={handlePreviewPage} />
      </StyledArticle>
      <ArticlePreview
        articleData={articleData}
        onDataChange={handleDataChange}
        onPublishPost={publishPost}
        preview={preview}
        onPreviewFlagChange={handlePreviewPage}
      />
    </StyledWritePage>
  );
};

const StyledWritePage = styled.section`
  width: 100%;
  height: 100%;
`;

const StyledArticle = styled.div`
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCenterLine = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  width: 90%;
  display: flex;
  & > div {
    width: 64px;
    height: 6px;
    background-color: rgb(73, 80, 87);
  }
`;

export default Write;
