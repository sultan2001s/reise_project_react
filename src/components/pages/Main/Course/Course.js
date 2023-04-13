import React, {useEffect, useState} from 'react';
import {Gallery} from 'react-photoswipe-gallery'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

import './course.css'

import Overlay from "../../Overlay/Overlay";

import SliderCourse from "./SliderCourse/SliderCourse";


const Course = () => {
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     AOS.init({duration: 2000});
    // }, []);

    return (
        <section className="course active">
            <div className="container">
                <div className="course__top">
                    <h2 className="course__title">Актуальные события </h2>
                </div>
                <div className="course__row" data-aos="flip-down">
                    <Gallery>
                        <SliderCourse/>
                    </Gallery>
                </div>
                <button onClick={() => setOpen(true)} className="course__btn">Консультация</button>
            </div>
            <Overlay overlayActive={open} setOverlayActive={setOpen}/>
        </section>
    );
};

export default Course;