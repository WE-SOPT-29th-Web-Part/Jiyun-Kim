import React from "react";
import Header from "../components/common/Header";
import ArticlesContainer from "../components/home/ArticlesContainer";
import HomeNav from "../components/home/HomeNav";
import Profile from "../components/home/Profile";
import SeriesCategory from "./SeriesCategory";
import styled from "styled-components";
import { Route, Routes } from "react-router";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Profile />
      <HomeNav />
      <Routes>
        <Route path='/series' element={<SeriesCategory />} />
        <Route path='/' element={<ArticlesContainer />} />
      </Routes>
    </StyledHome>
  );
};

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
`;

export default Home;
