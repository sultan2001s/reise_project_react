import React from 'react';
import {motion} from "framer-motion";

import './paris.css'
import parisImg from '../../../images/parisImg.png'

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

const Paris = () => {
    return (
        <motion.section className="paris" initial="hidden" whileInView="visible">
            <div className="container">
                <motion.div custom={1} variants={textAnimation} className="paris__content">
                    <div className="paris__left">
                        <p className="paris__text">С работадателями мы всегда на связи. В прошлом году мы <br/> посещали Europa Park, чтобы посмотреть условия работы <br/> и учебы. Также решить проблемы задержки документов.</p>
                        <p className="paris__text">Europa-Park — крупнейший парк развлечений в Германии и <br/> второй по посещаемости парк развлечений в Европе после <br/> Диснейленда в Париже. Находится в городке Руст в <br/> федеральной земле Баден-Вюртемберг на юго-западе <br/> Германии. Был открыт в 1975 году,</p>
                        <button className="paris__btn">Узнать больше</button>
                    </div>
                    <div className="paris__right">
                        <img className="paris__img" src={parisImg} alt="parisImg"/>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Paris;