import React from "react";

const Navbar = () => {
    return(
        <div id = "nav-bar" className="nav-bar">
            <h2 className="logo">Be your own kind of beautiful </h2>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="product/:id">Products</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;