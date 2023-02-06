import React from 'react';

import './job.css'
const Job = (setOpenJob) => {
    const closeJob = (e) => {
        if (e.target.classList.contains('dropDown')) {
            setOpenJob(false)
        }
    };

    return (
        <div onClick={closeJob} className="dropDown">
            <ul className="job__list">
                <li className="job__item">Летняя работа (Ferienjob)</li>
                <li className="job__item">Годовая работа</li>
            </ul>
        </div>
    );
};

export default Job;