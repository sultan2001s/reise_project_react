import React from 'react';
import {motion} from "framer-motion";
import {FaInstagram, FaFacebook} from "react-icons/fa";
import { ImWhatsapp } from 'react-icons/im';

import './teacher.css'
import teacher from '../../../images/teacher.png'

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


const Teacher = () => {
    return (
        <motion.section className="teacher" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.div className="teacher__content" custom={1} variants={textAnimation}>
                    <div className="teacher__left">
                        <h1 className="teacher__title">Вы преподаватель немецкого? <br/> У Вас есть сертификат уровня В2 и выше?</h1>
                        <p className="teacher__text">Мы ждем Вас в наш дружный коллектив.</p>
                        <p className="teacher__text" style={{display: 'flex', columnGap: '21px', alignItems: 'center'}}>Записывайтесь на собеседование по номеру <a className="teacher__num" href="tel:+996 707 975 311">+996 707 975 311</a></p>
                        <p className="teacher__text" style={{display: 'flex', columnGap: '21px', alignItems: 'center'}}>Также Вы можете написать нам в социальных сетях <div className="teacher__icons"><a className="teacher__icon" href="https://www.instagram.com/reisekg/"><FaInstagram/></a> <a className="teacher__icon" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a> <a className="teacher__icon" href="https://web.whatsapp.com/"><ImWhatsapp/></a></div></p>
                        <p className="teacher__text">Mit Freundlichen Grüßen,</p>
                        <h3 className="teacher__h3">Reise Team</h3>
                    </div>
                    <div className="teacher__right">
                        <img className="teacher__img" src={teacher} alt="teacher"/>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Teacher;