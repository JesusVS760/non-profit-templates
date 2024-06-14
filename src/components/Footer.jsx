import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="footer-column">
          <h4>Social Links</h4>
          <div className="links">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Email</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="links">
            <a href="#">Blog</a>
            <a href="#">Events</a>
            <a href="#">Our Mission</a>
            <a href="#">Donate</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Legal Information</h4>
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Copyright Notice</a>
          </div>
        </div>
        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest news</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
