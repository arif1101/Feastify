import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {

    const location = useLocation();
    const isLogin = location.pathname === '/login'
    const isRegister = location.pathname === '/register'
    
    return <>
            <ToastContainer></ToastContainer>
            {/* Only show Navbar and Footer if not on /login or /register */}
            { !(isLogin || isRegister) && <Navbar /> }
            <Outlet />
            { !(isLogin || isRegister) && <Footer /> }
    </>
};

export default MainLayout;