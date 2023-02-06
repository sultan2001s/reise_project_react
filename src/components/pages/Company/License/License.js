import React from 'react';

import './license.css'
import licenseImg from '../../../images/licenseImg.png'

const License = () => {
    return (
        <section className="license">
            <div className="container">
                <div className="license__content">
                    <div className="license__left">
                        <h2 className="license__title">Давайте знакомиться ближе</h2>
                        <p className="license__text" style={{display: 'flex', alignItems: 'center', columnGap: "20px"}}>Мы помогаем с работой и учебой всем желающиим <h2 className="license__title" style={{fontSize: '17px'}}>с 2011 года</h2></p>
                        <p className="license__text">
                            С каждым годом, мы улучшаем качество нашей работы, отбираем только <br/>
                            достойных работадателей, добавляем новые вакансии.
                        </p>
                        <p className="license__text">
                            Разберем чем мы занимаемся? Мы консультируем и помогаем <br/>
                            подобрать лучший вариант для каждого. Также мы занимаемся <br/>
                            всей документацей, чтобы все было оформлено правильно, <br/>
                            занимаем очередь в посольстве.
                        </p>
                        <p className="license__text">
                            Помимо этого мы остаемся на связи с Вами на протяжение <br/>
                            всего Вашего прибывания в Германии.
                        </p>
                        <p className="license__text">
                            Также у нас есть курсы немецкого языка и мы <br/> заинтересованны, что бы Вы знали язык и создали все <br/> условия для комфортного обучения.
                        </p>
                        <p className="license__text">Наша компания работает легально</p>
                        <h3 className="license__h3">Лицензия ДВМ при МИД 000623</h3>
                    </div>
                    <div className="license__right">
                        <img className="license__img" src={licenseImg} alt="licenseImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default License;