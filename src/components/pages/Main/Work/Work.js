import React from 'react';

import './work.css'
import WorkSlider from "./WorkSlider/WorkSlider";


const Work = () => {
    return (
        <>
            <section className="work">
                <div className="container">
                    <div className="work__content">
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
                    </div>
                </div>
            </section>

            <section className="img">
                <div className="container">
                    <div className="img__row">
                        <WorkSlider/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;