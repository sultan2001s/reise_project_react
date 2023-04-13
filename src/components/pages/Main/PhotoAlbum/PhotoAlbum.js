import React, {useEffect} from 'react';
import { Gallery } from 'react-photoswipe-gallery'

import './album.css'

import AlbumSlider from './AlbumSlider/AlbumSlider'
// import AOS from "aos";
// import 'aos/dist/aos.css'


const PhotoAlbum = () => {
    // useEffect(() => {
    //     AOS.init({duration: 2000});
    // }, []);

    return (
        <section className="album">
            <div className="container">
                <div className="album__card" >
                    <Gallery>
                        <AlbumSlider/>
                    </Gallery>
                </div>
                <p className="album__text" >Мы очень счастливы видеть, как Вы путешествуете, улыбаетесь. <br/> Это лучшая награда.</p>
            </div>
        </section>
    );
};

export default PhotoAlbum;