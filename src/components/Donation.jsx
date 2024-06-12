import React from "react";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="donation-container">
      <div className="donation-header">
        <h1>Every Donation Helps!</h1>
      </div>
      <div className="donation-card">
        <div className="donation-content">
          <h3>Thank You!</h3>
          <div className="donation-info">
            <div className="name input">
              <input type="name" name="" placeholder="Jane Parker" />
              <p>Full Name</p>
            </div>
            <div className="name input">
              <input type="email" name="" placeholder="jparker@domain.com" />
              <p>Email</p>
            </div>
            <textarea id=""></textarea>
            <p>Leave a comment or good wishes.</p>
          </div>
        </div>
        <div className="donation-pay-sec">
          <div className="donation-payment">
            <h4>Choose an Amount to Donate:</h4>
            <hr />
            <div className="donation-amt-opt">
              <button>$10</button>
              <button>$25</button>
              <button>$50</button>
              <button>$100</button>
              <button>$200</button>
              <button>$300</button>
            </div>
            <div className="donation-custom-amt">
              <input type="text" />
              <p>Donation Amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
