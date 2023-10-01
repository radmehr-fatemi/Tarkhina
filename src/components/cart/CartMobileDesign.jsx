import React, { useContext } from 'react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

//Style
import styled from "./CartMobileDesign.scss";

//SVG
import arrowRightSVG from "./svg/arrow-right.svg";
import trashBlackSVG from "./svg/trash-black.svg";
import trashGreenSVG from "./svg/trash-green.svg";
import warningSVG from "./svg/warning.svg";

//Context
import { CartContext } from '../context/CartContextProvider';

//function
import { findQuantity } from '../shared/function';

const CartMobileDesign = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className="CartMobileDesign">

            <div className="CartMobileDesignHeader">
                <img src={arrowRightSVG} alt="arrow right photo" />
                <h3> سبد خرید </h3>
                <img src={trashBlackSVG} alt="trash photo" />
            </div>

            <div className="CartMobileDesignFields">
                <div className="CartMobileDesignField1">
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={5}
                        spaceBetween={10}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination]}
                        className="mySwiper"
                    >
                        {
                            state.selectedItems.map(food => <SwiperSlide>

                                <div className='CartMobileDesignField1Product'>

                                    <div className='CartMobileDesignField1ProductName'>
                                        <h4> {food.name} </h4>
                                        <span> {food.price} </span>
                                    </div>
                                    <div className='CartMobileDesignField1ProductButtons'>
                                        <button>+</button>
                                        <span> {food.quantity} </span>
                                        <button>-</button>
                                    </div>

                                </div>

                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>


                <div className="CartMobileDesignField2" >
                    <h3> تخفیف محصولات </h3>
                    <span> {state.totalPriceDiscount} تومان </span>
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
                        <span> {state.total} تومان </span>
                    </div>
                    <button> پرداخت </button>
                </div>
            </div>

        </div>
    );
};

export default CartMobileDesign;