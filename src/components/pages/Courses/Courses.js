import React from 'react';
import {motion} from "framer-motion"

import './courses.css'
import {FaInstagram, FaFacebook} from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im";
import {RiRoadMapFill} from "react-icons/ri";
import Deutsch from "./Deutsch/Deutsch";
import Saturday from "./Saturday/Saturday";
import Teacher from "./Teacher/Teacher";

const textAnimation = {
    hidden: {
        x: -40,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transaction: {delay: custom * 0.2},
    })
};

const Courses = () => {
    return (
        <>
            <motion.section className="courses" initial="hidden" whileInView="visible">
                <div className="container">
                    <div className="courses__content">
                        <div className="courses__left">
                            <motion.h2 custom={1} variants={textAnimation} className="courses__title">Курсы немецкого языка от Reise</motion.h2>
                            <motion.p custom={2} variants={textAnimation} className="courses__text">С лучшими преподавателями от А1 до С1</motion.p>
                            <motion.button custom={2} variants={textAnimation} className="courses__btn">Записаться на курс</motion.button>
                        </div>
                        <motion.ul custom={1} variants={textAnimation} className="main__icons">
                            <li className="main__icon"><a className="main__icon" href="https://www.instagram.com/reisekg/"><FaInstagram/></a></li>
                            <li className="main__icon"><a className="main__icon" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></li>
                            <li className="main__icon"><a href="https://web.whatsapp.com/"><ImWhatsapp/></a></li>
                            <li className="main__icon"><a href="https://2gis.kg/bishkek/search/%D0%B3.%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%20110%D0%B0%20%20%20%20%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B5%D1%80%D0%B8%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2%D0%B0%2C%2026?m=74.599437%2C42.865632%2F14.53"><RiRoadMapFill/></a></li>
                            <li className="main__icon main__number"><a href="tel:+996 779 975 311" className="main__icon main__number">+996 779 975 311</a></li>
                            <li className="main__icon main__number"><a href="tel:+996 559 975 311" className="main__icon main__number">+996 559 975 311</a></li>
                        </motion.ul>
                    </div>
                </div>
            </motion.section>

            <Deutsch/>
            <Saturday/>
            <Teacher/>
        </>
    );
};

export default Courses;