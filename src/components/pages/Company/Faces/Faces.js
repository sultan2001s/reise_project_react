import React from 'react';

import './faces.css'
import SliderFaces from "./SliderFaces/SliderFaces";

const Faces = () => {
    return (
        <section className="faces">
            <div className="container">
                <h1 className="faces__title">Reise в лицах</h1>
                <div className="faces__block">
                    <SliderFaces/>
                </div>
            </div>
        </section>
    );
};

export default Faces;