import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../shared/Navbar/SideBar';
import useAdmin from '../useComponents/useAdmin';

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(location.pathname === '/dashboard'){
            if(isAdmin){
                navigate('/dashboard/adminHome')
            }
            else{
                navigate('/dashboard/userHome')
            }
        }
    },[location.pathname, isAdmin, navigate])

    
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