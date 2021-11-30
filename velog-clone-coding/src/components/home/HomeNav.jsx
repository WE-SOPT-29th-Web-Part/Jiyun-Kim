import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const HomeNav = () => {
  const [tab, setTab] = useState(1);
  const handleClick = (e) => {
    if (e.target.dataset.tabIndex === "1") setTab(1);
    else setTab(2);
  };
  return (
    <StyledNav tab={tab}>
      <StyledTab tab={tab}>
        <Link to='/'>
          <div data-tab-index='1' onClick={handleClick}>
            글
          </div>
        </Link>
        <Link to='/series'>
          <div data-tab-index='2' onClick={handleClick}>
            시리즈
          </div>
        </Link>
      </StyledTab>
      <nav></nav>
    </StyledNav>
  );
};

const transformStyles = css`
  ${({ tab }) =>
    tab === 2 &&
    css`
      transform: translateX(128px);
    `}
`;

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 72px 0;
  & > nav {
    transition: transform 0.3s;
    width: 128px;
    height: 0.1rem;
    background-color: rgb(32, 201, 151);
    position: absolute;
    bottom: 0;
    ${transformStyles}
  }
`;

const StyledTab = styled.div`
  display: flex;
  & > a {
    text-decoration: none;
    color: rgb(73, 80, 87);
    font-weight: bold;
    width: 128px;
    height: 48px;
    font-size: 1.325rem;
    text-align: center;
    line-height: 48px;
  }
  & > a:hover {
    cursor: pointer;
  }
  & > a:nth-child(${({ tab }) => tab}) {
    color: rgb(32, 201, 151);
  }
`;

export default HomeNav;
