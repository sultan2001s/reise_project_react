import React from 'react';

import './faces.css'
import SliderFaces from "./SliderFaces/SliderFaces";

import facesBgr from '../../../images/facesBgr.png'

const Faces = () => {
    return (
        <>
            <section className="faces">
                <div className="container">
                    <h1 className="faces__title">Reise в лицах</h1>
                    <div className="faces__block">
                        <SliderFaces/>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <img className="faces__bgr" src={facesBgr} alt="facesBgr"/>
                </div>
            </section>
        </>
    );
};

export default Faces;