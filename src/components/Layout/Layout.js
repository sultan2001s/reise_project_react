import React from 'react';
import Header from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main/Main";
import Courses from "../pages/Courses/Courses";
import Studies from "../pages/ Studies/Studies";
import Company from "../pages/Company/Company";
import Job from "../pages/Job/Job";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/studies' element={<Studies/>}/>
                <Route path='/company' element={<Company/>}/>
                <Route path='/job' element={<Job/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Layout;