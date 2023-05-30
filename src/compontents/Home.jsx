import React from "react";
import "../assets/css/Home.css";
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import { IconContext } from "react-icons";

const Home = () => {
  return (
    <IconContext.Provider value={{color:"#9ba9b4", size: "1.5rem"}}>
      <div className="home-container">
        <div className="hero-box">
          <h1 id="hero-name">Hi 👋, I'm Anuj Khadka.</h1>
          <p className="tag-line tertiary">Create . Code . Innovate</p>
          {/* <div className="hero-subtitle">
            I am a highly motivated and detail-oriented student with a strong
            passion for learning and personal development.
          </div> */}
        </div>
        <div className="hero-social-handles">
          <span className="social-btn">
            <a href="http://linkedin.com/in/anuj-khadka" target="_blank">
              <FiLinkedin />
            </a>
          </span>
          <span className="social-btn">
            <a href="http://github.com/anuj-khadka" target="_blank">
              <FiGithub />
            </a>
          </span>
          <span className="social-btn">
            <a href="http://facebook.com/anujkhadka008" target="_blank">
              <FiFacebook />
            </a>
          </span>
          <span className="social-btn">
            <a href="http://instagram.com/anuj_khadka008" target="_blank">
              <FiInstagram />
            </a>
          </span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Home;
