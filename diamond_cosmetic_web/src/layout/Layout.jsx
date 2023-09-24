import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/* TODO Header */}
            <Outlet/>
            {/* TODO Footer */}
        </div>
    );
};

export default Layout;