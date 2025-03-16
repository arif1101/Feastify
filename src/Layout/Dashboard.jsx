import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import SideBar from '../shared/Navbar/SideBar';

const Dashboard = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className='flex w-screen left-0 absolute'>
            <SideBar></SideBar>
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;