import React from 'react';

import './deutsch.css'
import deutschImg from '../../../images/deutschImg.png'

const Deutsch = () => {
    return (
        <section className="deutsch">
            <div className="container">
                <h1 className="deutsch__title">Почему именно наши курсы?</h1>
                <p className="deutsch__term">Наши преподаватели разрабатывают индивидуальную технику преподавания, <br/>в чем мы их не ограничиваем, поэтому уроки интересные.</p>
                <div className="deutsch__images">
                    <img className="deutsch__img" src={deutschImg} alt="deutschImg"/>
                </div>
                <h1 className="deutsch__title">Сколько надо учить язык, чтобы выучить?</h1>
                <div className="deutsch__block">
                    <div>
                        <p className="deutsch__text">Конечно это зависит от стараний, времени, которое вы тратите на это, <br/>преподавателя и многое другое...</p>
                        <p className="deutsch__text">НО! Чаще всего это зависит от желания, если вы хотите улететь, <br/>то желание учить у вас точно есть!</p>
                    </div>
                    <div className="deutsch__card">
                        <div className="deutsch__row">
                            <h1 className="deutsch__A1">АО</h1>
                            <span>
                            <p className="deutsch__p">2 месяца</p>
                            <div className="deutsch__line"><svg width="169" height="24" viewBox="0 0 169 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M168.061 13.0607C168.646 12.4749 168.646 11.5251 168.061 10.9393L158.515 1.3934C157.929 0.807611 156.979 0.807611 156.393 1.3934C155.808 1.97919 155.808 2.92893 156.393 3.51472L164.879 12L156.393 20.4853C155.808 21.0711 155.808 22.0208 156.393 22.6066C156.979 23.1924 157.929 23.1924 158.515 22.6066L168.061 13.0607ZM0 13.5H167V10.5H0L0 13.5Z" fill="#1E005A"/>
</svg></div>
                        </span>
                        </div>
                        <div className="deutsch__row">
                            <h1 className="deutsch__A1">А1</h1>
                            <span>
                            <p className="deutsch__p">2 месяца</p>
                            <div className="deutsch__line"><svg width="169" height="24" viewBox="0 0 169 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M168.061 13.0607C168.646 12.4749 168.646 11.5251 168.061 10.9393L158.515 1.3934C157.929 0.807611 156.979 0.807611 156.393 1.3934C155.808 1.97919 155.808 2.92893 156.393 3.51472L164.879 12L156.393 20.4853C155.808 21.0711 155.808 22.0208 156.393 22.6066C156.979 23.1924 157.929 23.1924 158.515 22.6066L168.061 13.0607ZM0 13.5H167V10.5H0L0 13.5Z" fill="#1E005A"/>
</svg></div>
                        </span>
                        </div>
                        <div className="deutsch__row">
                            <h1 className="deutsch__A1">А2</h1>
                            <span>
                            <p className="deutsch__p">4 месяца</p>
                            <div className="deutsch__line"><svg width="169" height="24" viewBox="0 0 169 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M168.061 13.0607C168.646 12.4749 168.646 11.5251 168.061 10.9393L158.515 1.3934C157.929 0.807611 156.979 0.807611 156.393 1.3934C155.808 1.97919 155.808 2.92893 156.393 3.51472L164.879 12L156.393 20.4853C155.808 21.0711 155.808 22.0208 156.393 22.6066C156.979 23.1924 157.929 23.1924 158.515 22.6066L168.061 13.0607ZM0 13.5H167V10.5H0L0 13.5Z" fill="#1E005A"/>
</svg></div>
                        </span>
                        </div>
                        <div className="deutsch__row">
                            <h1 className="deutsch__A1">В1</h1>
                            <span>
                            <p className="deutsch__p">4 месяца</p>
                            <div className="deutsch__line"><svg width="169" height="24" viewBox="0 0 169 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M168.061 13.0607C168.646 12.4749 168.646 11.5251 168.061 10.9393L158.515 1.3934C157.929 0.807611 156.979 0.807611 156.393 1.3934C155.808 1.97919 155.808 2.92893 156.393 3.51472L164.879 12L156.393 20.4853C155.808 21.0711 155.808 22.0208 156.393 22.6066C156.979 23.1924 157.929 23.1924 158.515 22.6066L168.061 13.0607ZM0 13.5H167V10.5H0L0 13.5Z" fill="#1E005A"/>
</svg></div>
                        </span>
                        </div>
                        <div className="deutsch__row">
                            <h1 className="deutsch__A1">B2</h1>
                        </div>
                    </div>
                    <div>
                        <p className="deutsch__deser">
                            Тут мы приводим статистические сведения, которые мы проверили <br/>
                            на своем опыте, если не пропускать, делать домашнее задание. <br/>
                            Вполне возможно выучить язык в эти сроки и сдать желаемые <br/>
                            экзамены.
                        </p>
                    </div>
                </div>
                <button className="deutsch__btn">Записаться на курс</button>
            </div>
        </section>
    );
};

export default Deutsch;