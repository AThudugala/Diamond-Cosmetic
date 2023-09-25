import React from "react";
import "./NavBar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav-bar" className="nav-bar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="main-title">
        <h1 className="title">Diamond cosmetic</h1>
        <h2 className="sub-title">Be your own kind of beautiful </h2>
      </div>
      <nav className="links">
        <ul>
          <Link className="link" to={"/"}>
            <span>Home</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
