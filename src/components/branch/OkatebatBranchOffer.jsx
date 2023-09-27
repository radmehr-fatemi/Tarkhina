import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OkatebatBranchOffer.scss';

//Data
import { foodsData } from '../../data/foodsData';

//Components
import CardSlider from '../shared/cardSlider';

export default function OkatebatBranchOffer() {

    const { offer, popular, non_Iranian } = foodsData;

    return (
        <div className='OkatebatBranchOffer'>

            <div>
                <h1> پیشنهاد ویژه </h1>
            </div>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        popular.map(food =>
                            
                            <SwiperSlide key={food.id}>
                                <CardSlider foodData={food} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}
