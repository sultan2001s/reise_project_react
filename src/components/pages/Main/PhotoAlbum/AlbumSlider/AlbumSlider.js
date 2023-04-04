import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


import { Autoplay } from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import album1 from "../../../../images/album1.png";
import album2 from "../../../../images/album2.png";
import album3 from "../../../../images/album3.png";
import album4 from "../../../../images/album4.png";


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
                        className="album__img"
                        alt="album1"
                        effect="blur"
                        src={album1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        className="album__img"
                        alt="album2"
                        effect="blur"
                        src={album2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        className="album__img"
                        alt="album2"
                        effect="blur"
                        src={album3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoadImage
                        className="album__img"
                        alt="album2"
                        effect="blur"
                        src={album4}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;