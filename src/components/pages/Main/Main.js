import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { RiRoadMapFill } from 'react-icons/ri';

import './main.css'

import Course from "./Course/Course";
import Program from "./Program/Program";
import Work from "./Work/Work";
import Annual from "./Annual/Annual";
import Official from "./Official/Official";
import Certificate from "./Certificate/Certificate";
import PhotoAlbum from "./PhotoAlbum/PhotoAlbum";
import Overlay from "../Overlay/Overlay";


const Main = () => {
    const {setOpen} = useContext(CustomContext);

    return (
        <>
            <section className="main" >
                <div className="container">
                    <div className="main__content">
                        <div className="main__left">
                            <h2 className="main__title">Все мечты сбываются с Reise!</h2>
                            <p className="main__text">Работай, учись и путешествуй вместе с нами</p>
                            <button onClick={() => setOpen(true)} className="main__btn">Консультация</button>
                        </div>
                        <ul className="main__icons">
                            <li className="main__icon"><a className="main__icon" href="https://www.instagram.com/reisekg/"><FaInstagram/></a></li>
                            <li className="main__icon"><a className="main__icon" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></li>
                            <li className="main__icon"><a href="https://web.whatsapp.com/"><ImWhatsapp/></a></li>
                            <li className="main__icon"><a href="https://2gis.kg/bishkek/search/%D0%B3.%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%90%D1%85%D1%83%D0%BD%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%20110%D0%B0%20%20%20%20%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B5%D1%80%D0%B8%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2%D0%B0%2C%2026?m=74.599437%2C42.865632%2F14.53"><RiRoadMapFill/></a></li>
                            <li className="main__icon"><a href="tel:+996 779 975 311" className="main__icon main__number">+996 779 975 311</a></li>
                            <li className="main__icon"><a href="tel:+996 559 975 311" className="main__icon main__number">+996 559 975 311</a></li>
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
            <PhotoAlbum/>
            <Overlay/>
        </>
    );
};

export default Main;