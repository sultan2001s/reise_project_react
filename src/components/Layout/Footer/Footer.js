import React from 'react';

import './footer.css'
import {FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__content">
                    <ul className="footer__list">
                        <h2 className="footer__title">Филиал №1</h2>
                        <li className="footer__text">г. Бишкек, ул. Ахунбаева 110а <br/> (пересекает ул. Токоналиева)</li>
                        <li className="footer__num">0709 975-311</li>
                        <li className="footer__num">0779 975-311</li>
                        <li className="footer__num">0559 975-311</li>
                    </ul>
                    <ul className="footer__list">
                        <h2 className="footer__title">Филиал №2</h2>
                        <li className="footer__text">Бишкек, ул. Керимбекова, 26 <br/> (пересечение Боконбаева/ Манаса)</li>
                        <li className="footer__num">0509 975-311</li>
                        <li className="footer__num">0999 975-311</li>
                        <li className="footer__num">0222 975-311</li>
                    </ul>
                    <ul className="footer__list">
                        <h2 className="footer__title">График работы</h2>
                        <li className="footer__text">с понедельника по пятницу <br/> с 09:00 до 18:00</li>
                        <li className="footer__num">Суббота <br/> с 09:00 до 16:30</li>
                        <li className="footer__num">Воскресенье <br/> <span className="footer__span">выходной</span></li>
                    </ul>
                </div>
                <div className="footer__icon"><FaInstagram className="footer__icons"/><p className="footer__link">@reisekg</p></div>
            </div>
        </section>
    );
};

export default Footer;