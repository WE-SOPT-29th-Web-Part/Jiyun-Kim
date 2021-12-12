import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search_black_24dp.svg';
import { ReactComponent as VelogLogo } from '../../assets/icons/velog_icon.svg';
import { ReactComponent as ArrowDropDown } from '../../assets/icons/arrow_drop_down.svg';
import SoptImg from '../../assets/images/29_sopt.png';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLeft>
                <VelogLogo />
                sopt.log
            </StyledLeft>
            <StyledRight>
                <StyledSearchBtn>
                    <SearchIcon />
                </StyledSearchBtn>
                <Link to="/write">
                    <StyledNewWrite>새 글 쓰기</StyledNewWrite>
                </Link>
                <StyledOptions>
                    <img src={SoptImg} alt="profile"/>
                    <ArrowDropDown />
                </StyledOptions>
            </StyledRight>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 90%;
    height: 64px;
`;

const StyledLeft = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: rgb(52, 58, 64);
    font-size: 1.3125rem;
    font-family: "Fira Mono", monospace;
    & > svg {
        fill: none;
        width: 28px;
        height: 28px;
        margin-right: 16px;
    }
`;

const StyledRight = styled.div`
    display: flex;
    align-items: center;
`;

const StyledNewWrite = styled.button`
    border: solid 1px rgb(52, 58, 64);
    border-radius: 30px;
    font-size: 1rem;
    font-weight: bold;
    background-color: white;
    color: rgb(52, 58, 64);
    width: 110px;
    height: 32px;
    margin: 0;
    padding: 1px 16px;
    margin-right: 20px;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    &:hover {
        background: rgb(52, 58, 64);
        color: white;
        cursor: pointer;
    }
`;

const StyledSearchBtn = styled.button`
    margin-right: 12px;
    width: 37px;
    height: 37px;
    border: 0;
    background-color: white;
    & > svg {
        fill: rgb(33, 37, 41);
    }
    &:hover {
    background-color: rgba(0, 0, 0, 0.043);
    border-radius: 50px;
    }
`;

const StyledOptions = styled.div`
    display: flex;
    align-items: center;
    
    & > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0px 0px 8px rgb(0, 0, 0, 9%);
    }
    & > img:hover {
        box-shadow: 0px 0px 12px rgb(0, 0, 0, 10%);
    }

    & > svg {
        margin-left: 4px;
        fill: rgb(134, 142, 150);
    }
    & > svg:hover {
        fill: rgb(33, 37, 41);
    }
`;

export default Header;