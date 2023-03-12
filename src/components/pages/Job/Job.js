import React, {useContext} from 'react';

import './job.css'
import {CustomContext} from "../../../Context";
const Job = ({burger}) => {
    const {setOpenJob} = useContext(CustomContext);

    return (
        <div className={`dropDown ${burger ? 'header__list_active' : ''}`}>
            <ul className="job__list">
                <li onClick={() => setOpenJob(false)} className="job__item"><a href="#program" className="job__item">Летняя работа (Ferienjob)</a></li>
                <li onClick={() => setOpenJob(false)} className="job__item"><a href="#annual" className="job__item">Годовая работа</a></li>
            </ul>
        </div>
    );
};

export default Job;