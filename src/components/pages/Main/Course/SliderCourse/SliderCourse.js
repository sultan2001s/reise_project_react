import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./slider.css";

import { Autoplay } from "swiper";

import course1 from "../../../../images/course1.png";
import course2 from "../../../../images/course2.png";
import course3 from "../../../../images/course3.png";
import course4 from "../../../../images/course4.png";

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
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="course__card">
                        <img className="course__img" src={course1} alt="course"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course__card">
                        <img className="course__img" src={course2} alt="course"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course__card">
                        <img className="course__img" src={course3} alt="course"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course__card">
                        <img className="course__img" src={course4} alt="course"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="course__card">
                        <img className="course__img" src={course1} alt="course"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;