import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CardMenu.module.scss";

//SVG
import starSVG from "./svg/star.svg";
import starEmptySVG from "./svg/star-empty.svg";
import trashSVG from "./svg/trash.svg";
import heartSVG from "../../assets/svg/heart.svg";
import hearRedSVG from "./svg/heart-red.svg";

//Context
import { CartContext } from '../context/CartContextProvider';

//function
import { shortHandler, findQuantity, discountCounter, checkIsLiked, setStars } from './function';

const CardMenu = ({ foodData }) => {

    const { name, image, price, stars, title, discount, id } = foodData;
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styled.cardMenu}>

            <div className={styled.cardMenuImg}>
                <Link to={ `/details/${ id }` } > <img src={image} alt="food photo" /> </Link>
            </div>

            <div className={styled.cardMenuFields}>
                <div className={styled.cardMenuField1}>
                    <h4> {name} </h4>
                    <div className={styled.cardMenuField1Spans}>
                        {
                            discount > 0 &&
                            <div>
                                <span> { parseInt( price ).toLocaleString() } </span>
                                <span> % {discount} </span>
                            </div>
                        }
                    </div>
                </div>

                <div className={styled.cardMenuField2}>
                    <p> {shortHandler(title ,18)} ... </p>
                    <span> {(+discountCounter(price, discount)).toLocaleString()}  تومان  </span>
                </div>

                <div className={styled.cardMenuField3}>
                    <div className={styled.cardMenuField3Hearts}>
                        {
                            checkIsLiked(id, state) ?
                                <img className={styled.cardSliderField1Heart1} src={hearRedSVG} alt="like photo" onClick={() => dispatch({ type: "LIKED_ITEM", payload: foodData })} /> :
                                <img className={styled.cardSliderField1Heart2} src={heartSVG} alt="like photo" onClick={() => dispatch({ type: "LIKED_ITEM", payload: foodData })} />
                        }
                    </div>

                    <div className={styled.cardMenuField3Spans}>
                        {setStars(stars, starSVG, starEmptySVG)}
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