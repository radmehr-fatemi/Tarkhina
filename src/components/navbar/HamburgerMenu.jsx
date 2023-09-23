import React from 'react';

//Style
import styled from "./HamburgerMenu.module.scss";

//SVG
import hamburgerMenuSVG from "../../assets/hamburger-menu.svg";

const HamburgerMenu = () => {
    return (
        <div className={ styled.hamburgerMenu } >
            <img src={hamburgerMenuSVG} alt="menu" />
        </div>
    );
};

export default HamburgerMenu;