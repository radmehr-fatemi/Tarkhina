import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CardMenu.module.scss";

//SVG
import heartSVG from "./svg/heart.svg";
import starSVG from "./svg/star.svg";
import trashSVG from "./svg/trash.svg";

//Context
import { CartContext } from './svg/CartContextProvider';

//function
import { shortHandler } from './function';
import { findQuantity } from './function';

const CardMenu = ({ foodData }) => {

    const { name, image, price, stars, title, discount, id } = foodData;
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styled.cardMenu}>

            {/* <div className={ styled.cardMenuOverall }></div> */}

            <div className={styled.cardMenuImg}>
                <Link> <img src={image} alt="food photo" /> </Link>
            </div>

            <div className={styled.cardMenuFields}>
                <div className={styled.cardMenuField1}>
                    <h4> {name} </h4>
                    <div className={styled.cardMenuField1Spans}>
                        <span> 220000 </span>
                        <span> % {discount} </span>
                    </div>
                </div>

                <div className={styled.cardMenuField2}>
                    <p> {shortHandler(title)} ... </p>
                    <span> {(+price).toLocaleString()}  تومان  </span>
                </div>

                <div className={styled.cardMenuField3}>
                    <img src={heartSVG} alt="heart photo" />
                    <div className={styled.cardMenuField3Spans}>
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                        <img src={starSVG} alt="star photo" />
                    </div>
                    <div className={styled.cardMenuField3Button}>
                        {findQuantity(id, state.selectedItems) === 0 ?
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: foodData })} > افزودن به سبد خرید </button> :

                            <div className={styled.cardMenuField3ButtonShow} >
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
                </div>
            </div>
        </div>
    );
};

export default CardMenu;