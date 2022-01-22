import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../ui-components/Navbar';

const ProtectedRoute = () => {

    const user = useSelector(store => store.users)

    const isAuth = user.login
    console.log('¿isAuth?', isAuth)
    return(
        <>
            <Navbar isAuth={isAuth} />
            {

                isAuth ? <Outlet /> : <Navigate to='/login' />
            }
        </>
    );
};

export default ProtectedRoute;
