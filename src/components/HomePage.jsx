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
import ScrollToTop from './shared/ScrollToTop';

const HomePage = () => {
    return (
        <div className={style.homePage} >
            <Banner />
            <HomePageSearch />
            <HomePageMenu />
            <HomPageChain />
            <HomePageTerkhinehTour />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default HomePage;