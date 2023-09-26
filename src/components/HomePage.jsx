import React from 'react';

//Style
import style from "./HomePage.module.scss";

//SVG
import searchSVG from "../assets/svg/searchHome.svg";

//Components
import HomePageSlider from './HomePageSlider';
import HomePageMenu from './HomePageMenu';
import HomPageChain from './HomPageChain';
import HomePageTerkhinehTour from './HomePageTerkhinehTour';

const HomePage = () => {
    return (
        <div className={style.homePage} >
            <HomePageSlider />

            <div className={ style.homePageSearch }>
                <div className={style.homePageInputSearch} >
                    <input type="text" placeholder=' جست و جو ' />
                    <img src={searchSVG} alt="" />
                </div>
            </div>

            <HomePageMenu />
            <HomPageChain />
            <HomePageTerkhinehTour />
        </div>
    );
};

export default HomePage;