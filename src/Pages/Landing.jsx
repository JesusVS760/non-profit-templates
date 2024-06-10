import React from "react";
import Navbar from "../components/Navbar";
import "./Landing.css";
// import img from "../assets/images/landing2.jpg";

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content">
        <div className="landing-header-info">
          <h1>Making a difference early on.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            tellus sit amet neque iaculis posuere. Fusce eget libero nec eros
            tincidunt laoreet.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
