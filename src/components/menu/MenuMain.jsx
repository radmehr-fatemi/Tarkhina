import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './MenuMain.scss';

//SVG
import arrowLeftSVG from "./svg/arrow-left-home.svg";
import searchSVG from "./svg/search.svg";

//Components
import HomePageSearch from '../HomePageSearch';

const MenuMain = () => {
    return (
        <div className='MenuMain'>
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
                            width: 1000,
                            slidesPerView: 6,
                        },
                        // 1180: {
                        //     width: 1350,
                        //     slidesPerView: 5,
                        // },
                    }}
                >

                    <SwiperSlide>
                    <Link> غذا های ایرانی <img src={arrowLeftSVG} alt="arrow left photo" /> </Link>
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

            <HomePageSearch />

            <div className={"MenuMainSearch"} >
                    <input type="text" placeholder=' جست و جو ' />
                    <img src={searchSVG} alt="" />
                </div>
            
        </div>
    );
};

export default MenuMain;