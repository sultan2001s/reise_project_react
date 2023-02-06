import React from 'react';

import programImg from '../../../images/programImg.png'

import './program.css'

const Program = () => {
    return (
        <section className="program">
            <div className="container">
                <div className="program__top">
                    <h2 className="program__title">Наши программы </h2>
                    <div className="program__button">
                        <button className="program__btn">Летняя работа</button>
                        <button className="program__btn">Годовая работа</button>
                        <button className="program__btn">Ausbildung</button>
                    </div>
                </div>
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
                </div>
                <div className="program__row">
                    <p className="program__p">- Паспорта <br/>(ID и загранпаспорт);</p>
                    <p className="program__p">- Фотография <br/>в электронном виде (с улыбкой);</p>
                    <p className="program__p">- Сертификат о знании <br/>немецкого языка на уровне A2-B1 (при наличии)</p>
                </div>
                <button className="program__btns">Консультация</button>
            </div>
        </section>
    );
};

export default Program;