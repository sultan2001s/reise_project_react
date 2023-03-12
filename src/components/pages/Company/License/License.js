import React from 'react';

import './license.css'
import permission from '../../../images/permission.png'

const License = () => {
    return (
        <section className="license">
            <div className="container">
                <div className="license__content">
                    <div className="license__left">
                        <h2 className="license__title">Давайте знакомиться ближе</h2>
                        <p className="license__text">Мы помогаем с работой и учебой всем желающим.</p>
                        <p className="license__text">
                            С каждым годом, мы <span style={{color: '#FE0000'}}>улучшаем</span> качество нашей работы, <br/>
                            отбираем только <span style={{color: '#FE0000'}}>достойных</span> <br/>
                            работодателей, <span style={{color: '#FE0000'}}>добавляем</span> новые вакансии.
                        </p>
                        <p className="license__text">
                            Разберем чем мы занимаемся? Мы консультируем и помогаем <br/>
                            подобрать <span style={{color: '#FE0000'}}>лучший вариант</span> для каждого. Также мы занимаемся <br/>
                            всей документацией, чтобы все было оформлено правильно, <br/>
                            занимаем очередь в посольстве.
                        </p>
                        <p className="license__text">
                            Помимо этого мы предоставляем <span style={{color: '#FE0000'}}>полное</span> визовое <br/> сопровождение, медицинскую <span style={{color: '#FE0000'}}>страховку</span>, остаемся на связи <br/>
                            с Вами на протяжение всего Вашего пребывания в Германии. <br/>
                            Находим <span style={{color: '#FE0000'}}>подход</span> к каждому клиенту.
                        </p>
                        <p className="license__text">
                            У нас есть курсы немецкого языка и <span style={{color: '#FE0000'}}>мы заинтересованы</span>, <br/> чтобы Вы знали язык и создали все условия для комфортного <br/> обучения.
                        </p>

                    </div>
                    <div className="license__right">
                        <h2 className="license__title" style={{fontSize: '17px'}}>с 2011 года</h2>
                        <p className="">Наша компания работает легально</p>
                        <h3 className="license__h3">Лицензия ДВМ при МИД 000623</h3>
                        <img className="license__img" src={permission} alt="permission"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default License;