import React, {useState} from 'react';

import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

import './main.css'
import './overlay.css'
import Course from "./Course/Course";
import Program from "./Program/Program";
import Work from "./Work/Work";
import Annual from "./Annual/Annual";
import Official from "./Official/Official";
import Certificate from "./Certificate/Certificate";


const Main = () => {
    const [open, setOpen] = useState(false);

    const closeOverlay = (e) => {
        if (e.target.classList.contains('overlay')) {
            setOpen(false)
        }
    };

    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="main__content">
                        <div className="main__left">
                            <h2 className="main__title">Все мечты сбываются с Reise!</h2>
                            <p className="main__text">Работай, учись и путешествуй вместе с нами</p>
                            <button onClick={() => setOpen(true)} className="main__btn">Консультация</button>
                        </div>
                        <ul className="main__icons">
                            <li className="main__icon"><FaInstagram/></li>
                            <li className="main__icon"><FaTelegram/></li>
                            <li className="main__icon"><ImWhatsapp/></li>
                            <li className="main__icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.75 4.58337H6.25004C5.80801 4.58337 5.38409 4.75897 5.07153 5.07153C4.75897 5.38409 4.58337 5.80801 4.58337 6.25004V33.75C4.58337 34.1921 4.75897 34.616 5.07153 34.9286C5.38409 35.2411 5.80801 35.4167 6.25004 35.4167H33.75C34.1921 35.4167 34.616 35.2411 34.9286 34.9286C35.2411 34.616 35.4167 34.1921 35.4167 33.75V6.25004C35.4167 5.80801 35.2411 5.38409 34.9286 5.07153C34.616 4.75897 34.1921 4.58337 33.75 4.58337Z" stroke="#1E005A" />
                                <path d="M21.315 30.1183C21.2817 26.1274 22.2009 22.83 27.2167 23.0366C34.3717 4.80245 5.19671 5.49745 12.9734 22.9283C15.3317 22.7816 19.2409 24.1858 18.5734 30.5499M35.4167 27.8991L4.58337 32.7525M4.58337 9.19995L14.8709 11.1083M26.9625 12.9416L35.4167 14.1758" stroke="#1E005A"/>
                            </svg></li>
                            <li className="main__icon main__number">+996 779 975 311</li>
                            <li className="main__icon main__number">+996 559 975 311</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Course/>
            <Program/>
            <Work/>
            <Annual/>
            <Official/>
            <Certificate/>
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
        </>
    );
};

export default Main;