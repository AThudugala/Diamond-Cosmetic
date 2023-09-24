import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../header/NavBar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            {/* TODO Footer */}
        </div>
    );
};

export default Layout;