import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

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

//Context
import { CartContext } from '../context/CartContextProvider';

//Components
import HamburgerMenu from './HamburgerMenu';

const showPrifileHandler = () => {
    const item = document.getElementsByClassName(styled.navbarMenuItemsProfile)[0]
    item.classList.add(styled.showProfile)
}
const unShowPrifileHandler = () => {
    const item = document.getElementsByClassName(styled.navbarMenuItemsProfile)[0]
    item.classList.remove(styled.showProfile)
}

const showBranchHandler = () => {
    const item = document.getElementsByClassName(styled.navbarMenuItemsBranchParents)[0]
    item.classList.add(styled.showBranchMenu)
}
const unShowBranchHandler = () => {
    const item = document.getElementsByClassName(styled.navbarMenuItemsBranchParents)[0]
    item.classList.remove(styled.showBranchMenu)
}

const showMenuHandler = () => {
    const item = document.getElementsByClassName(styled.navbarMenuItemsBranchParents2)[0]
    item.classList.add(styled.showBranchMenu)
}
const unShowMenuHandler = () => {
    const item = document.getElementsByClassName(styled.navbarMenuItemsBranchParents2)[0]
    item.classList.remove(styled.showBranchMenu)
}



const Navbar = () => {

    const [, , removeCookie] = useCookies();
    const { state } = useContext(CartContext);

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

                    <li className={styled.navbarBranch} onMouseEnter={showBranchHandler} onMouseLeave={unShowBranchHandler} >
                        <Link to='/branch' > شعبه</Link>
                        <img src={arrowDownSVG} alt="arrow-down-branch" />

                        <div className={styled.navbarMenuItemsBranchParents}>
                            <ol className={styled.navbarMenuItemsBranch}>
                                <li><Link to="/okatebatbranch"> اکباتان </Link></li>
                                <li><Link to="/okatebatbranch"> چالوس </Link></li>
                                <li><Link to="/okatebatbranch"> اقدسیه </Link></li>
                                <li><Link to="/okatebatbranch"> ونک </Link></li>
                            </ol>
                        </div>
                    </li>

                    <li className={styled.navbarBranch} onMouseEnter={showMenuHandler} onMouseLeave={unShowMenuHandler} >
                        <Link to='/menu/main' > منو </Link>
                        <img src={arrowDownSVG} alt="arrow-down-menu" />

                        <div className={styled.navbarMenuItemsBranchParents2}  >
                            <ol className={styled.navbarMenuItemsBranch}>
                                <li><Link to="/menu/main"> غذای اصلی </Link></li>
                                <li><Link to="/menu/main"> پیش غذا </Link></li>
                                <li><Link to="/menu/main"> دسر </Link></li>
                                <li><Link to="/menu/main"> نوشیدنی </Link></li>
                            </ol>
                        </div>
                    </li>

                    <li><Link > اعطای نمایندگی </Link></li>
                    <li><Link to='/aboutus' > درباره ما </Link></li>
                    <li><Link  > تماس با ما </Link></li>
                </ul>

            </div>

            <div className={styled.navbarIcons} >
                <div className={styled.navbarIconsSearch}>
                    <Link to="menu/main" className={styled.navbarIconsSearchImg} > <img src={searchSVG} alt="search" /> </Link>
                    <Link className={styled.navbarIconsProfileImg} > <img src={userSVG} alt="profile photo" /> </Link>

                    <Link to="/cart" className={styled.navbarIconsCart} >
                        <img src={cartSVG} alt="shoping cart photo" />
                        {
                            state.itemsCounter > 0 &&
                            <span className={styled.navbarIconsCartItemsCounter} > {state.itemsCounter} </span>
                        }
                    </Link>
                </div>

                <span className={styled.navbarIconsProfile} onMouseEnter={showPrifileHandler} onMouseLeave={unShowPrifileHandler} alt="profile">
                    <img className={styled.navbarIconsProfileImg1} src={userSVG} alt="profile" />
                    <img className={styled.navbarIconsProfileImg2} src={arrowDownSVG} alt="profile" />

                    <div className={styled.navbarMenuItemsProfileParent}>
                        <ol className={styled.navbarMenuItemsProfile}>
                            <li> <img src={userDarkSVG} alt="profile photo" /> <Link> پروفایل </Link></li>
                            <li> <img src={walletSVG} alt="wallet photo" /> <Link> پیگیری سفارش </Link></li>
                            <li> <img src={heartSVG} alt="heart photo" /> <Link to="/likeditems" > علاقه‌مندی‌ها </Link></li>
                            <li> <img src={locationSVG} alt="location photo" /> <Link> آدرس‌های من </Link></li>
                            <li onClick={() => removeCookie("user")}> <img src={logoutSVG} alt="logout photo" /> <Link> خروج از حساب </Link></li>
                        </ol>
                    </div>
                </span>
            </div>

        </div>
    );
};

export default Navbar;