import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './OkatebatBranchBanner.scss';
import { Navigation } from 'swiper/modules';

//Image
import bannerImg1 from "./img/branch-banner-1.jpg";
import bannerImg2 from "./img/branch-banner-2.jpg";
import bannerImg3 from "./img/branch-banner-3.jpg";

//SVG
import locationSVG from "./svg/location.svg";
import phoneSVG from "./svg/phone.svg";
import clockSVG from "./svg/clock.svg";

export default function OkatebatBranchBanner() {
    return (
        <div className='OkatebatBranchBanner'>

            <div className="OkatebatBranchBannerField1">
                <div className='OkatebatBranchBannerHeader'>
                    <h1> شعبه اکباتان </h1>
                </div>

                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    style={{
                        // "--swiper-navigation-color": "#000",
                        "--swiper-navigation-size": "25px",
                    }}
                >

                    <SwiperSlide> <img src={bannerImg1} alt="branch photo" /> </SwiperSlide>
                    <SwiperSlide> <img src={bannerImg2} alt="branch photo" /> </SwiperSlide>
                    <SwiperSlide> <img src={bannerImg3} alt="branch photo" /> </SwiperSlide>

                </Swiper>
            </div>

            <div className='OkatebatBranchBannerAddress'>
                <p> <img src={ locationSVG } alt="location phpto" /> شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم </p>
                <p> <img src={ phoneSVG } alt="phone phpto" /> ۰۲۱-۵۴۸۹۱۲۵۰-۵۱ </p>
                <p> <img src={ clockSVG } alt="clock phpto" /> همه‌روزه از ساعت ۱۲  الی ۲۳  </p>
            </div>

        </div>
    );
}
