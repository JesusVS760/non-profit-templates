import React from "react";
import Navbar from "../components/Navbar";
import "./Landing.css";
import student from "../assets/images/student.jpg";
import Header from "../components/Header";
import teacher from "../assets/images/teacher.jpg";
import hardship from "../assets/images/hardship.jpg";
import hat from "../assets/images/hat.png";
import skill from "../assets/images/skill.png";
import weight from "../assets/images/weight.png";
import heart from "../assets/images/heart.png";
import founder from "../assets/images/founder.jpg";
import plus from "../assets/images/plus.png";
import diamond from "../assets/images/diamond2.png";
import teen from "../assets/images/teen.jpg";
import teen2 from "../assets/images/teen2.jpg";
import teen3 from "../assets/images/teen3.jpg";
import group from "../assets/images/group.jpg";
import group2 from "../assets/images/group2.jpg";
import family from "../assets/images/family.jpg";
import Donation from "../components/Donation";
import Footer from "../components/Footer";

// import img from "../assets/images/landing2.jpg";

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />
      <Navbar />
      <div className="landing-content">
        <div className="landing-header-info">
          <h1>
            Barriers to Brilliance{" "}
            <div className="diamond-background">
              <img src={diamond} alt="" />
            </div>
          </h1>
          <h1 className="header-secound">a Student at a Time.</h1>
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
            <span>
              "I was able to reach my goals and dreams" -John Smith, San Diego
            </span>
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
      <hr className="divider" />
      <div className="landing-stat-section">
        <div className="stat-heading">
          <h1>Empowering Lives</h1>
          <h1>Through a Range of Ways.</h1>

          <p>
            {" "}
            Nunc aliquam est vel efficitur porta. Aliquam sit amet convallis
            ipsum. Integer convallis, risus vel tincidunt finibus, dui lectus
            dapibus mauris, sed bibendum enim lectus non dolor.
          </p>
        </div>
        <div className="stat-service-container">
          <div className="stat-service-top">
            <div className="stat-service-card">
              <div className="card-img">
                <img src={hat} alt="" />
              </div>
              <div className="stat-service-info">
                <h4>Educational Programs</h4>
                <p>
                  {" "}
                  Nunc aliquam est vel efficitur porta. Aliquam sit amet
                  convallis ipsum.
                </p>
              </div>
            </div>
            <div className="stat-service-card">
              <div className="card-img">
                <img src={skill} alt="" />
              </div>
              <div className="stat-service-info">
                <h4>Skill Development</h4>
                <p>
                  {" "}
                  Nunc aliquam est vel efficitur porta. Aliquam sit amet
                  convallis ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="stat-service-btm">
            <div className="stat-service-card">
              <div className="card-img">
                <img src={weight} alt="" />
              </div>
              <div className="stat-service-info">
                <h4>Extracurricular Activities</h4>
                <p>
                  {" "}
                  Nunc aliquam est vel efficitur porta. Aliquam sit amet
                  convallis ipsum.
                </p>
              </div>
            </div>
            <div className="stat-service-card">
              <div className="card-img">
                <img src={heart} alt="" />
              </div>
              <div className="stat-service-info">
                <h4>Health and Wellbeing</h4>
                <p>
                  {" "}
                  Nunc aliquam est vel efficitur porta. Aliquam sit amet
                  convallis ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="landing-statistics">
          <div className="stats-card">
            <div className="stat">
              <li>Unfunded Schools</li>
            </div>
            <img src={library} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              justo vel odio rhoncus porta. Duis consequat libero at velit
              faucibus, sed semper ligula suscipit.
            </p>
          </div>
          <div className="stats-card">
            <div className="stat">
              <li>Finacial Hardship</li>
            </div>
            <img src={hardship} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              justo vel odio rhoncus porta. Duis consequat libero at velit
              faucibus, sed semper ligula suscipit.
            </p>
          </div>
          <div className="stats-card">
            <div className="stat">
              <li>Teacher Shortage</li>
            </div>
            <img src={teacher} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              justo vel odio rhoncus porta. Duis consequat libero at velit
              faucibus, sed semper ligula suscipit.
            </p>
          </div>
        </div> */}
      </div>
      <hr className="divider" />
      <div className=""></div>
      <div className="Faq-section">
        <div className="faq-header">
          <h2>Unlocking Answers:</h2>
          <h1>Your FAQs Demystified</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            justo vel odio rhoncus porta. Duis consequat libero at velit
            faucibus, sed semper ligula suscipit.Sed et justo vel odio rhoncus
            porta.
          </p>
        </div>
        <div className="faq-content">
          <div className="card">
            <p>1. What is Pathways to Youth Empowerment?</p>
            <img src={plus} alt="plus" />
          </div>
          <div className="card">
            <p>2. How can I get involved with Pathways to Youth Empowerment?</p>
            <img src={plus} alt="plus" />
          </div>
          <div className="card">
            <p>3. Where does my donation go?</p>
            <img src={plus} alt="plus" />
          </div>
          <div className="card">
            <p>
              4. Can I designate my donation to a specific program or project?
            </p>
            <img src={plus} alt="plus" />
          </div>
          <div className="card">
            <p>
              5. Does Pathways to Youth Empowerment offer internships or job
              opportunities?
            </p>
            <img src={plus} alt="plus" />
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="landing-founder-section">
        <div className="landing-founder-header">
          <h1>More Than Just a Non Profit,</h1>
          <h1>Championing our Youth.</h1>
        </div>
        <div className="landing-featured-story">
          <div className="landing-featured-content">
            <h2>Our Founder - Name Here</h2>
            <p> Lorem ipsum dolor sit amet</p>
            <p className="story-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              justo vel odio rhoncus porta. Duis consequat libero at velit
              faucibus, sed semper ligula suscipit. Nunc aliquam est vel
              efficitur porta. Aliquam sit amet convallis ipsum. Integer
              convallis, risus vel tincidunt finibus, dui lectus dapibus mauris,
              sed bibendum enim lectus non dolor.Aliquam sit amet convallis
              ipsum. Integer convallis, risus vel tincidunt finibus, dui lectus
              dapibus mauris, sed bibendum enim lectus non dolor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed et justo vel odio
              rhoncus porta. Duis consequat libero at velit faucibus, sed semper
              ligula suscipit. Nunc aliquam est vel efficitur porta. Aliquam sit
              amet convallis ipsum. Integer convallis, risus vel tincidunt
              finibus
            </p>
            <button className="more-button">Explore my Blog!</button>
          </div>
          <div className="landing-featured-story-img">
            <img src={founder} alt="student"></img>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="landing-gallary-sec">
        <div className="gallary-img">
          <img src={group} alt="" />
        </div>
        <div className="gallary-img">
          <img src={teen2} alt="" />
        </div>
        <div className="gallary-img">
          <img src={teen3} alt="" />
        </div>
        <div className="gallary-img">
          <img src={family} alt="" />
        </div>
        <div className="gallary-img">
          <img src={teen} alt="" />
        </div>
        <div className="gallary-img">
          <img src={group2} alt="" />
        </div>
      </div>
      {/* <div>
        <Donation />
      </div> */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
