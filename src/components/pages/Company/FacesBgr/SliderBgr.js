import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./bgr.css";

import { Autoplay } from "swiper";
import facesBgr from "../../../images/team-img.png";
import team from "../../../images/team.png";
import companyT from "../../../images/company-t.jpeg";
import companyC from "../../../images/team-c.jpeg";


const SliderBgr = () => {
    return (
        <>
            <Swiper modules={[Autoplay]}  autoplay={{delay: 5000, disableOnInteraction: false,}} speed={5000}  slidesPerView={1} spaceBetween={20}  className="mySwiper">
                <SwiperSlide>
                    <img className="faces__bgr" src={team} alt="team"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="faces__bgr" src={facesBgr} alt="facesBgr"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="faces__bgr" src={companyT} alt="facesBgr"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="faces__bgr" src={companyC} alt="facesBgr"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderBgr;