import React, {useContext, useState} from 'react';
import {CustomContext} from "../../../Context";

import {useForm} from "react-hook-form";
import InputMask from "react-input-mask";

import axios from "axios";
import Order from "../Order/Order";
import './overlay.css'

const Overlay = () => {

    const {
        reset,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        register
    } = useForm();

    const {open, closeOverlay, user, setUser} = useContext(CustomContext);
    const [orderActive, setOrderActive] = useState(false);
    // const navigate = useNavigate();

    const addOrder = async (data) => {
        await axios.post('http://localhost:8080/orders', {
            ...data,
            user: user,
            date: new Date()
        }).then(() => console.log('успешно добавлен'));

        await axios.patch(`http://localhost:8080/users/${user.id}`, {
            orders: [
                ...user.orders,
                {
                    ...data,
                    date: new Date()
                }
            ],
        }).then(() => console.log('успешно добавлен'));

        await axios(`http://localhost:8080/users/${user.id}`).then((res) => setUser(res.data) );

        await reset();
        // await navigate('/')
    };


    return (
        <>
            {
                open && (
                    <div onClick={closeOverlay} className={`overlay ${open ? 'overlay_active' : ''}`} >
                        <form className="overlay__popup" onSubmit={handleSubmit(addOrder)}>
                            <h2 className="overlay__title">Получить консультацию</h2>
                            <p className="overlay__text">Заполните эти поля, что бы мы смогли Вам помочь</p>
                            <div className="overlay__row">
                                <label className="overlay__label">
                                    <span style={{color: 'white', paddingLeft: '23px'}}>Имя</span>
                                    <span style={{color: 'white', marginLeft: '20px'}}>{errors?.name?.message}</span>
                                    <input {...register('name', {
                                        required : 'Введите имя *',
                                    })} className="overlay__input" type="text" placeholder="Имя"/>
                                </label>
                                <label className="overlay__label">
                                    <span style={{color: 'white', paddingLeft: '23px'}}>Фамилия</span>
                                    <span style={{color: 'white', marginLeft: '20px'}}>{errors?.surname?.message}</span>
                                    <input {...register('surname', {
                                        required : 'Введите вашу фамилию *',
                                    })} className="overlay__input" type="text" placeholder="Фамилия"/>
                                </label>
                                <label className="overlay__label">
                                    <span style={{color: 'white', paddingLeft: '23px'}}>Instagram</span>
                                    <span style={{color: 'white', marginLeft: '20px'}}>{errors?.social?.message}</span>
                                    <input {...register('social', {
                                        required : 'Введите ваш Instagram *',
                                    })} className="overlay__input" type="text" placeholder="@aiperi_3452"/>
                                </label>
                                <label className="overlay__label">
                                    <span style={{color: 'white', paddingLeft: '23px'}}>Номер</span>
                                    <span style={{color: 'white', marginLeft: '20px'}}>{errors?.phone?.message}</span>
                                    <InputMask {...register("phone", {
                                        required : 'Введите номер телефона *',
                                    })} className="overlay__input" placeholder="+996554467895" type="tel" mask={`+\\9\\96(999)99-99-99`}/>
                                </label>
                                <label className="overlay__label">
                                    <span style={{color: 'white', paddingLeft: '23px'}}>Ваш вопрос</span>
                                    <span style={{color: 'white', marginLeft: '20px'}}>{errors?.message?.message}</span>
                                    <textarea {...register('message', {
                                        required : 'Пожалуйста, заполните это поле *',
                                    })} className="overlay__input2" placeholder="Ваш вопрос" />
                                </label>
                                <div className="overlay__school">
                                    <h3 className="overlay__h3">Выберите, кем Вы являетесь сейчас?</h3>
                                    <label className="overlay__label2">
                                        <input {...register('school' )} style={{width: '20px', height: '20px'}} type="checkbox" />
                                        <span style={{color: 'white'}}>Закончил\а школу</span>
                                    </label>
                                    <label className="overlay__label2">
                                        <input {...register('learn')} style={{width: '20px', height: '20px'}} type="checkbox" />
                                        <span style={{color: 'white'}}>Учусь в университете</span>
                                    </label>
                                    <label className="overlay__label2">
                                        <input {...register('end')} style={{width: '20px', height: '20px'}} type="checkbox" />
                                        <span style={{color: 'white'}}>Закончил\а университет</span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" disabled={!isValid} className="overlay__btn" onClick={() => setOrderActive(true)}>Отправить запрос</button>
                        </form>
                    </div>
                )
            }
            <Order active={orderActive} setIsActive={setOrderActive}/>
        </>
    );
};

export default Overlay;