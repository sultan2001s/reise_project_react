import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./sliderFaces.css";

import { Autoplay } from "swiper";
import elnura from "../../../../images/elnura.png";
import kursant from "../../../../images/kursant.png";
import aiperi from "../../../../images/aiperi.png";
import syrgak from "../../../../images/syrgak.png";



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
                    <div className="faces__card">
                        <img className="faces__img" src={elnura} alt="elnura"/>
                        <h2 className="faces__h2">Эльнура</h2>
                        <p className="faces__text">Соонователь “Reise”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={kursant} alt="kursant"/>
                        <h2 className="faces__h2">Курсант</h2>
                        <p className="faces__text">Директор “Reise”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={aiperi} alt="aiperi"/>
                        <h2 className="faces__h2">Айпери</h2>
                        <p className="faces__text">Соонователь “Reise”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={syrgak} alt="syrgak"/>
                        <h2 className="faces__h2">Сыргак</h2>
                        <p className="faces__text">Менеджер-консультант</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={aiperi} alt="syrgak"/>
                        <h2 className="faces__h2">Мээрим</h2>
                        <p className="faces__text">Преподаватель “Reise”</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;