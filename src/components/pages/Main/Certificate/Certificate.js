import React from 'react';
import {motion} from "framer-motion"

import './certificate.css'
import certificateImg from "../../../images/certificateImg.png";

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


const Certificate = () => {
    return (
        <>
            <motion.section className="certificate" id="certificate" initial="hidden" whileInView="visible">
                <div className="container">
                    <motion.div custom={1} variants={textAnimation}>
                        <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                        </svg>
                        <p className="certificate__text">Программа для выпусников </p>
                        <div className="certificate__line"/>
                        <h2 className="certificate__left-title">Ausbildung</h2>
                    </motion.div>
                    <motion.div custom={1} variants={textAnimation} className="certificate__content">
                        <div className="certificate__left">

                            <div className="certificate__info">
                            <span>
                                <h4 className="certificate__h4">Условия:</h4>
                                <p className="certificate__p">
                                    -Стипендия (зарплата) 1000-1100€ в месяц <br/>
                                    -Проживание 200-300€ в месяц <br/>
                                    -Питание зависит от работодателя
                                </p>
                            </span>
                                <span>
                                <h4 className="certificate__h4">Требования:</h4>
                                <p className="certificate__p">
                                    -Иметь аттестат 11 класса или диплом <br/>
                                    колледжа/университета <br/>
                                    - Возраст 18-35 лет <br/>
                                    -Сертификат уровня В1 (все части) <br/>
                                    c (Deutsches Sprachdiplom/ÖSD/ <br/>
                                    Goethe-Zertifikat/TestDaF/TELC)
                                </p>
                            </span>
                            </div>
                            <h4 className="certificate__h4">Перечень необходимых документов:</h4>
                        </div>
                        <div className="certificate__right">
                            <img className="certificate__img" src={certificateImg} alt="certificateImg"/>
                        </div>
                    </motion.div>
                    <motion.div custom={1} variants={textAnimation} className="certificate__row">
                        <p className="certificate__p">-Аттестат 11 класса или <br/>ДИПЛОМ (с переводом <br/>на нем. язык)</p>
                        <p className="certificate__p">- Паспорта <br/>(ID и загранпаспорт);</p>
                        <p className="certificate__p">- Резюме на немецком \ <br/>(пример резюме по Europass)</p>
                        <p className="certificate__p">Cертификат B1 <br/>(если его нет, то надо получить)</p>
                    </motion.div>
                    <motion.div custom={1} variants={textAnimation} className="certificate__block">
                        <div>
                            <h3 className="certificate__h3">Обучение подходит по специальностям</h3>
                            <ul>
                                <li className="certificate__list"><div className="certificate__radius"/>Fachmann/Frau für Systemgastronomie (эксперт в сфере обслуживания)</li>
                                <li className="certificate__list"><div className="certificate__radius"/>Restaurantfachfrau/Mann (эксперт по Ресторанному делу)</li>
                                <li className="certificate__list"><div className="certificate__radius"/>Hotelfachmann/Frau (эксперт по отельному делу)</li>
                                <li className="certificate__list"><div className="certificate__radius"/>Fachkraft im Gastgewerbe (эксперт в сфере гостеприимства)</li>
                                <li className="certificate__list"><div className="certificate__radius"/>Koch/in (повар)</li>
                                <li className="certificate__list"><div className="certificate__radius"/>Косметология</li>
                            </ul>
                        </div>
                        <div className="certificate__block-radius">
                            <h2 className="certificate__block-title">Как будет проходить <br/> обучение?</h2>
                            <p className="certificate__block-text">
                                Обучение дуальное, Вы получаете <br/>
                                теорию и практикуетесь на рабочем <br/>
                                месте.
                            </p>
                            <p className="certificate__block-text">
                                Теория занимает примерно одну <br/>
                                неделю в месяц, но бывает, <br/>
                                что вы месяц учитесь, а пол года <br/>
                                работаете.
                            </p>
                            <p className="certificate__block-text">Это зависит от работадателя</p>
                        </div>
                    </motion.div>
                    <motion.button custom={1} variants={textAnimation} className="certificate__btns">Консультация</motion.button>
                </div>
            </motion.section>
        </>
    );
};

export default Certificate;