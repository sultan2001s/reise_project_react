import React, {useContext} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./slider.css";

import { Autoplay } from "swiper";
import {CustomContext} from "../../../../../Context";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const SliderCourse = () => {
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
                        course.map((item) => (
                            <div className="course__card" key={course}>
                                <LazyLoadImage
                                    className="course__img"
                                    alt="course"
                                    effect="blur"
                                    src={`./${item.image}`}/>
                                <div className="course__map">
                                    <h3 style={{color: "white", fontSize: '20px'}}>{item.title}</h3>
                                    <button className="course__map-btn" type="submit"><svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g >
                                            <path d="M19.5589 -8.31177e-05C29.8109 -0.00911926 38.2298 7.24289 39.7854 16.9557C40.4201 20.9166 39.5978 24.5883 37.9384 28.1445C35.9118 32.4859 33.1497 36.3383 30.1282 40.016C27.4599 43.264 24.5891 46.3232 21.5536 49.2268C20.4789 50.2549 19.5589 50.261 18.4942 49.2328C13.4141 44.3272 8.70625 39.1013 4.86051 33.1395C3.18811 30.5461 1.76018 27.8242 0.823195 24.8654C-0.678576 20.1204 -0.0569127 15.5351 2.12939 11.1907C5.22573 5.04008 10.2639 1.41558 17.0164 0.238873C18.0003 0.067186 19.0111 0.0491137 19.5589 -8.31177e-05ZM20.0209 9.77301C14.3391 9.77201 9.71907 14.4025 9.71009 20.1094C9.70011 25.8071 14.3252 30.4778 19.988 30.4889C25.6867 30.5009 30.3308 25.8403 30.3278 20.1134C30.3248 14.4106 25.7037 9.77401 20.0219 9.77301H20.0209Z" fill="#FE0000"/>
                                            <path d="M20.0059 13.4307C23.694 13.4237 26.7045 16.4468 26.6906 20.1416C26.6766 23.8163 23.679 26.8263 20.0299 26.8303C16.3558 26.8343 13.3343 23.7962 13.3452 20.1074C13.3562 16.4297 16.3418 13.4367 20.0059 13.4297V13.4307Z" fill="#FE0000"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_213_20476">
                                                <rect width="40" height="50" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                        <p style={{color: "white", fontSize: "20px"}}>?????????? <br/> ????????????</p>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item) => (
                            <div className="course__card" key={course}>
                                <LazyLoadImage
                                    className="course__img"
                                    alt="course"
                                    effect="blur"
                                    src={`./${item.img}`}/>
                            </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item) => (
                            <div className="course__card" key={course}>
                                <LazyLoadImage
                                    className="course__img"
                                    alt="course"
                                    effect="blur"
                                    src={`./${item.images}`}/>
                            </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        course.map((item) => (
                            <div className="course__card" key={course}>
                                <LazyLoadImage
                                    className="course__img"
                                    alt="course"
                                    effect='"blur'
                                    src={`./${item.ima}`}/>
                            </div>
                        ))
                    }
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;