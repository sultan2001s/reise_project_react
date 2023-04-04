import React from 'react';

import './client.css'
import {LazyLoadImage} from "react-lazy-load-image-component";
import park from "../../../images/park.svg";
import mcdonald from "../../../images/mack-dag.svg";
import burger from "../../../images/king.svg";
import hotel from "../../../images/hotel.svg";

const Client = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="work__content">
                    <h2 className="work__title">Наши партнеры</h2>
                    <div className="work__list">
                        <LazyLoadImage className="work__image" src={park} alt="park"/>
                        <LazyLoadImage className="work__image" src={hotel} alt="hotel"/>
                    </div>
                    <div className="work__list">
                        <LazyLoadImage className="work__image" src={mcdonald} alt="mcdonald"/>
                        <LazyLoadImage className="work__image" src={burger} alt="burger"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;