import React from 'react';
import {motion} from "framer-motion";

import './client.css'

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

const Client = () => {
    return (
        <motion.section initial="hidden" whileInView="visible" className="client">
            <div className="container">
                <motion.div custom={1} variants={textAnimation} className="client__content">
                    <div>
                        <p className="client__text">более </p>
                        <h1 className="client__title">10</h1>
                        <p className="client__text">Работадателей</p>
                    </div>
                    <div>
                        <p className="client__text">более </p>
                        <h1 className="client__title">400</h1>
                        <p className="client__text">Счастливых клиентов</p>
                    </div>
                    <div>
                        <p className="client__text">более </p>
                        <h1 className="client__title">20</h1>
                        <p className="client__text">Вакансий</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Client;