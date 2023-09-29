import React from 'react';

//Style
import style from "./HomePage.module.scss";

//Components
import HomePageMenu from './HomePageMenu';
import HomPageChain from './HomPageChain';
import HomePageTerkhinehTour from './HomePageTerkhinehTour';
import HomePageSearch from './HomePageSearch';

const HomePage = () => {
    return (
        <div className={style.homePage} >
            <HomePageSearch />
            <HomePageMenu />
            <HomPageChain />
            <HomePageTerkhinehTour />
        </div>
    );
};

export default HomePage;