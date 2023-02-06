import React from 'react';
import jobImg from "../../../images/jobImg.png";

import './annual.css'

const Annual = () => {
    return (
        <>
            <section className="annual">
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
                    </div>
                    <div className="annual__euro">
                        <p className="program__p">- Резюме на немецком языке <br/> (Пример резюме по Europass)</p>
                        <p className="program__p">- Паспорта <br/>(ID, загранпаспорт);</p>
                        <p className="program__p">- Диплом ( с переводом <br/>на нем.язык с нотариальным заверением;</p>
                    </div>
                </div>
            </section>

            <section className="diploma">
                <div className="container">
                    <h2 className="diploma__title">Требуется диплом по специальностям:</h2>
                    <div className="diploma__content">
                        <ul className="diploma__list">
                            <li className="diploma__item"><div className="diploma__line"/>Строительство (все отрасли)</li>
                            <li className="diploma__item"><div className="diploma__line"/>IT</li>
                            <li className="diploma__item"><div className="diploma__line"/>Туризм / Международный туризм</li>
                            <li className="diploma__item"><div className="diploma__line"/>Экономика</li>
                            <li className="diploma__item"><div className="diploma__line"/>Пищевая инженерия</li>
                            <li className="diploma__item"><div className="diploma__line"/>Германистика</li>
                        </ul>
                        <ul className="diploma__list">
                            <li className="diploma__item"><div className="diploma__line"/>Технология продукции и организация <br/> общественного питани</li>
                            <li className="diploma__item"><div className="diploma__line"/>Гостиничное дело</li>
                            <li className="diploma__item"><div className="diploma__line"/>Управление бизнесом</li>
                            <li className="diploma__item"><div className="diploma__line"/>Управление на предприятии</li>
                            <li className="diploma__item"><div className="diploma__line"/>Лингвистика (немецкий язык)</li>
                        </ul>
                        <ul className="diploma__list">
                            <li className="diploma__item"><div className="diploma__line"/>Менеджмент</li>
                            <li className="diploma__item"><div className="diploma__line"/>Менеджмент туризма и гостиничного дела</li>
                            <li className="diploma__item"><div className="diploma__line"/>Туристический бизнес и служба гидов</li>
                            <li className="diploma__item"><div className="diploma__line"/>Филология немецкого языка</li>
                            <li className="diploma__item"><div className="diploma__line"/>Ресторанное дело и искусство кулинарииа</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Annual;