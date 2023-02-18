import React from 'react';
import {motion} from "framer-motion";

import './faces.css'
import SliderFaces from "./SliderFaces/SliderFaces";

import facesBgr from '../../../images/facesBgr.png'

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

const Faces = () => {
    return (
        <>
            <motion.section className="faces" initial="hidden" whileInView="visible">
                <div className="container">
                    <motion.h1 custom={1} variants={textAnimation} className="faces__title">Reise в лицах</motion.h1>
                    <motion.div custom={1} variants={textAnimation} className="faces__block">
                        <SliderFaces/>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section>
                <motion.div custom={1} variants={textAnimation} className="container" initial="hidden" whileInView="visible">
                    <img className="faces__bgr" src={facesBgr} alt="facesBgr"/>
                </motion.div>
            </motion.section>
        </>
    );
};

export default Faces;