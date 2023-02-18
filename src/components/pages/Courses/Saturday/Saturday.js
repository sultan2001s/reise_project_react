import React from 'react';
import {motion} from "framer-motion";

import './saturday.css'
import {FaInstagram} from "react-icons/fa";

import saturdayImg from '../../../images/saturdayImg.png'

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

const Saturday = () => {
    return (
        <motion.section className="saturday" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.div custom={1} variants={textAnimation} className="saturday__content">
                    <div className="saturday__left">
                        <h2 className="deutsch__title">Sprechen каждую субботу</h2>
                        <p className="saturday__text">
                            Мы проводим разговорный клуб, <br/>
                            на котором можно практиковать свой немецкий язык.
                        </p>
                        <p className="saturday__text">
                            Каждый раз не похож на прошлый, преподаватели <br/>
                            готовят игры, викторины, презентации, которые <br/>
                            дают возможность поговорить на разные темы.
                        </p>
                        <p className="saturday__p">Когда следующий?</p>
                        <p className="saturday__p">Кто будет вести его?</p>
                        <p className="saturday__p">Где посмотреть, как прошел прошлый клуб?</p>
                        <div className="saturday__button">
                            <button className="saturday__btn"><FaInstagram style={{color: '#FE0000'}}/>@reisekg</button>
                        </div>
                        <p className="saturday__text">
                            Ответы можно найти здесь, наши менеджера выкладывают <br/>
                            все самое актуальное про курсы и не только!
                        </p>
                    </div>
                    <div className="saturday__right">
                        <img className="saturday__img" src={saturdayImg} alt="saturdayImg"/>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Saturday;