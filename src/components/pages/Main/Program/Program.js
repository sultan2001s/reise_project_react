import React, {useState} from 'react';
import {motion} from "framer-motion"

import programImg from '../../../images/programImg.png'

import './program.css'
import jobImg from "../../../images/jobImg.png";

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

const Program = () => {
    const [click, setClick] = useState(3);

    return (
        <motion.section className="program" id="program" initial="hidden" whileInView="visible">
            <div className="container">
                <div className="program__top">
                    <motion.h2 custom={1} variants={textAnimation} className="program__title">Наши программы </motion.h2>
                    <motion.div className="program__button"custom={2} variants={textAnimation}>
                        <button onClick={() => setClick(1)} className="program__btn">Летняя работа</button>
                        <button onClick={() => setClick(2)} className="program__btn">Годовая работа</button>
                        <button onClick={() => setClick(3)} className="program__btn">Ausbildung</button>
                    </motion.div>
                </div>

                {
                    click === 3 ?
                        <div>
                            <motion.div  custom={1} variants={textAnimation}>
                                <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                                </svg>
                                <p className="program__text">Самая любимая программа наших студентов</p>
                                <div className="program__line"/>
                                <h2 className="program__left-title">Ferienjob или Летняя работа</h2>
                            </motion.div>
                            <motion.div  custom={1} variants={textAnimation} className="program__content">
                                <div className="program__left">

                                    <div className="program__info">
                            <span>
                                <h4 className="program__h4">Условия:</h4>
                                <p className="program__p">
                                    - Зарплата от 12 евро в час; <br/>
                                    - Проживание 250-500 евро в месяц; <br/>
                                    - Питание зависит от работодателя.
                                </p>
                            </span>
                                        <span>
                                <h4 className="program__h4">Требования:</h4>
                                <p className="program__p">
                                    - Быть студентом не последнего <br/>
                                    курса очного отделения; <br/>
                                    - Официальные летние каникулы 2-3 месяца;<br/>
                                    - Стремление учить немецкий язык.
                                </p>
                            </span>
                                    </div>
                                    <h4 className="program__h5">Перечень необходимых документов:</h4>
                                </div>
                                <div className="program__right">
                                    <img className="program__img" src={programImg} alt="programImg"/>
                                </div>
                            </motion.div>
                            <motion.div  custom={1} variants={textAnimation} className="program__row">
                                <p className="program__p">- Паспорта <br/>(ID и загранпаспорт);</p>
                                <p className="program__p">- Фотография <br/>в электронном виде (с улыбкой);</p>
                                <p className="program__p">- Сертификат о знании <br/>немецкого языка на уровне A2-B1 (при наличии)</p>
                            </motion.div>
                            <motion.button  custom={1} variants={textAnimation} className="program__btns">Консультация</motion.button>
                        </div> :

                        <motion.section className="annual" id="annual" initial="hidden" whileInView="visible">
                            <div className="container">
                                <motion.div custom={1} variants={textAnimation}>
                                    <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                                    </svg>
                                    <p className="annual__text">Программа для дипломированных специалистов</p>
                                    <div className="annual__line"/>
                                    <h2 className="annual__left-title">Годовая работа</h2>
                                </motion.div>
                                <motion.div custom={1} variants={textAnimation} className="annual__content">
                                    <div className="annual__left">

                                        <div className="annual__info">
                            <span>
                                <h4 className="annual__h4">Условия:</h4>
                                <p className="annual__p">
                                    - Зарплата 2550 евро в месяц <br/>
                                    - Проживание 200-350 евро в месяц <br/>
                                    - Питание зависит от работодателя
                                </p>
                            </span>
                                            <span>
                                <h4 className="annual__h4">Требования:</h4>
                                <p className="annual__p">
                                   - Быть выпускником университета с дипломом. <br/>
                                    - Возраст 18-35 лет <br/>
                                    - Требуемый уровень В1 <br/>
                                    (Если нет знания языка - поможем выучить!
                                </p>
                            </span>
                                        </div>
                                        <h4 className="annual__h4">Перечень необходимых документов:</h4>
                                    </div>
                                    <div className="annual__right">
                                        <img className="annual__img" src={jobImg} alt="jobImg"/>
                                    </div>
                                </motion.div>
                                <motion.div custom={1} variants={textAnimation} className="annual__euro">
                                    <p className="program__p">- Резюме на немецком языке <br/> (Пример резюме по Europass)</p>
                                    <p className="program__p">- Паспорта <br/>(ID, загранпаспорт);</p>
                                    <p className="program__p">- Диплом ( с переводом <br/>на нем.язык с нотариальным заверением;</p>
                                </motion.div>
                            </div>
                        </motion.section>
                }

            </div>
        </motion.section>
    );
};

export default Program;