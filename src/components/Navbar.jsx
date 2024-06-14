import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="landing-title">
        {/* <img src={logo} alt="" /> */}
        <h2>Pathways for Youth Empowerment</h2>
      </div>
      <nav>
        <a href="/">Stories</a>
        <a href="/">Information</a>
        <a href="/">FAQ</a>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
        <button className="donate-button">Donate Now</button>
      </nav>
    </div>
  );
};

export default Navbar;
