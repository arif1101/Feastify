import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../useComponents/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation();

    if(loading || isLoading){
        return <span className='loading loading-dots loading-lg'></span>
    }
    if(user && isAdmin){
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;