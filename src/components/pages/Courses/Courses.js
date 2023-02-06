import React from 'react';

import './courses.css'
import {FaInstagram, FaTelegram} from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im";
import Deutsch from "./Deutsch/Deutsch";
import Saturday from "./Saturday/Saturday";
import Teacher from "./Teacher/Teacher";

const Courses = () => {
    return (
        <>
            <section className="courses">
                <div className="container">
                    <div className="courses__content">
                        <div className="courses__left">
                            <h2 className="courses__title">Курсы немецкого языка от Reise</h2>
                            <p className="courses__text">С лучшими преподавателями от А1 до С1</p>
                            <button className="courses__btn">Записаться на курс</button>
                        </div>
                        <ul className="main__icons">
                            <li className="main__icon"><FaInstagram/></li>
                            <li className="main__icon"><FaTelegram/></li>
                            <li className="main__icon"><ImWhatsapp/></li>
                            <li className="main__icon"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.75 4.58337H6.25004C5.80801 4.58337 5.38409 4.75897 5.07153 5.07153C4.75897 5.38409 4.58337 5.80801 4.58337 6.25004V33.75C4.58337 34.1921 4.75897 34.616 5.07153 34.9286C5.38409 35.2411 5.80801 35.4167 6.25004 35.4167H33.75C34.1921 35.4167 34.616 35.2411 34.9286 34.9286C35.2411 34.616 35.4167 34.1921 35.4167 33.75V6.25004C35.4167 5.80801 35.2411 5.38409 34.9286 5.07153C34.616 4.75897 34.1921 4.58337 33.75 4.58337Z" stroke="#1E005A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.315 30.1183C21.2817 26.1274 22.2009 22.83 27.2167 23.0366C34.3717 4.80245 5.19671 5.49745 12.9734 22.9283C15.3317 22.7816 19.2409 24.1858 18.5734 30.5499M35.4167 27.8991L4.58337 32.7525M4.58337 9.19995L14.8709 11.1083M26.9625 12.9416L35.4167 14.1758" stroke="#1E005A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></li>
                            <li className="main__icon main__number">+996 779 975 311</li>
                            <li className="main__icon main__number">+996 559 975 311</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Deutsch/>
            <Saturday/>
            <Teacher/>
        </>
    );
};

export default Courses;