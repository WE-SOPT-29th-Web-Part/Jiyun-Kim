import React from 'react';
import styled from 'styled-components';

const ArticleTags = ({tags, articleData, onDataChange}) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const tempData = {...articleData};
            if (!isExistTag(tempData.tags, e.target.value)) {
                const tempTags = [...tempData.tags, e.target.value];
                onDataChange({tags: tempTags});
            }
            //setState는 비동기이다. 따라서 아래의 갱신이 먼저 일어날 수 있다.
            e.target.value = '';
        }
    }

    const handleClick = (e) => {
        const tempTags = tags.filter(tag => e.target.dataset.id !== tag);
        onDataChange({tags: tempTags});
    }

    const isExistTag = (tags, value) => {
        return tags.filter(tag => value === tag).length;
    }

    return (
        <StyledTags>
            {tags.map(tag => (
                <span key={tag} data-id={tag} onClick={handleClick}>{tag}</span>
            ))}
            <input type="text" placeholder="태그를 입력하세요" onKeyPress={handleKeyPress}/>
        </StyledTags>
    );
};

const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    & > span {
        height: 32px;
        border-radius: 50px;
        background-color: rgb(241, 243, 245);
        color: rgb(12, 166, 120);
        padding: 0 16px;
        margin: 0 12px 12px 0;
        line-height: 32px;
        text-align: center;
    }
    & > span:hover {
    cursor: pointer;
    }
    & > input {
        border: none;
        outline: none;
        font-size: 1.125rem;
        padding: 1px 2px;
        margin-bottom: 12px;
    }
`;

export default ArticleTags;