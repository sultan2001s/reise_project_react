import React, {useState} from 'react';

import './course.css'

import SliderCourse from "./SliderCourse/SliderCourse";

const Course = () => {
    const [open, setOpen] = useState(false);

    const closeOverlay = (e) => {
        if (e.target.classList.contains('overlay')) {
            setOpen(false)
        }
    };
    return (
        <section className="course">
            <div className="container">
                <div className="course__top">
                    <h2 className="course__title">Актуальные события </h2>
                    <p className="course__text">Здесь будут свежие предложения</p>
                </div>
                <div className="course__row">
                    <SliderCourse/>
                </div>
                <button onClick={() => setOpen(true)} className="course__btn">Консультация</button>
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
        </section>
    );
};

export default Course;