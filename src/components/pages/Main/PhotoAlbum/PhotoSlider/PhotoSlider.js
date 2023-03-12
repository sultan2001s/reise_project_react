import React, {useContext} from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {CustomContext} from "../../../../../Context";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PhotoSlider = () => {
    const {course} = useContext(CustomContext);

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
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage key={idx}
                                className="album__img"
                                alt="album1"
                                effect="blur"
                                src={`./${item.album}`}/>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage
                                key={idx}
                                className="album__img"
                                alt="album2"
                                effect="blur"
                                src={`./${item.album2}`}/>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage
                                key={idx}
                                className="album__img"
                                alt="album3"
                                effect="blur"
                                src={`./${item.album3}`}/>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage
                                key={idx}
                                className="album__img"
                                alt="album4"
                                effect="blur"
                                src={`./${item.album4}`}/>
                        ))
                    }
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default PhotoSlider;