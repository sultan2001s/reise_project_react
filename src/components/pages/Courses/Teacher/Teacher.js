import React from 'react';

import './teacher.css'
import SliderTeacher from "./SliderTeacher/SliderTeacher";

const Teacher = () => {
    return (
        <section className="teacher">
            <div className="container">
                <h1 className="teacher__title">Наши преродаватели</h1>
                <div className="teacher__content">
                    <SliderTeacher/>
                </div>
                <button className="teacher__btn">Записаться на курс</button>
            </div>
        </section>
    );
};

export default Teacher;