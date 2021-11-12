import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import { client } from '../../libs/api.js';

const ArticlePreview = ({articleData, setArticleData, preview, setPreview}) => {
    const [word, setWord] = useState(0);
    const createArticle = async () => {
        const {data} = await client.get('/article');
        const id = data.length + 1;
        const now = new Date();
        const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
        await client.post('/article', {
            ...articleData, 
            id, 
            date,
        });
    }

    const handleCancel = () => {
        setPreview(false);
    }

    const handlePost = () => {
        createArticle();
    }

    const handleChange = (e) => {
        if (e.target.value.length > 150) {
            e.target.value = articleData.summary;
            return;
        }
        setWord(e.target.value.length);
        setArticleData(articleData => ({
            ...articleData, 
            summary: e.target.value
        }));
    }

    return (
        <StyledPreview preview={preview}>
            <StyledLeftPage>
                <h3>포스트 미리보기</h3>
                <button className="img__button">썸네일 업로드</button>
                <div className="article__title">{articleData.title}</div>
                <textarea placeholder="당신의 포스트를 짧게 소개해보세요." onChange={handleChange}/>
                <StyledSummaryLength word={word}>
                    <span>{word}</span>
                    <span>/150</span>
                </StyledSummaryLength>
            </StyledLeftPage>
            <div className="center__bar"></div>
            <StyledRightPage>
                <button className="cancel" onClick={handleCancel}>취소</button>
                <Link to='/'>
                    <button className="published" onClick={handlePost}>출간하기</button>
                </Link>
            </StyledRightPage>
        </StyledPreview>
    );
};

const StyledPreview = styled.div`
    ${({preview}) => 
        !preview ? 
        css`
        display: none;
        `:
        css`
        display: flex;
        `
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgb(248, 249, 250);
    transition: all 300ms ease 500ms;
    & > .center__bar {
        margin: 0 32px;
        width: 1px;
        height: 50%;
        background-color: rgb(233, 236, 239);
    }
`;

const StyledLeftPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;

    & > h3 {
        font-size: 1.3125rem;
        color: rgb(52, 58, 64);
        margin-bottom: 8px;
    }
    & > .img__button {
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
    & > .article__title {
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
        ${({word}) => 
            word >= 150 &&
            css`
            color: red;
        `}
    }
`;

const StyledRightPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > .cancel {
        padding: 0 18px;
        width: 72px;
        height: 40px;
        background-color: rgb(134, 142, 150);
        color: white;
        border-radius: 4px;
        font-size: 1.125rem;
        border: 0;
    }
    & > .cancel:hover {
        background-color: rgb(173, 181, 189);
        cursor: pointer;
    }
    & .published {
        padding: 0 18px;
        margin-left: 14px;
        width: 108px;
        height: 40px;
        font-size: 1.125rem;
        color: white;
        background-color: rgb(18, 184, 134);
        border: 0;
        border-radius: 4px;
    }
    & .published:hover {
        background-color: rgb(32, 201, 151);
        cursor: pointer;
    }
`;

export default ArticlePreview;