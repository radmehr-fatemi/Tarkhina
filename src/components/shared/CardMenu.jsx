import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CardMenu.module.scss";

//SVG
import heartSVG from "./svg/heart.svg";
import starSVG from "./svg/star.svg";

//function
import { shortHandler } from './function';

const CardMenu = ({ foodData }) => {

    const { name, image, price, stars, title, discount, id } = foodData;

    return (
        <div className={styled.cardMenu}>

            <div className={styled.cardMenuImg}>
                <Link> <img src={image} alt="food photo" /> </Link>
            </div>

            <div className={styled.cardMenuFields}>
                <div className={styled.cardMenuField1}>
                    <h4> {name} </h4>
                    <div className={ styled.cardMenuField1Spans }>
                        <span> 220000 </span>
                        <span> % {discount} </span>
                    </div>
                </div>

                <div className={styled.cardMenuField2}>
                    <p> { shortHandler( title ) } ... </p>
                    <span> { (+price).toLocaleString() }  تومان  </span>
                </div>

                <div className={styled.cardMenuField3}>
                    <img src={heartSVG} alt="heart photo" />
                    <div className={ styled.cardMenuField3Spans }>
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                    </div>
                    <button> افزودن به سبد خرید </button>
                </div>
            </div>
        </div>
    );
};

export default CardMenu;