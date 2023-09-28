import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OkatebatBranchOffer.scss';
import { FreeMode, Pagination } from 'swiper/modules';

//Data
import { foodsData } from '../../data/foodsData';

//Components
import CardSlider from '../shared/CardSlider';

export default function OkatebatBranchOffer() {

    const { offer, popular, non_Iranian } = foodsData;

    return (
        <div className='OkatebatBranchOffer'>

            <div>
                <h1> پیشنهاد ویژه </h1>
            </div>

            <Swiper
                slidesPerView={1}
                // centeredSlides={true}
                spaceBetween={15}
                className="mySwiper"
                breakpoints={{
                    0: {
                      width: 350,
                      slidesPerView: 'auto',
                    },
                    768: {
                      width: 1000,
                      slidesPerView: 'auto',
                    },
                    1180: {
                      width: 1350,
                      slidesPerView: 'auto',
                    },
                  }}
            >
                {
                    offer.map(food =>

                        <SwiperSlide key={food.id}>
                            <CardSlider foodData={food} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}
