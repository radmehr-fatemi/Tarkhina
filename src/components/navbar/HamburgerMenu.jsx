import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./HamburgerMenu.module.scss";

//SVG
import hamburgerMenuSVG from "../../assets/hamburger-menu.svg";
import tarkhineSVG from "../../assets/tarkhina.svg";
import crossSVG from "../../assets/cross.svg";

const HamburgerMenu = () => {

    const [ isBurgerSelected ,setIsBurgerSelected ] = useState(false)

    const burgerHandler = () => {
        setIsBurgerSelected( !isBurgerSelected )
    }
    
    return (
        <div className={styled.hamburgerMenu} >

            <img src={hamburgerMenuSVG} alt="menu" onClick={ burgerHandler } />

            <div className={styled.hamburgerCross} onClick={ burgerHandler } id={ !!isBurgerSelected ? styled.showCross : styled.unShowCross } >
                <img src={crossSVG} alt="cross photo" />
            </div>

            <div className={styled.hamburgerMenuItems} id={ !!isBurgerSelected ? styled.showBurger : styled.unShowBurger }  >

                <div className={styled.tarkhineSvg} >
                    <Link to="/" >
                        <img src={tarkhineSVG} alt="tarkhina photo" />
                    </Link>
                </div>

                <ul>
                    <li><Link to='/' > صفحه اصلی </Link></li>
                    <li><Link to='/branch' > شعبه </Link></li>
                    <li><Link to='/menu' > منو </Link></li>
                    <li><Link to='/deputize' > اعطای نمایندگی </Link></li>
                    <li><Link to='/aboutus' > درباره ما </Link></li>
                    <li><Link to='/contactus' > تماس با ما </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;