import React from 'react';

import './album.css'
import PhotoSlider from "./PhotoSlider/PhotoSlider";

const PhotoAlbum = () => {
    return (
        <section className="album">
            <div className="container">
                <h1 className="album__title">Наш фотоальбом</h1>
                <p className="album__text">Тут мы собираем фотографии наших студентов, работников. <br/> И надеемся, что скоро тут появится Ваша фотография.</p>
                <div className="album__card">
                    <PhotoSlider/>
                </div>
                <p className="album__text">Мы очень счастливы видеть, как Вы путешествуете, улыбаетесь. <br/> Это лучшая награда.</p>
            </div>
        </section>
    );
};

export default PhotoAlbum;