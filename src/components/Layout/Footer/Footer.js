import React from 'react';
import {motion} from "framer-motion"

import './footer.css'
import {FaInstagram, FaFacebook} from "react-icons/fa";
import { ImWhatsapp } from 'react-icons/im';
import { RiRoadMapFill } from 'react-icons/ri';

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

const Footer = () => {
    return (
        <motion.section className="footer" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.div custom={1} variants={textAnimation} className="footer__content">
                    <ul className="footer__list">
                        <h2 className="footer__title">Филиал №1</h2>
                        <li className="footer__text">г. Бишкек, ул. Ахунбаева 110а <br/> (пересекает ул. Токоналиева)</li>
                        <li style={{display: 'flex', alignItems: 'center', columnGap: '10px'}} className="footer__num">0709 975-311 <a href="https://web.whatsapp.com/"><ImWhatsapp className="footer__icons"/></a> </li>
                        <li className="footer__num">0779 975-311</li>
                        <li className="footer__num">0559 975-311</li>
                    </ul>
                    <ul className="footer__list">
                        <h2 className="footer__title">Филиал №2</h2>
                        <li className="footer__text">Бишкек, ул. Керимбекова, 26 <br/> (пересечение Боконбаева/ Манаса)</li>
                        <li style={{display: 'flex', alignItems: 'center', columnGap: '10px'}} className="footer__num">0509 975-311 <a href="https://web.whatsapp.com/"><ImWhatsapp className="footer__icons"/></a> </li>
                        <li className="footer__num">0999 975-311</li>
                        <li className="footer__num">0222 975-311</li>
                    </ul>
                    <ul className="footer__list">
                        <h2 className="footer__title">График работы</h2>
                        <li className="footer__text">с понедельника по пятницу <br/> с 09:00 до 18:00</li>
                        <li className="footer__num">Суббота <br/> с 09:00 до 16:30</li>
                        <li className="footer__num">Воскресенье <br/> <span className="footer__span">выходной</span></li>
                    </ul>
                </motion.div>
                <motion.div custom={2} variants={textAnimation} style={{display: 'flex', columnGap: '36px'}} className="footer__icon">
                    <a className="footer__icons" href="https://www.instagram.com/reisekg/"><FaInstagram className="footer__icons"/></a>
                    <a className="footer__icons" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook className="footer__icons"/></a>
                    <a className="footer__icons" href="https://web.whatsapp.com/"><ImWhatsapp className="footer__icons"/></a>
                    <a className="footer__icons" href="https://2gis.kg/bishkek/search/%D0%B3.%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%20110%D0%B0%20%20%20%20%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B5%D1%80%D0%B8%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2%D0%B0%2C%2026?m=74.599437%2C42.865632%2F14.53"><RiRoadMapFill className="footer__icons"/></a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Footer;