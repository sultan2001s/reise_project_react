import React, {useState} from 'react';
import {motion} from "framer-motion"
import {NavLink, Link} from "react-router-dom";
import InputMask from 'react-input-mask'

import './header.css'

import logo from '../../images/logo.png'
import Job from "../../pages/Job/Job";

const textAnimation = {
    hidden: {
        x: -20,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transaction: {delay: custom * 0.2},
    })
};

const Header = () => {
    const [burger, setBurger] = useState(false);
    const [open, setOpen] = useState(false);
    const [openJob, setOpenJob] = useState(false);

    const closeOverlay = (e) => {
        if (e.target.classList.contains('overlay')) {
            setOpen(false)
        }
    };

    return (

        <motion.header className="header" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.nav  custom={1} variants={textAnimation} className="header__nav">
                    <Link to='/'><img className="header__img" src={logo} alt="logo"/></Link>
                    <ul className={`header__list ${burger ? 'header__list_active' : ''}`}>
                        <NavLink to='/' className="header__link">На главную</NavLink>
                        <div onClick={() => setOpenJob(!openJob)} className={`header__bg ${openJob ? 'header__bg_active' : ''}`}>
                            <li className="header__link1">Работа</li>
                        </div>
                        <li className="header__link"><a href="#certificate" className="header__link">Учеба</a></li>
                        <li onClick={() => setOpen(true)} className="header__link">Консультация</li>
                        <NavLink to='/company' className="header__link">О компании</NavLink>
                        <NavLink to='/courses' className="header__link">Курсы</NavLink>
                    </ul>
                    <div onClick={() => setBurger(!burger)} className={`header__burger ${burger ? 'header__burger_active' : ''}`}>
                        <span className="header__burger-line"/>
                    </div>
                </motion.nav>
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
                                    <InputMask className="overlay__input" type="tel" mask={`+\\9\\96(999)99-99-99`} placeholder="+996554678954"/>
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
            {
                openJob &&  <Job/>
            }
        </motion.header>
    );
};

export default Header;