import React ,{ useContext } from 'react';

//Style
import styled from "./CardSlider.module.scss";

//SVG
import heartSVG from "../../assets/svg/heart.svg";
import starSVG from "../../assets/svg/star.svg";

//Context
import { CartContext } from './svg/CartContextProvider';

const CardSlider = ({ foodData }) => {

    const { name, image, price, stars, discount } = foodData;
    const { state ,dispatch } = useContext( CartContext );

    return (
        <div className={styled.cardSlider}>
            <div className={styled.cardSliderImg}>
                <img src={image} alt="food photo" />
                <h1> {name} </h1>
            </div>

            <div className={styled.cardSliderFields}>
                <div className={styled.cardSliderField1}>
                    <img src={heartSVG} alt="like photo" onClick={ () => dispatch({ type: "LIKED_ITEM" ,payload: foodData }) } />
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
                <button onClick={ () => dispatch({ type: "ADD_ITEM" ,payload: foodData }) } > افزودن به سبد خرید </button>
                <button onClick={ () => dispatch({ type: "INCREASE" ,payload: foodData }) } > +</button>
                <button onClick={ () => dispatch({ type: "CHECKOUT" ,payload: foodData }) } > CHECKOUT</button>
            </div>
        </div>
    );
};

export default CardSlider;