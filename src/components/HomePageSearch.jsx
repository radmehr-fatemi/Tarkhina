import React from 'react';

//Style
import style from "./HomePageSearch.module.scss";

//SVG
import searchSVG from "../assets/svg/searchHome.svg";


const HomePageSearch = () => {
    return (
        <div>
            <div className={style.homePageSearch}>
                
                <div className={style.homePageInputSearch} >
                    <input type="text" placeholder=' جست و جو ' />
                    <img src={searchSVG} alt="search photo" />
                </div>
                
            </div>

        </div>
    );
};

export default HomePageSearch;