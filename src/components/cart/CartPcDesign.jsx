import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CartPcDesign.module.scss";

//SVG
import arrowRightSVG from "./svg/arrow-right-green.svg";
import trashBlackSVG from "./svg/trash-black.svg";
import trashGreenSVG from "./svg/trash-green.svg";
import warningSVG from "./svg/warning.svg";
import starSVG from "./svg/star.svg";
import starEmptySVG from "./svg/star-empty.svg";

//GIF
import ghostGIF from "./gif/ghost.gif";

//Context
import { CartContext } from '../context/CartContextProvider';

//function
import { shortHandler, findQuantity, discountCounter, checkIsLiked, setStars } from '../shared/function';

//Components
import Footer from '../Footer';

const CartPcDesign = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <>
            <div className={styled.CartPcDesign}>
                <div className={styled.CartPcDesignHeader}>
                    <Link to="/menu/main" > <img src={arrowRightSVG} alt="arrow righ photo" /> ادامه خرید </Link>
                    <h2> سبد خرید ({state.itemsCounter}) </h2>
                    <img src={trashBlackSVG} alt="trash photo" onClick={() => dispatch({ type: "CLEAR" })} />
                </div>

                <div className={styled.CartPcDesignProductField}>

                    <div className={styled.CartPcDesignProducts}>
                        {
                            (state.checkout && state.itemsCounter === 0) ?
                                <div className='CartMobileDesignFieldsEmpty' >
                                    <p> پرداخت با موفقیت انجام شد</p>
                                    {/* <img src={ghostGIF} alt="kitty photo" /> */}
                                    <Link to="/menu/main" > رفت به منو </Link>
                                </div> :

                                (!state.checkout && state.itemsCounter === 0) ?
                                    <div className='CartMobileDesignFieldsEmpty' >
                                        <p> سبد خرید شما خالی است </p>
                                        <img src={ghostGIF} alt="kitty photo" />
                                        <Link to="/menu/main" > رفت به منو </Link>
                                    </div> :

                                    state.selectedItems.map(food => <div key={food.id} className={styled.CartPcDesignProduct}>

                                        <div className={styled.CartPcDesignProductImage}>
                                            <Link to={`/details/${food.id}`} ><img src={food.image} alt="food photo" /></Link>
                                        </div>

                                        <div className={styled.CartPcDesignProductFields}>
                                            <div className={styled.CartPcDesignProductField1}>
                                                <h2> {food.name} </h2>
                                                <img src={trashBlackSVG} alt="trash photo" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: food })} />
                                            </div>

                                            <div className={styled.CartPcDesignProductField2}>
                                                <p> {shortHandler(food.title, 30)} ... </p>
                                                {
                                                    food.discount > 0 &&
                                                    <div className={styled.CartPcDesignProductField2Spans}>
                                                        <span> {parseInt(food.price).toLocaleString()} </span>
                                                        <span> {food.discount} % </span>
                                                    </div>
                                                }
                                            </div>

                                            <div className={styled.CartPcDesignProductField3}>
                                                <div className={styled.CartPcDesignProductField3Star}>
                                                    {setStars(food.stars, starSVG, starEmptySVG)}
                                                </div>
                                                <div className={styled.CartPcDesignProductField3Button}>
                                                    <button onClick={() => dispatch({ type: "INCREASE", payload: food })} >+</button>
                                                    <span> {food.quantity} </span>
                                                    <button onClick={() => dispatch({ type: "DECREASE", payload: food })} >-</button>
                                                </div>
                                                <span> {(parseInt(discountCounter(food.price, food.discount))).toLocaleString()} تومان </span>
                                            </div>
                                        </div>
                                    </div>)
                        }
                    </div>

                    <div className={styled.CartContextFields}>
                        <div className={styled.CartContextField1}>
                            <h3> تخفیف محصولات </h3>
                            <span> {state.totalDiscount > 0 ? parseInt(state.totalDiscount).toLocaleString() : 0} تومان </span>
                        </div>

                        <div className={styled.CartContextField2}>
                            <div className={styled.CartContextField2SentPrice}>
                                <h3> هزینه ارسال </h3>
                                <span> 0 تومان </span>
                            </div>
                            <p>
                                <img src={warningSVG} alt="warning photo" />
                                هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
                            </p>
                        </div>

                        <div className={styled.CartContextField3}>
                            <h3> مبلغ قابل پرداخت </h3>
                            <span> {parseInt(state.total).toLocaleString()} تومان </span>
                        </div>

                        <div className={styled.CartContextField4}>
                            <button onClick={() => dispatch({ type: "CHECKOUT" })} > پرداخت </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styled.CartContextFooter} >
                <Footer />
            </div>
        </>
    );
};

export default CartPcDesign;