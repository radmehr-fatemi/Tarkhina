import React from 'react';

//Style
import style from "./HomePage.module.scss";

//SVG
import searchSVG from "../assets/svg/search.svg";

//Components
import HomePageSlider from './HomePageSlider';
import HomePageMenu from './HomePageMenu';
import HomPageChain from './HomPageChain';

const HomePage = () => {
    return (
        <div className={ style.homePage } >
            <HomePageSlider />

            <div className={ style.homePageInputSearch } >
                <input type="text" placeholder=' جست و جو ' />
                <img src={ searchSVG } alt="" />
            </div>

            <HomePageMenu />
            <HomPageChain />          
        </div>
    );
};

export default HomePage;