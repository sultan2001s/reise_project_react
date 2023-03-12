import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext();


export const Context = (props) => {

    const navigate = useNavigate();
    const [openJob, setOpenJob] = useState(false);
    const [tab, setTab] = useState(1);
    const [order, setOrder] = useState(false);
    const [open, setOpen] = useState(false);

    const closeOverlay = (e) => {
        if (e.target.classList.contains('overlay')) {
            setOpen(false)
        }
    };
    const toggleTab = (index) => {
        setTab(index)
    };

    const [course, setCourse] = useState([]);
    const getCourse = () => {
        axios('http://localhost:8080/course')
            .then(({data}) => setCourse(data))
    };

    const [user, setUser] = useState({
        login: ''
    });

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        getCourse();
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify(user));
    // }, [user.orders]);

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
        localStorage.removeItem('user');
        setUser({
            login: ''
        })
    };

    const value = {
        user,
        setUser,
        open,
        setOpen,
        course,
        setCourse,
        tab,
        setTab,
        order,
        setOrder,
        openJob,
        setOpenJob,
        registerUser,
        logOutAdmin,
        loginAdmin,
        closeOverlay,
        getCourse,
        toggleTab,
    };



    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};