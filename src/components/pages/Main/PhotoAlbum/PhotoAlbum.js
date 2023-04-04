import React from 'react';

import './album.css'

import AlbumSlider from './AlbumSlider/AlbumSlider'

const PhotoAlbum = () => {
    return (
        <section className="album">
            <div className="container">
                <div className="album__card">
                    <AlbumSlider/>
                </div>
                <p className="album__text">Мы очень счастливы видеть, как Вы путешествуете, улыбаетесь. <br/> Это лучшая награда.</p>
            </div>
        </section>
    );
};

export default PhotoAlbum;