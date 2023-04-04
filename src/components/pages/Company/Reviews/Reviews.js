import React from 'react';

import {FaInstagram, FaFacebook} from "react-icons/fa";

import './reviews.css'

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container">
                <p className="reviews__text">Вы тоже можете оставить свой отзыв, в наших социальных сетях.</p>
                <ul className="reviews__icon">
                    <li className="reviews__icons"><a className="reviews__icons" href="https://www.instagram.com/reisekg/"><FaInstagram/></a></li>
                    <li className="reviews__icons"><a className="reviews__icons" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></li>
                </ul>
            </div>
        </section>
    );
};

export default Reviews;