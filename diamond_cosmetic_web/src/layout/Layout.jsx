import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../header/NavBar';
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <Navbar className="navbar" />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;