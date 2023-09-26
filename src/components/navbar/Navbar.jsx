import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Style
import styled from "./Navbar.module.scss";

//SVG
import tarkhineSVG from "../../assets/svg/tarkhina.svg";
import userDarkSVG from "../../assets/svg/user-dark.svg";
import userSVG from "../../assets/svg/user.svg";
import cartSVG from "../../assets/svg/cart.svg";
import arrowDownSVG from "../../assets/svg/arrow-down.svg";
import searchSVG from "../../assets/svg/search.svg";
import walletSVG from "../../assets/svg/wallet.svg";
import heartSVG from "../../assets/svg/heart.svg";
import locationSVG from "../../assets/svg/location.svg";
import logoutSVG from "../../assets/svg/logout.svg";

//Components
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {

    return (
        <div className={styled.navbar} >


            <div className={styled.hamburgerMenuField}>
                <HamburgerMenu />
            </div>

            <div className={styled.tarkhineSvg} >
                <Link to="/" >
                    <img src={tarkhineSVG} alt="tarkhina photo" />
                </Link>
            </div>

            <div className={styled.navbarMenuItems}>
                <ul>
                    <li>
                        <Link to='/' >صفحه اصلی</Link>
                    </li>

                    <li>
                        <Link to='/branch' > شعبه</Link>
                        <img src={arrowDownSVG} alt="arrow down" />
                        <ol className={styled.navbarMenuItemsBranch}>
                            <li><Link> اکباتان </Link></li>
                            <li><Link> چالوس </Link></li>
                            <li><Link> اقدسیه </Link></li>
                            <li><Link> ونک </Link></li>
                        </ol>
                    </li>

                    <li>
                        <Link to='/' > منو </Link>
                        <img src={arrowDownSVG} alt="arrow down" />
                        <ol className={styled.navbarMenuItemsMenu}>
                            <li><Link> غذای اصلی </Link></li>
                            <li><Link> پیش غذا </Link></li>
                            <li><Link> دسر </Link></li>
                            <li><Link> نوشیدنی </Link></li>
                        </ol>
                    </li>

                    <li><Link to='/' > اعطای نمایندگی </Link></li>
                    <li><Link to='/' > درباره ما </Link></li>
                    <li><Link to='/' > تماس با ما </Link></li>
                </ul>

            </div>

            <div className={styled.navbarIcons} >
                <div className={styled.navbarIconsSearch}>
                    <Link> <img src={searchSVG} alt="search" /> </Link>
                    <Link> <img src={cartSVG} alt="shoping cart photo" /> </Link>
                </div>

                <div className={styled.navbarIconsProfile}>
                    <img src={userSVG} alt="profile" />
                    <img src={arrowDownSVG} alt="profile" />
                </div>
                <ol className={styled.navbarMenuItemsProfile}>
                    <li> <img src={userDarkSVG} alt="profile photo" /> <Link> پروفایل </Link></li>
                    <li> <img src={walletSVG} alt="wallet photo" /> <Link> پیگیری سفارش </Link></li>
                    <li> <img src={heartSVG} alt="heart photo" /> <Link> علاقه‌مندی‌ها </Link></li>
                    <li> <img src={locationSVG} alt="location photo" /> <Link> آدرس‌های من </Link></li>
                    <li> <img src={logoutSVG} alt="logout photo" /> <Link> خروج از حساب </Link></li>
                </ol>
            </div>

        </div>
    );
};

export default Navbar;