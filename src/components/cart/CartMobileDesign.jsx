import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

//Style
import "./CartMobileDesign.scss";

//SVG
import backSVG from "./svg/back.svg";
import trashBlackSVG from "./svg/trash-black.svg";
import trashGreenSVG from "./svg/trash-green.svg";
import warningSVG from "./svg/warning.svg";

//GIF
import ghostGIF from "./gif/ghost.gif";

//Context
import { CartContext } from '../context/CartContextProvider';

//function
import { findQuantity } from '../shared/function';

const CartMobileDesign = () => {

    const { state, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="CartMobileDesign">

            <div className="CartMobileDesignHeader">
                <img src={backSVG} alt="arrow right photo" onClick={() => navigate(-1)} />
                <h3> سبد خرید </h3>
                <img src={trashBlackSVG} alt="trash photo" onClick={() => dispatch({ type: "CLEAR" })} />
            </div>

            <div className="CartMobileDesignFields">
                {
                    (state.checkout && state.itemsCounter === 0) ?  
                        <div className='CartMobileDesignFieldsEmpty' >
                            <p> پرداخت با موفقیت انجام شد</p>
                            {/* <img src={ghostGIF} alt="kitty photo" /> */}
                            <Link to="/menu/main" > رفت به منو </Link>
                        </div> :

                    ( !state.checkout && state.itemsCounter === 0 ) ?  
                        <div className='CartMobileDesignFieldsEmpty' >
                            <p> سبد خرید شما خالی است </p>
                            <img src={ghostGIF} alt="kitty photo" />
                            <Link to="/menu/main" > رفت به منو </Link>
                        </div>  :

                        <div className="CartMobileDesignField1">
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={4}
                                spaceBetween={0}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                style={{
                                    "--swiper-pagination-color": "#66a57b",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "8px",
                                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                                    "--swiper-navigation-size": "25px",
                                }}
                                modules={[Mousewheel, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    state.selectedItems.map(food => <SwiperSlide key={food.id} >
                                        <div className='CartMobileDesignField1Product'>
                                            <div className='CartMobileDesignField1ProductIMG'>
                                                <Link to={`/details/${food.id}`}>
                                                    <img src={food.image} alt="food photo" />
                                                </Link>
                                            </div>
                                            <div className='CartMobileDesignField1ProductName'>
                                                <h4> {food.name} </h4>
                                                <span> {parseInt(food.price).toLocaleString()} </span>
                                            </div>
                                            <div className='CartMobileDesignField1ProductButtons'>
                                                {
                                                    food.quantity > 1 ?
                                                        <button className='CartMobileDesignField1ProductButton1' onClick={() => dispatch({ type: "DECREASE", payload: food })} >-</button> :
                                                        <button className='CartMobileDesignField1ProductButton2' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: food })} ><img src={trashGreenSVG} alt="trash photo" /></button>
                                                }
                                                <span> {food.quantity} </span>
                                                <button onClick={() => dispatch({ type: "INCREASE", payload: food })} >+</button>
                                            </div>

                                        </div>
                                    </SwiperSlide>)
                                }

                            </Swiper>
                        </div>
                }


                <div className="CartMobileDesignField2" >
                    <h3> تخفیف محصولات </h3>
                    <span> {!state.totalDiscount ? 0 : parseInt(state.totalDiscount).toLocaleString()} تومان </span>
                </div>

                <div className="CartMobileDesignField3">
                    <div className="CartMobileDesignField3Price">
                        <h3> هزینه ارسال </h3>
                        <span> 0 تومان </span>
                    </div>
                    <p>
                        <img src={warningSVG} alt="warning photo" />
                        هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.
                    </p>
                </div>

                <div className="CartMobileDesignField4">
                    <div className="CartMobileDesignField4price">
                        <h3> مبلغ قابل پرداخت </h3>
                        <span> {state.total.toLocaleString()} تومان </span>
                    </div>
                    <button onClick={() => dispatch({ type: "CHECKOUT" })} > پرداخت </button>
                </div>
            </div>

        </div>
    );
};

export default CartMobileDesign;