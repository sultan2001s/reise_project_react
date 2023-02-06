import React from 'react';

import './working.css'

const Work = () => {
    return (
        <section className="working">
            <div className="container">
                <div className="working__content">
                    <h2 className="working__title">Работа у проверенных работадателей</h2>
                    <ul className="working__list">
                        <li className="working__item"><div className="working__line"/>Europa Park</li>
                        <li className="working__item"><div className="working__line"/>McDonald’s</li>
                        <li className="working__item"><div className="working__line"/>Burger King</li>
                    </ul>
                    <ul className="work__list">
                        <li className="working__item"><div className="working__line"/>Burger</li>
                        <li className="working__item"><div className="working__line"/>Restaurant</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Work;