import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//Image
import backgroundOne from "../assets/image/backgroundSliderOne.jpg";
import backgroundThree from "../assets/image/backgroundSliderThree.jpg";
import backgroundFour from "../assets/image/backgroundSliderFour.jpg";
import backgroundFive from "../assets/image/backgroundSliderFive.jpg";
import backgroundSix from "../assets/image/backgroundSliderSix.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Banner.scss";

export default function HomePageSlider() {
  return (
    <div className="homePageSlider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-color": "#66a57b",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "9px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-navigation-size": "25px",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <Link>
            <img src={backgroundThree} alt="slider photo" />
            <p>هر روز، یک تجربه مزه جدید</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <img src={backgroundOne} alt="slider photo" />
            <p>یک ماجراجویی آشپزی برای تمام حواس</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <img src={backgroundFour} alt="slider photo" />
            <p>طعم بی‌نظیر طبیعت!</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <img src={backgroundSix} alt="slider photo" />
            <p>تجربه‌ای که فراموش نخواهید کرد</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <img src={backgroundFive} alt="slider photo" />
            <p>طعمی که به یاد خواهید آورد</p>
          </Link>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
