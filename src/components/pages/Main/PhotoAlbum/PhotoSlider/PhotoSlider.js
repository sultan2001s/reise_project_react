import React from 'react';
import {motion} from "framer-motion"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import album1 from "../../../../images/album1.png";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transaction: {delay: custom * 0.2},
    })
};

const PhotoSlider = () => {
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
                    <motion.img  custom={1} variants={textAnimation} className="album__img" src={album1} alt="album1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.img  custom={1} variants={textAnimation} className="album__img" src={album1} alt="album1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.img  custom={1} variants={textAnimation} className="album__img" src={album1} alt="album1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.img  custom={1} variants={textAnimation} className="album__img" src={album1} alt="album1"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default PhotoSlider;