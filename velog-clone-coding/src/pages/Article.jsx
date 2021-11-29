import React from 'react';
import { useLocation } from 'react-router';
import ArticleOptions from '../components/article/ArticleOptions';
import Header from '../components/common/Header';
import ImgWrapper from '../components/common/ImgWrapper';
import Profile from '../components/home/Profile';

const Article = () => {
    const location = useLocation();
    const article = location.state;
    const {title, body, thumbnail, date, tags} = article;
    
    return (
        <div>
            <Header />
            <Profile />
            <h1>{title}</h1>
            <ArticleOptions article={article} />
            <span>김지윤</span>
            <span> · </span>
            <span>{date}</span>
            <div>
                {thumbnail && <ImgWrapper ratio="50%">
                    <img src={thumbnail} alt="thumbnail" />
                </ImgWrapper>
                }
                {tags.map(tag => (<span key={tag}>{tag}</span>))}
                <div>{body}</div>
            </div>
        </div>
    );
};

export default Article;