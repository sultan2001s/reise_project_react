import React, {useState, useContext} from 'react';
import {CustomContext} from "../../../Context";
import {NavLink, Link} from "react-router-dom";

import './header.css'

import logo from './logo.png'
import Job from "../../pages/Job/Job";
import Overlay from "../../pages/Overlay/Overlay";

const Header = () => {
    const {user} = useContext(CustomContext);
    const [burger, setBurger] = useState(false);
    const {setOpen, openJob, setOpenJob} = useContext(CustomContext);

    return (

        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to='/'><img className="header__img" src={logo} alt="logo"/></Link>
                    <ul className={`header__list ${burger ? 'header__list_active' : ''}`}>
                        <NavLink to='/' className="header__link">На главную</NavLink>
                        <div onClick={() => setOpenJob(!openJob)} className={`header__bg ${openJob ? 'header__bg_active' : ''}`}>
                            <li className="header__link1">Работа</li>
                        </div>
                        <li className="header__link"><a href="#certificate" className="header__link">Учеба</a></li>
                        <li onClick={() => setOpen(!openJob)} className="header__link">Консультация</li>
                        <NavLink to='/company' className="header__link">О компании</NavLink>
                        <NavLink to='/courses' className="header__link">Курсы</NavLink>
                        <li className="header__link">
                            {
                                user.login.length
                                    ? <Link to='/admin' className="header__link">Администратор</Link>
                                    : <Link to='/login' className="header__link">Войти</Link>
                            }
                        </li>
                    </ul>
                    <div onClick={() => setBurger(!burger)} className={`header__burger ${burger ? 'header__burger_active' : ''}`}>
                        <span className="header__burger-line"/>
                    </div>
                </nav>
            </div>


            {
                openJob &&  <Job/>
            }
            <Overlay/>
        </header>
    );
};

export default Header;