import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './OkatebatBranchComment.scss';
import { Pagination } from 'swiper/modules';

//Data
import { userComentsData } from '../../data/userCometns';

//SVG
import starSVG from "./svg/star.svg";

//Image
import userImg1 from "../../data/images/user1.jpg";

export default function OkatebatBranchComment() {

    return (
        <div className='OkatebatBranchComment'>

            <div className='OkatebatBranchCommentHeader'>
                <h1> نظرات کاربران</h1>
            </div>
            
            <div className='OkatebatBranchCommentSwiper'>

                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    slidesPerView={2}
                    // centeredSlides={true}
                    spaceBetween={15}
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
                        userComentsData.map(comment =>

                            <SwiperSlide key={comment.id}>
                                <div className='OkatebatBranchCommentFields'>
                                    <div className='OkatebatBranchCommentField1'>
                                        <img src={userImg1} alt="user photo" />
                                        <span> {comment.name} </span>
                                        <span> {comment.date} </span>
                                    </div>

                                    <div className='OkatebatBranchCommentField2'>
                                        <p> {comment.content} </p>

                                        <span>
                                            <img src={starSVG} alt="star photo" />
                                            {comment.stars}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}
