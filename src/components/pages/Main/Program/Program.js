import React, {useContext} from 'react';
import {CustomContext} from "../../../../Context";

import './program.css'
import programImg from './programImage/programImg.png'
import jobImg from './programImage/jobImg.png'
import certificateImg from './programImage/certificateImg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Program = () => {
    const {tab, toggleTab, setOpen} = useContext(CustomContext);

    return (
        <section className="program" id="program">
            <div className="container">
                <div className="program__top">
                    <h2 className="program__title">Наши программы</h2>
                    <div className="program__button">
                        <button className={tab === 1 ? "program__btn program__btn_active" : "program__btn"} onClick={() => toggleTab(1)}>Летняя работа</button>
                        <button className={tab === 2 ? "program__btn program__btn_active" : "program__btn"} onClick={() => toggleTab(2)}>Годовая работа</button>
                        <button className={tab === 3 ? "program__btn program__btn_active" : "program__btn"} onClick={() => toggleTab(3)}>Ausbildung</button>
                    </div>
                </div>

                <div className={tab === 1 ? "program__tabs program__tabs_active" : "program__tabs"}>
                    <div>
                        <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                        </svg>
                        <p className="program__text">Самая любимая программа наших студентов</p>
                        <div className="program__line"/>
                        <h2 className="program__left-title">Ferienjob или Летняя работа</h2>
                    </div>
                    <div className="program__content">
                        <div className="program__left">
                            <div className="program__info">
                                        <span>
                                            <h4 className="program__h4">Условия:</h4>
                                            <p className="program__p">- Зарплата от 12 евро в час; <br/> - Проживание 250-500 евро в месяц; <br/> - Питание зависит от работодателя.</p>
                                        </span>
                                <span>
                                            <h4 className="program__h4">Требования:</h4>
                                            <p className="program__p">- Быть студентом не последнегокурса очного отделения; <br/> - Официальные летние каникулы 2-3 месяца; <br/> - Стремление учить немецкий язык.</p>
                                        </span>
                            </div>
                            <h4 className="program__h5">Перечень необходимых документов:</h4>
                        </div>
                        <div className="program__right">
                            <LazyLoadImage
                                className="program__img"
                                alt="programImg"
                                src={programImg}
                                effect="blur"
                            />
                        </div>
                    </div>
                    <div className="program__row">
                        <p className="program__p">- Паспорта (ID и загранпаспорт);</p>
                        <p className="program__p">- Фотография в электронном виде (с улыбкой);</p>
                        <p className="program__p">- Сертификат о знании немецкого языка на уровне A2-B1 (при наличии)</p>
                    </div>

                    <button className="program__btns" onClick={() => setOpen(true)}>Консультация</button>
                </div>
                <div className={tab === 2 ? "program__tabs program__tabs_active" : "program__tabs"}>
                    <section className="program__annual">
                        <div className="container">
                            <div>
                                <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                                </svg>
                                <p className="annual__text">Программа для дипломированных специалистов</p>
                                <div className="annual__line"/>
                                <h2 className="annual__left-title">Годовая работа</h2>
                            </div>
                            <div className="annual__content">
                                <div className="annual__left">
                                    <div className="annual__info">
                                                <span>
                                                    <h4 className="annual__h4">Условия:</h4>
                                                    <p className="annual__p">- Зарплата 2550 евро в месяц <br/>- Проживание 200-350 евро в месяц <br/> - Питание зависит от работодателя</p>
                                                </span>
                                        <span>
                                                    <h4 className="annual__h4">Требования:</h4>
                                                    <p className="annual__p">- Быть выпускником университета с дипломом. <br/> - Возраст 18-35 лет- Требуемый уровень В1 <br/> (Если нет знания языка <br/> - поможем выучить!</p>
                                                </span>
                                    </div>
                                    <h4 className="annual__h4">Перечень необходимых документов:</h4>
                                </div>
                                <div className="annual__right">
                                    <LazyLoadImage
                                        className="annual__img"
                                        alt="jobImg"
                                        src={jobImg}
                                        effect="blur"
                                    />
                                </div>
                            </div>
                            <div className="annual__euro">
                                <p className="program__p">- Паспорта (ID и загранпаспорт);</p>
                                <p className="program__p">- Резюме на немецком языке (Пример резюме по Europass)</p>
                                <p className="program__p">- Диплом ( с переводом на нем.язык с нотариальным заверением;</p>
                            </div>
                            <button className="program__btns" onClick={() => setOpen(true)}>Консультация</button>
                        </div>
                    </section>
                </div>
                <div className={tab === 3 ? "program__tabs program__tabs_active" : "program__tabs"}>
                    <section className="program__certificate">
                        <div className="container">
                            <div>
                                <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                                </svg>
                                <p className="certificate__text">Программа для выпусников </p>
                                <div className="certificate__line"/>
                                <h2 className="certificate__left-title">Ausbildung <span style={{color: '#FE0000', fontSize: '20px'}}>Дуальное обучение</span></h2>
                            </div>
                            <div className="certificate__content">
                                <div className="certificate__left">
                                    <div className="certificate__info">
                                        <span>
                                            <h4 className="certificate__h4">Условия:</h4>
                                            <p className="certificate__p">-Стипендия (зарплата) 1000-1100€ в месяц <br/> -Проживание 200-300€ в месяц <br/> -Питание зависит от работодателя</p>
                                        </span>
                                        <span>
                                                    <h4 className="certificate__h4">Требования:</h4>
                                                    <p className="certificate__p">-Иметь аттестат 11 класса или диплом <br/> колледжа/университета <br/> - Возраст 18-35 лет <br/> -Сертификат уровня В1 (все части) <br/> c (Deutsches Sprachdiplom/ÖSD/ <br/> Goethe-Zertifikat/TestDaF/TELC)</p>
                                                </span>
                                    </div>
                                    <h4 className="certificate__h4">Перечень необходимых документов:</h4>
                                </div>
                                <div className="certificate__right">
                                    <LazyLoadImage
                                        className="certificate__img"
                                        alt="certificateImg"
                                        src={certificateImg}
                                        effect="blur"
                                    />
                                </div>
                            </div>
                            <div className="certificate__row">
                                <p className="certificate__p">-Аттестат 11 класса или <br/>ДИПЛОМ (с переводом <br/>на нем. язык)</p>
                                <p className="certificate__p">- Паспорта <br/>(ID и загранпаспорт);</p>
                                <p className="certificate__p">- Резюме на немецком \ <br/>(пример резюме по Europass)</p>
                                <p className="certificate__p">Cертификат B1 <br/>(если его нет, то надо получить)</p>
                            </div>
                            <button className="program__btns" onClick={() => setOpen(true)}>Консультация</button>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Program;