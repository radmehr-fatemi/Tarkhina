import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './MenuMain.scss';
import { v4 } from 'uuid';

//SVG
import arrowLeftSVG from "./svg/arrow-left-home.svg";
import searchSVG from "./svg/search.svg";
import cartSVG from "../../assets/svg/cart.svg";

//Components
import HomePageSearch from '../HomePageSearch';
import CardMenu from '../shared/CardMenu';

//data
import { foodsData } from '../../data/foodsData';

const MenuMain = () => {

    const { iranian, non_Iranian, pizzas, sandwiches } = foodsData

return (
    <div className='MenuMain'>

        <div className='MenuMainItems'>
            <div className='MenuMainSwiper'>
                <Swiper
                    pagination={true}
                    className="mySwiper"
                    slidesPerView={3}
                    // centeredSlides={true}
                    spaceBetween={8}
                    breakpoints={{
                        0: {
                            width: 350,
                            slidesPerView: 3,
                        },
                        768: {
                            width: 800,
                            slidesPerView: 5,
                        },
                        1180: {
                            width: 1350,
                            slidesPerView: 6,
                        },
                    }}
                >

                    <SwiperSlide>
                        <Link > غذا های ایرانی <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link> غذا های غیر ایرانی <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link> پیتزا ها <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link> ساندویچ ها <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link> پرفروش ترین  <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link> اقتصادی ترین <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className={"MenuMainSearch"} >
                <input type="text" placeholder=' جست و جو ' />
                <img src={searchSVG} alt="" />
            </div>
        </div>
        <HomePageSearch />

        <div className='MenuMainFields'>

            <div id="MenuMainFieldFilter1">
                <div className='MenuMainField1'>
                    <h3> غذا های ایرانی </h3>
                    <Link to="/cart" >
                        <img src={cartSVG} alt="cart photo" style={{ width: "20px" }} />
                        تکمیل خرید
                    </Link>
                </div>

                <div className="MenuMainFieldCArds">
                    {
                        iranian.map(food => <CardMenu key={ food.id } foodData={food} />)
                    }
                </div>
            </div>

            <div id="MenuMainFieldFilter2" className='MenuMainField2'>
                <h3> غذاهای غیر ایرانی </h3>

                <div className="MenuMainFieldCArds">
                    {
                        non_Iranian.map(food => <CardMenu key={ food.id } foodData={food} />)
                    }
                </div>
            </div>

            <div id="MenuMainFieldFilter3" className='MenuMainField3'>
                <h3> پیتزا </h3>

                <div className="MenuMainFieldCArds">
                    {
                        pizzas.map(food => <CardMenu key={ food.id } foodData={food} />)
                    }
                </div>
            </div>

            <div id="MenuMainFieldFilter4" className='MenuMainField4'>
                <h3> ساندویچ </h3>

                <div className="MenuMainFieldCArds">
                    {
                        sandwiches.map(food => <CardMenu key={ food.id } foodData={food} />)
                    }
                </div>
            </div>


        </div>
    </div>
);
};

export default MenuMain;