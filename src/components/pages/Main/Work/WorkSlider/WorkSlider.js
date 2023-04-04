import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./workSlider.css";

import img4 from '../../../../images/img4.png'
import img3 from '../../../../images/img3.png'
import img2 from '../../../../images/img2.png'
import img1 from '../../../../images/img1.png'

import { Autoplay } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


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
                    <LazyLoadImage
                        className="img__i"
                        alt="img1"
                        src={img1}
                        effect="blur"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        className="img__i"
                        alt="img2"
                        src={img2}
                        effect="blur"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        className="img__i"
                        alt="img3"
                        src={img3}
                        effect="blur"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        className="img__i"
                        alt="img4"
                        src={img4}
                        effect="blur"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;