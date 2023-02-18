import React from 'react';
import {motion} from "framer-motion"

import cart from '../../../images/cart.png'
import cart2 from '../../../images/cart2.png'
import cart3 from '../../../images/cart3.png'

import './official.css'

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


const Official = () => {
    return (
        <motion.section className="official" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.h2  custom={1} variants={textAnimation} className="official__title">Приемущества</motion.h2>
                <motion.div  custom={1} variants={textAnimation} className="official__card">
                    <img className="official__img" src={cart} alt="cart"/>
                    <img className="official__img2" src={cart2} alt="cart"/>
                    <img className="official__img3" src={cart3} alt="cart"/>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Official;