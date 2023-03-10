import React, {useContext, useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom'
import {CustomContext} from "../../../Context";
import axios from "axios";
import {BsPencilFill} from 'react-icons/bs';
import {ImCross} from 'react-icons/im';
import InputMask from 'react-input-mask'

import './admin.css'

const Admin = () => {
    const {user, setUser, logOutAdmin} = useContext(CustomContext);
    const [tab, setTab] = useState(1);
    const [userChange, setUserChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);
    const [visible, setVisible] = useState(true);

    const removeElement = () => {
        setVisible((prev) => !prev);

    };

    const {
        register,
        formState: {
            errors
        },
        watch,
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });

    const password = useRef({});
    password.current = watch("password", "");

    const changeUser = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, data)
            .then(({data}) => {
                setUser(data);
                localStorage.setItem('user', JSON.stringify(data));
                setUserChange(false);
            })
    };
    const changePassword = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, {password: data.password})
            .then(() => setPasswordChange(false))
    };

    return (
        <section className="admin">
            <div className="container">
                <div className="admin__top">
                    {
                        tab === 1 ? <h1 className="admin__title">Настройка профиля</h1> : <h1 className="admin__title">Администрация</h1>
                    }
                    <div className="admin__buttons">
                        <button className={tab === 2 ? "admin__btn" : "admin__btn_active"} onClick={() => setTab(2)}>История заявок</button>
                        <button className={tab === 1 ? "admin__btn" : "admin__btn_active"} onClick={() => setTab(1)}>Профиль</button>
                    </div>
                </div>
                {
                    tab === 1
                        ? <div>
                            <div>
                                <form onSubmit={handleSubmit(changeUser)} className="admin__content">
                                    <div className="admin__change">
                                        <h3 className='admin__content-title'>Личные данные</h3>
                                        <span>
                                        <span className='admin__content-write' onClick={() => setUserChange(!userChange)}>
                                            {userChange ? <><ImCross/> Отменить </> : <>
                                                <BsPencilFill/> Изменить </>}
                                        </span>
                                </span>
                                    </div>
                                    <div className="admin__info">
                                        <p className='admin__info-about'>
                                            <span className='admin__info-upper'>Логин</span>
                                            {userChange ?
                                                <input className='admin__info-input' {...register('login')}
                                                       defaultValue={user.login} type="text"/> : user.login}
                                        </p>
                                        <p className='admin__info-about'>
                                            <span className='admin__info-upper'>Номер телефона*:</span>
                                            {userChange ? <InputMask className='admin__info-input' {...register('phone')}
                                                                     mask={`+\\9\\96(999)99-99-99`}
                                                                     defaultValue={user.phone} type="tel"/> : user.phone}
                                        </p>
                                        <p className='admin__info-about'>
                                            <span className='admin__info-upper'>Почта</span>
                                            {userChange ?
                                                <input className='admin__info-input' {...register('email')}
                                                       defaultValue={user.email} type="email"/> : user.email}
                                        </p>
                                    </div>


                                    {userChange ?
                                        <button className='admin__info-save' type='submit'>Сохранить изменения</button> : ''}

                                </form>
                                <form onSubmit={handleSubmit(changePassword)} className='admin__content'>
                                    <div className="admin__change">
                                        <h3 className='admin__content-title'>Пароль</h3>
                                        <span>
                        <span className='admin__content-write' onClick={() => setPasswordChange(!passwordChange)}>
                            {passwordChange ? <><ImCross/> Отменить </> : <>
                                <BsPencilFill/> Изменить </>}
                        </span>
                        </span>
                                    </div>
                                    {passwordChange ? <div className='admin__info'>
                                        <p className='admin__info-about'>
                                            <span className='admin__info-upper'>Новый пароль</span>
                                            <input className='admin__info-input' {...register('password', {
                                                required: "Вы должны указать пароль",
                                                minLength: {
                                                    value: 5,
                                                    message: "Пароль должен содержать не менее 6 символов"
                                                }
                                            })} type="password"/>
                                            {errors?.password && <p>{errors?.password?.message}</p>}
                                        </p>
                                        <p className='admin__info-about'>
                                            <span className='admin__info-upper'>Подтвердите пароль</span>
                                            <input className='admin__info-input' {...register('confirmPwd', {
                                                validate: value =>
                                                    value === password.current || "Пароль не подходит"
                                            })} type="password"/>
                                            {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                                        </p>
                                    </div> : ''
                                    }
                                    {passwordChange ?
                                        <button className='admin__info-save' type='submit'>Сохранить изменения</button> : ''}
                                </form>
                                <div className="admin__content">
                                    {
                                        user.login.length ?
                                            <Link className="admin__out" to='/' onClick={() => logOutAdmin()}>Выйти</Link> : ''
                                    }
                                </div>
                            </div>

                        </div>
                        :
                        <div>
                            <h2 className="admin__h2">История</h2>
                            {
                                user.orders.map((item, idx) => (
                                    <div className="admin__history" key={idx}>
                                        {
                                            visible && (
                                                <div className="admin__row">
                                                    <div>
                                                        <h3>Имя</h3>
                                                        <p>{item.name}</p>
                                                        <span>{item.date}</span>
                                                    </div>
                                                    <div>
                                                        <h3>Фамилия</h3>
                                                        <p>{item.surname}</p>
                                                    </div>
                                                    <div>
                                                        <h3>Instagram</h3>
                                                        <p>{item.social}</p>
                                                    </div>
                                                    <div>
                                                        <h3>Номер телефона</h3>
                                                        <p>{item.phone}</p>
                                                    </div>
                                                    <div>
                                                        <h3>Ваш вопрос</h3>
                                                        <p>{item.message}</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" onClick={removeElement}>удалить</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default Admin;