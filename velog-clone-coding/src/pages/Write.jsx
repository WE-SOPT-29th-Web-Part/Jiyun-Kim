import React, { useState } from 'react';
import ArticleBody from '../components/write/ArticleBody';
import ArticleFooter from '../components/write/ArticleFooter';
import ArticleTags from '../components/write/ArticleTags';
import ArticleTitle from '../components/write/ArticleTitle';
import styled from 'styled-components';
import ArticlePreview from '../components/write/ArticlePreview';

const Write = () => {
    const [articleData, setArticleData] = useState({
        id: '',
        title: '',
        body: '',
        summary: '',
        series: '',
        tags: [],
        thumbnail: '',
        date: '',
    });
    const [preview, setPreview] = useState(false);
    return (
        <StyledWritePage>
            <StyledArticle>
                <ArticleTitle setArticleData={setArticleData}/>
                <StyledCenterLine>
                    <div></div>
                </StyledCenterLine>
                <ArticleTags tags={articleData.tags} articleData={articleData} setArticleData={setArticleData}/>
                <ArticleBody setArticleData={setArticleData}/>
                <ArticleFooter setPreview={setPreview}/>
            </StyledArticle>
            <ArticlePreview articleData={articleData} setArticleData={setArticleData} preview={preview} setPreview={setPreview}/>
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