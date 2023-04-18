import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveCategoryLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? 'bg-secondary text-black text-decoration-none p-2' : 'text-decoration-none p-2 text-secondary'
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveCategoryLink;