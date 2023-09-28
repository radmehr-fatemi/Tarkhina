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

            <div>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    // clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                    {
                        offer.map(food =>
                            
                            <SwiperSlide key={food.id}>
                                <CardSlider foodData={food} />
                            </SwiperSlide>
                        )
                    }
                    <SwiperSlide style={{ backgroundColor: "red" ,width : "1000px" }}>
                        End
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
