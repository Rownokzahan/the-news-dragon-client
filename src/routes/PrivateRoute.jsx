import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner className='text-center'    animation="border" />
    }

    if (!user) {
        return <Navigate state={{ from: location }} to={'/user/login'} replace={true} />
    }

    return children;
};

export default PrivateRoute;