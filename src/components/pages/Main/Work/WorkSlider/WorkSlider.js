import React, {useContext} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {CustomContext} from "../../../../../Context";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WorkSlider = () => {
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
                                className="img__i"
                                alt="img1"
                                src={item.images1}
                                effect="blur"
                            />
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage
                                key={idx}
                                className="img__i"
                                alt="img2"
                                src={item.images2}
                                effect="blur"
                            />
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage
                                key={idx}
                                className="img__i"
                                alt="img3"
                                src={item.images3}
                                effect="blur"
                            />
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item, idx) => (
                            <LazyLoadImage
                                key={idx}
                                className="img__i"
                                alt="img4"
                                src={item.images4}
                                effect="blur"
                            />
                        ))
                    }
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default WorkSlider;