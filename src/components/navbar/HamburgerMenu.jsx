import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

//Style
import styled from "./HamburgerMenu.module.scss";

//SVG
import hamburgerMenuSVG from "../../assets/svg/hamburger-menu.svg";
import tarkhineSVG from "../../assets/svg/tarkhina.svg";
import crossSVG from "../../assets/svg/cross.svg";

const HamburgerMenu = () => {

    const [ isBurgerSelected ,setIsBurgerSelected ] = useState(false)
    const [ , , removeCookie ] = useCookies();

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
                    <li><Link onClick={ burgerHandler } to='/' > صفحه اصلی </Link></li>
                    <li><Link onClick={ burgerHandler } to='/okatebatbranch' > شعبه </Link></li>
                    <li><Link onClick={ burgerHandler } to='/menu/main' > منو </Link></li>
                    <li><Link onClick={ burgerHandler } to='/likeditems' > علاقه مندی ها </Link></li>
                    <li><Link onClick={ burgerHandler } to='/aboutus' > درباره ما </Link></li>
                    <li><Link onClick={ burgerHandler }  > اعطای نمایندگی </Link></li>
                    <li><Link onClick={ burgerHandler }  > تماس با ما </Link></li>

                    <li><Link onClick={ () => removeCookie("user") } to='/' > خروج از حساب کاربری </Link></li>
                </ul>

            </div>

        </div>
    );
};

export default HamburgerMenu;