import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import useAdmin from '../useComponents/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const UserRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation();

    if (loading || isLoading){
        return <span className="loading loading-bars loading-xl mx-auto"></span>
    }

    if(user && !isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace/>
};

export default UserRoute;