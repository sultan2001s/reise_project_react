import React from 'react';
import {motion} from "framer-motion"

import './album.css'
import PhotoSlider from "./PhotoSlider/PhotoSlider";

const textAnimation = {
    hidden: {
        x: -40,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transaction: {delay: custom * 0.2},
    })
};

const PhotoAlbum = () => {
    return (
        <motion.section className="album" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.h1  custom={1} variants={textAnimation} className="album__title">Наш фотоальбом</motion.h1>
                <motion.p  custom={1} variants={textAnimation} className="album__text">Тут мы собираем фотографии наших студентов, работников. <br/> И надеемся, что скоро тут появится Ваша фотография.</motion.p>
                <motion.div  custom={1} variants={textAnimation} className="album__card">
                    <PhotoSlider/>
                </motion.div>
                <motion.p  custom={1} variants={textAnimation} className="album__text">Мы очень счастливы видеть, как Вы путешествуете, улыбаетесь. <br/> Это лучшая награда.</motion.p>
            </div>
        </motion.section>
    );
};

export default PhotoAlbum;