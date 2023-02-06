import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./sliderRev.css";

import { Autoplay } from "swiper";
import imageR from "../../../../images/imageR.png";
import imageD from "../../../../images/imageD.png";
import imageS from "../../../../images/imageS.png";
import imageF from "../../../../images/imageF.png";



const SliderCourse = () => {
    return (
        <>
            <Swiper
                autoplay={{delay: 3000, disableOnInteraction: false,}}
                speed={3000}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="reviews__card">
                        <img className="reviews__img" src={imageR} alt="imageR"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews__card">
                        <img className="reviews__img" src={imageD} alt="imageD"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews__card">
                        <img className="reviews__img" src={imageS} alt="imageS"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews__card">
                        <img className="reviews__img" src={imageF} alt="imageF"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews__card">
                        <img className="reviews__img" src={imageR} alt="imageR"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;