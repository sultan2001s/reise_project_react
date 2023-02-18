import React from 'react';

import './job.css'
const Job = ({burger}) => {

    return (
        <div className={`dropDown ${burger ? 'header__list_active' : ''}`}>
            <ul className="job__list">
                <li className="job__item"><a href="#program" className="job__item">Летняя работа (Ferienjob)</a></li>
                <li className="job__item"><a href="#annual" className="job__item">Годовая работа</a></li>
            </ul>
        </div>
    );
};

export default Job;