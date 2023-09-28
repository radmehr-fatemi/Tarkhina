import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OkatebatBranchPopuler.scss';

//Data
import { foodsData } from '../../data/foodsData';

//Components
import CardSlider from '../shared/CardSlider';

export default function OkatebatBranchPopuler() {

    const { offer, popular, non_Iranian } = foodsData;

    return (
        <div className='OkatebatBranchPopuler'>

            <div>
                <h1> غذا های محبوب </h1>
            </div>

            <div>
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
