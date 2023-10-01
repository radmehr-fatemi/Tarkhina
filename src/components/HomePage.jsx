import React from 'react';

//Style
import style from "./HomePage.module.scss";

//Components
import Banner from "./Banner";
import HomePageMenu from './HomePageMenu';
import HomPageChain from './HomPageChain';
import HomePageTerkhinehTour from './HomePageTerkhinehTour';
import HomePageSearch from './HomePageSearch';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className={style.homePage} >
            <Banner />
            <HomePageSearch />
            <HomePageMenu />
            <HomPageChain />
            <HomePageTerkhinehTour />
            <Footer />
        </div>
    );
};

export default HomePage;