import React from "react";
import './Navbar.css';
// import logo from 'assert/logo/logo.png';


const Navbar = () => {
    return(
        <div id = "nav-bar" className="nav-bar">
            {/* <img src="logo" alt="Logo" /> */}
            <h2 className="logo">Be your own kind of beautiful </h2>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="product/{id}">Products</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;