import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CardSlider.module.scss";

//SVG
import heartSVG from "../../assets/svg/heart.svg";
import hearRedSVG from "./svg/heart-red.svg";
import starSVG from "../../assets/svg/star.svg";
import trashSVG from "./svg/trash.svg";

//Context
import { CartContext } from '../context/CartContextProvider';

//function
import { findQuantity, discountCounter, checkIsLiked } from './function';

const CardSlider = ({ foodData }) => {

    const { name, image, price, stars, discount, id } = foodData;
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styled.cardSlider}>
            <div className={styled.cardSliderImg}>
              <Link to={ `/details/${ id }` } ><img src={image} alt="food photo" /></Link>
                <h1> {name} </h1>
            </div>

            <div className={styled.cardSliderFields}>
                <div className={styled.cardSliderField1}>

                    <div className={ styled.cardSliderField1Hearts }>
                    {
                        checkIsLiked(id, state) ?
                        <img className={styled.cardSliderField1Heart1} src={hearRedSVG} alt="like photo" onClick={() => dispatch({ type: "LIKED_ITEM", payload: foodData })} /> :
                        <img className={styled.cardSliderField1Heart2} src={heartSVG} alt="like photo" onClick={() => dispatch({ type: "LIKED_ITEM", payload: foodData })} />
                    }
                    </div>

                    <div className={styled.cardSliderField1spans}>
                        {
                            discount > 0 &&
                            <div>
                                <span> {parseInt(price).toLocaleString()} </span>
                                <span> {discount} % </span>
                            </div>
                        }
                    </div>
                </div>

                <div className={styled.cardSliderField2}>
                    <div className={styled.cardSliderField2spans}>
                        <img src={starSVG} alt="star photo" />
                        <span> {stars} </span>
                    </div>
                    <span> {parseInt(discountCounter(price, discount)).toLocaleString()} تومان </span>
                </div>
            </div>

            <div className={styled.cardSliderButton}>

                {findQuantity(id, state.selectedItems) === 0 ?
                    <button onClick={() => dispatch({ type: "ADD_ITEM", payload: foodData })} > افزودن به سبد خرید </button> :

                    <div className={styled.cardSliderButtonShow} >
                        {findQuantity(id, state.selectedItems) >= 1 &&
                            <button onClick={() => dispatch({ type: "INCREASE", payload: foodData })} > + </button>
                        }

                        <span> {findQuantity(id, state.selectedItems)} </span>

                        {findQuantity(id, state.selectedItems) === 1 &&
                            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: foodData })} > <img src={trashSVG} alt="trash photo" /> </button>
                        }

                        {findQuantity(id, state.selectedItems) > 1 &&
                            <button onClick={() => dispatch({ type: "DECREASE", payload: foodData })} > - </button>
                        }
                    </div>

                }
            </div>
        </div >
    );
};

export default CardSlider;