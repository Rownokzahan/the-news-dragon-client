import React from 'react';
import NavBar from '../pages/Shared/Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const LoginLogoutLayout = () => {
    return (
        <div className='bg-light'>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default LoginLogoutLayout;