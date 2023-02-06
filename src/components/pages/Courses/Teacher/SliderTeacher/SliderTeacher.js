import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./sliderTeacher.css";

import { Autoplay } from "swiper";
import teacherImg from "../../../../images/teacherImg.png";
import malika from "../../../../images/malika.png";
import aidai from "../../../../images/aidai.png";
import ayjan from "../../../../images/ayjan.png";



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
                    <div>
                        <img src={teacherImg} alt="teacherImg"/>
                        <h3 className="teacher__adi">Адилет</h3>
                        <p>
                            Жил в Германии 2 года, <br/>
                            преподает уже 3 года, <br/>
                            уровень С1.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={malika} alt="malika"/>
                        <h3 className="teacher__adi">Малика</h3>
                        <p>
                            Училась в Германии, <br/>
                            преподает уже 2 года, <br/>
                            уровень С1.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={aidai} alt="aidai"/>
                        <h3 className="teacher__adi">Айдай</h3>
                        <p>
                            Жила в Германии 2 года, <br/>
                            преподает уже 1 год, <br/>
                            уровень С1.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={ayjan} alt="ayjan"/>
                        <h3 className="teacher__adi">Айжан</h3>
                        <p>
                            Жила в Германии 1 год, <br/>
                            преподает уже 3 года, <br/>
                            уровень С1.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={teacherImg} alt="teacherImg"/>
                        <h3 className="teacher__adi">Адилет</h3>
                        <p>
                            Жил в Германии 2 года, <br/>
                            преподает уже 3 года, <br/>
                            уровень С1.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;