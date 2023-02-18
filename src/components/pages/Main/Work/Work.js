import React from 'react';
import {motion} from 'framer-motion'

import './work.css'
import WorkSlider from "./WorkSlider/WorkSlider";

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

const Work = () => {
    return (
        <>
            <motion.section className="work" initial="hidden" whileInView="visible">
                <div className="container">
                    <motion.div custom={1} variants={textAnimation} className="work__content">
                        <h2 className="work__title">Работа у проверенных работадателей</h2>
                        <ul className="work__list">
                            <li className="work__item"><div className="work__line"/>Europa Park</li>
                            <li className="work__item"><div className="work__line"/>McDonald’s</li>
                            <li className="work__item"><div className="work__line"/>Burger King</li>
                        </ul>
                        <ul className="work__list">
                            <li className="work__item"><div className="work__line"/>Burger</li>
                            <li className="work__item"><div className="work__line"/>Restaurant</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section className="img" initial="hidden" whileInView="visible">
                <div className="container">
                    <motion.div custom={1} variants={textAnimation} className="img__row">
                        <WorkSlider/>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default Work;