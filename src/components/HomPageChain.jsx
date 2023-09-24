import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./HomPageChain.module.scss";

//SVG
import userHomeSVG from "../assets/svg/userHome.svg";
import wifiSVG from "../assets/svg/home-wifi.svg";
import menuBoardSVG from "../assets/svg/menu-board.svg";
import diagramSVG from "../assets/svg/diagram.svg";
import arrowLeftSVG from "../assets/svg/arrow-left-home.svg";

const HomPageChain = () => {
    return (
        <div className={styled.homPageChain} >

            <div className={styled.homPageChainFilter}>

                <div className={styled.homPageChainContainer} >
                    <div className={styled.homPageChainTitre} >
                        <h1> رستوران‌های زنجیره‌ای ترخینه </h1>
                        <p>
                            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                        </p>
                    </div>

                    <div className={styled.homPageChainMore} >
                        <Link>
                            اعطلاعات بیشتر
                            <img src={arrowLeftSVG} alt="arrow left photo" />
                        </Link>
                    </div>
                </div>

                <div className={styled.homPageChainItems} >
                    <ul>
                        <li>
                            <img src={userHomeSVG} alt="contact photo" />
                            <span> پرسنلی مجرب و حرفه‌ای </span>
                        </li>
                        <li>
                            <img src={diagramSVG} alt="contact photo" />
                            <span> کیفیت بالای غذاها </span>
                        </li>
                        <li>
                            <img src={wifiSVG} alt="contact photo" />
                            <span> محیطی دلنشین و آرام </span>
                        </li>
                        <li>
                            <img src={menuBoardSVG} alt="contact photo" />
                            <span> منوی متنوع </span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default HomPageChain;