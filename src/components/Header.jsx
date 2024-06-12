import React from "react";
import "./Header.css";
import phone from "../assets/images/phone.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="contact-info">
        <p className="contact-opt">
          <img src={phone} alt="" />
          1+123-456-7890
        </p>
        <p className="contact-opt">
          <img src={linkedin} alt="" />
          Linkedin
        </p>
        <p className="contact-opt">
          <img src={twitter} alt="" />
          Twitter
        </p>
      </div>
    </div>
  );
};

export default Header;
