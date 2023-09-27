import React from 'react';

//Style
import styled from "./CardSlider.module.scss";

//SVG
import heartSVG from "../../assets/svg/heart.svg";
import starSVG from "../../assets/svg/star.svg";

const CardSlider = ({ foodData }) => {

    const { name, image, price, stars, discount } = foodData;

    return (
        <div className={styled.cardSlider}>
            <div className={styled.cardSliderImg}>
                <img src={image} alt="food photo" />
                <h1> {name} </h1>
            </div>

            <div className={styled.cardSliderFields}>
                <div className={styled.cardSliderField1}>
                    <img src={heartSVG} alt="like photo" />
                    <div className={styled.cardSliderField1spans}>
                        <span> {parseInt("220000").toLocaleString()} </span>
                        <span> {discount} % </span>
                    </div>
                </div>

                <div className={styled.cardSliderField2}>
                    <div className={styled.cardSliderField2spans}>
                        <img src={starSVG} alt="star photo" />
                        <span> {stars} </span>
                    </div>
                    <span> {parseInt(price).toLocaleString()} تومان </span>
                </div>
            </div>

            <div className={styled.cardSliderButton}>
                <button> افزودن به سبد خرید </button>
            </div>
        </div>
    );
};

export default CardSlider;