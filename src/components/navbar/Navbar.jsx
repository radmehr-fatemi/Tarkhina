import React from 'react';
import { Link } from "react-router-dom";

//Style
import styled from "./Navbar.module.scss";

//SVG
import tarkhineSVG from "../../assets/login/tarkhine.svg";
import userSVG from "../../assets/user.svg";
import cartSVG from "../../assets/cart.svg";
import arrowDownSVG from "../../assets/arrow-down.svg";
import searchSVG from "../../assets/search.svg";

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
                    <li><Link to='/' > صفحه اصلی </Link></li>

                    <li>
                        <Link to='/' > شعبه</Link>
                        <img src={arrowDownSVG} alt="arrow down" />
                    </li>

                    <li>
                        <Link to='/' > منو </Link>
                        <img src={arrowDownSVG} alt="arrow down" />
                    </li>

                    <li><Link to='/' > اعطای نمایندگی </Link></li>
                    <li><Link to='/' > درباره ما </Link></li>
                    <li><Link to='/' > تماس با ما </Link></li>
                </ul>

            </div>

            <div className={styled.navbarIcons} >
                <Link> <img src={searchSVG} alt="search" /> </Link>
                <Link> <img src={cartSVG} alt="shoping cart photo" /> </Link>
                <Link> <img src={userSVG} alt="profile" /> </Link>
            </div>

        </div>
    );
};

export default Navbar;