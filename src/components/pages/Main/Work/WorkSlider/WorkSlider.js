import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import img1 from "../../../../images/img1.png";


const WorkSlider = () => {
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
                    <img className="img__i" src={img1} alt="img1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img__i" src={img1} alt="img1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img__i" src={img1} alt="img1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img__i" src={img1} alt="img1"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default WorkSlider;