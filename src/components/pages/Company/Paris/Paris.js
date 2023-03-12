import React, {useContext} from 'react';

import './paris.css'
import parisImg from './parisImg.png'
import {CustomContext} from "../../../../Context";

const Paris = () => {
    const {setOpen} = useContext(CustomContext);

    return (
        <section className="paris">
            <div className="container">
                <div className="paris__content">
                    <div className="paris__left">
                        <p className="paris__text">С работадателями мы всегда на связи. В прошлом году мы <br/> посещали Europa Park, чтобы посмотреть условия работы <br/> и учебы. Также решить проблемы задержки документов.</p>
                        <p className="paris__text">Europa-Park — крупнейший парк развлечений в Германии и <br/> второй по посещаемости парк развлечений в Европе после <br/> Диснейленда в Париже. Находится в городке Руст в <br/> федеральной земле Баден-Вюртемберг на юго-западе <br/> Германии. Был открыт в 1975 году,</p>
                        <button className="paris__btn" onClick={() => setOpen(true)}>Узнать больше</button>
                    </div>
                    <div className="paris__right">
                        <img className="paris__img" src={parisImg} alt="parisImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Paris;