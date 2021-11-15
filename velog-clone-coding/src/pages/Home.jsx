import React, { useState } from 'react';
import { Route } from 'react-router';
import Header from '../components/common/Header';
import ArticlesContainer from '../components/home/ArticlesContainer';
import HomeNav from '../components/home/HomeNav';
import Profile from '../components/home/Profile';
import SeriesCategory from './SeriesCategory';
import styled from 'styled-components';

const Home = ({match}) => {
    const [tab, setTab] = useState(1);
    return (
        <StyledHome>
            <Header />
            <Profile />
            <HomeNav 
                tab={tab}
                setTab={setTab}
            />
            <Route exact path={match.path} component={ArticlesContainer} />
            <Route exact path={`${match.path}series`} component={SeriesCategory} />
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