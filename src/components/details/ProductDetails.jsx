import React, { useContext } from 'react';
import { useParams, Link ,useNavigate } from 'react-router-dom';

import styled from "./ProductDetails.module.scss";

//URL
import { foodsData } from '../../data/foodsData';

//Context
import { CartContext } from '../context/CartContextProvider';

//function
import { checkIsLiked, setStars, findQuantity } from '../shared/function';

//SVG
import heartSVG from "./svg/heart.svg";
import hearRedSVG from "./svg/heart-red.svg";
import cartSVG from "./svg/cart.svg";
import starSVG from "./svg/star.svg";
import starEmptySVG from "./svg/star-empty.svg";
import backSVG from "./svg/back.svg";
import trashSVG from "./svg/trash.svg";

const ProductDetails = (props) => {

    const id = useParams().id
    const overallData = [...foodsData.iranian, ...foodsData.non_Iranian, ...foodsData.pizzas, ...foodsData.sandwiches];
    const { state, dispatch } = useContext(CartContext);
    const state2 = state
    const foodData = overallData[id - 1];
    const { name, image, title, discount, price, stars  } = foodData;
    const navigate = useNavigate();
    
    return (
        <div className={styled.productDetails} >

                <div  className={styled.productDetailsHead} >
                    <img src={backSVG} alt="back photo" onClick={ () => navigate( -1 ) } />
                    <h1> صفحه محصول </h1>
                </div>

            <div className={styled.productDetailsForFlex} >

                <div className={styled.productDetailsImg}>
                    <img src={image} alt="food photo" />
                </div>

                <div className={styled.productDetailsMain}>
                    <div className={styled.productDetailsHeader}>
                        <h3> {name} </h3>
                        <div className={styled.productDetailsHeaderItems}>
                            {
                                checkIsLiked(id, state) ?
                                    <img  className={styled.productDetailsHeaderItemsIMG1} src={hearRedSVG} alt="like photo" onClick={() => dispatch({ type: "LIKED_ITEM", payload: foodData })} /> :
                                    <img  className={styled.productDetailsHeaderItemsIMG2} src={heartSVG} alt="like photo" onClick={() => dispatch({ type: "LIKED_ITEM", payload: foodData })} />
                            }
                            <Link to="/cart" ><img src={cartSVG} alt="cart photo" /></Link>
                        </div>
                    </div>

                    <div className={styled.productDetailsFields}>
                        <div className={styled.productDetailsField1}>
                            <h4> محتویات </h4>
                            <p> { title } </p>
                        </div>

                        <div className={styled.productDetailsField2}>
                            <h4> امتیاز </h4>
                            <div> {setStars(stars, starSVG, starEmptySVG)} </div>
                        </div>

                        <div className={styled.productDetailsField3}>
                            <h4> قیمت </h4>
                            <span> {parseInt(price).toLocaleString()} تومان </span>
                        </div>

                    </div>
                    <div className={styled.productDetailsField4}>
                        {findQuantity(id, state.selectedItems) === 0 ?
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: foodData })} > افزودن به سبد خرید </button> :

                            <div className={styled.productDetailsField4Buttons} >
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

export default ProductDetails;