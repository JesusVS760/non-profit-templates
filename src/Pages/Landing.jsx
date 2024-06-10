import React from "react";
import Navbar from "../components/Navbar";
import "./Landing.css";
import student from "../assets/images/student.jpg";
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
          <div className="landing-buttons">
            <button>About YE</button>
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="landing-featured-story">
        <div className="landing-featured-story-img">
          <img src={student} alt="student"></img>
          <div className="span-info">
            <span>"I was able to reach my goals and dreams"</span>
            <span>-John Smith, San Diego</span>
          </div>
        </div>
        <div className="landing-featured-content">
          <p className="story-line">Making a change</p>
          <h1>Why Start Contributing?</h1>
          <p className="story-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            justo vel odio rhoncus porta. Duis consequat libero at velit
            faucibus, sed semper ligula suscipit. Nunc aliquam est vel efficitur
            porta. Aliquam sit amet convallis ipsum. Integer convallis, risus
            vel tincidunt finibus, dui lectus dapibus mauris, sed bibendum enim
            lectus non dolor.
          </p>
          <button className="more-button">More About My Story!</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
