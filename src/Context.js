import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext();


export const Context = (props) => {

    const navigate = useNavigate();
    const [burger, setBurger] = useState(false);
    const [openJob, setOpenJob] = useState(false);
    const [tab, setTab] = useState(1);
    const [order, setOrder] = useState(false);
   
    const toggleTab = (index) => {
        setTab(index)
    };

    const [user, setUser] = useState({
        login: ''
    });

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user.orders]);

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate('/')
            })
    };

    const loginAdmin = (data) => {
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate('/')
            })
    };

    const logOutAdmin = () => {
        if (window.confirm('ты точно хочешь выйти?')) {
            localStorage.removeItem('user');
            setUser({
                login: ''
            })
        } else {
            return ''
        }

    };

    const value = {
        user,
        setUser,
        burger,
        setBurger,
        tab,
        setTab,
        order,
        setOrder,
        openJob,
        setOpenJob,
        registerUser,
        logOutAdmin,
        loginAdmin,
        toggleTab,
    };



    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};