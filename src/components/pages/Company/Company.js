import React from 'react';
import {motion} from "framer-motion"

import './company.css'

import {FaInstagram, FaFacebook} from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im";
import {RiRoadMapFill} from "react-icons/ri";
import {useState} from "react";
import License from "./License/License";
import Client from "./Client/Client";
import Faces from "./Faces/Faces";
import Paris from "./Paris/Paris";
import Reviews from "./Reviews/Reviews";

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


const Company = () => {
    const [open, setOpen] = useState(false);

    const closeOverlay = (e) => {
        if (e.target.classList.contains('overlay')) {
            setOpen(false)
        }
    };

    return (
        <>
            <motion.section className="company" initial="hidden" whileInView="visible">
                <div className="container">
                    <div className="company__content">
                        <div className="company__left">
                            <motion.h1 custom={1} variants={textAnimation} className="company__title">Мы компания, которая <br/> открывает дверь в Европу</motion.h1>
                            <motion.button custom={2} variants={textAnimation} onClick={() => setOpen(true)} className="company__btn">Консультация</motion.button>
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
                {
                    open && (
                        <div onClick={closeOverlay} className={`overlay ${open ? 'overlay_active' : ''}`} >
                            <div className="overlay__popup">
                                <h2 className="overlay__title">Получить консультацию</h2>
                                <p className="overlay__text">Заполните эти поля, что бы мы смогли Вам помочь</p>
                                <form className="overlay__row">
                                    <label className="overlay__label">
                                        <span style={{color: 'white', paddingLeft: '23px'}}>Имя</span>
                                        <input className="overlay__input" type="text" placeholder="Имя"/>
                                    </label>
                                    <label className="overlay__label">
                                        <span style={{color: 'white', paddingLeft: '23px'}}>Фамилия</span>
                                        <input className="overlay__input" type="text" placeholder="Фамилия"/>
                                    </label>
                                    <label className="overlay__label">
                                        <span style={{color: 'white', paddingLeft: '23px'}}>Instagram</span>
                                        <input className="overlay__input" type="text" placeholder="@aiperi_3452"/>
                                    </label>
                                    <label className="overlay__label">
                                        <span style={{color: 'white', paddingLeft: '23px'}}>Номер</span>
                                        <input className="overlay__input" type="number" placeholder="+996554678954"/>
                                    </label>
                                    <label className="overlay__label">
                                        <span style={{color: 'white', paddingLeft: '23px'}}>Ваш вопрос</span>
                                        <textarea className="overlay__input2" placeholder="Ваш вопрос" />
                                    </label>
                                    <div className="overlay__school">
                                        <h3 className="overlay__h3">Выберите, кем Вы являетесь сейчас?</h3>
                                        <label className="overlay__label2">
                                            <input style={{width: '20px', height: '20px'}} type="checkbox" name="" id=""/>
                                            <span style={{color: 'white'}}>Закончил\а школу</span>
                                        </label>
                                        <label className="overlay__label2">
                                            <input style={{width: '20px', height: '20px'}} type="checkbox" name="" id=""/>
                                            <span style={{color: 'white'}}>Учусь в университете</span>
                                        </label>
                                        <label className="overlay__label2">
                                            <input style={{width: '20px', height: '20px'}} type="checkbox" name="" id=""/>
                                            <span style={{color: 'white'}}>Закончил\а университет</span>
                                        </label>
                                    </div>
                                </form>
                                <button className="overlay__btn">Отправить запрос</button>
                            </div>
                        </div>
                    )
                }
            </motion.section>
            <License/>
            <Faces/>
            <Client/>
            <Paris/>
            <Reviews/>
        </>
    );
};

export default Company;