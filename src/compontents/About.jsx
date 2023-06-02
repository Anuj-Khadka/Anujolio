import React from "react";
import "../assets/css/About.css";
import Anuj from "../assets/images/Anuj-Khadka.jpg";
import Resume from "../assets/resume/Anuj-Khadka_Resume.pdf"
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <IconContext.Provider value={{ color: "#9ba9b4", size: "1.5rem" }}>
      <div className="about-container">
        <div className="page-title">
          <p className="page-desc tertiary">let me introduce myself</p>
          <h2>About Me</h2>
        </div>
        <div className="about">
          <div className="about-row">
            <div className="image-container">
              <img src={Anuj} alt="anuj-khadka" />
            </div>
            <div className="info-container">
              <div className="nice-greeting">Nice meeting you!</div>
              <h5>A Frontend Engineer Located In Our Lovely Earth</h5>
              <div className="hero-desc tertiary">
                I am a highly motivated and detail-oriented student with a
                strong passion for learning and personal development. Proficient
                in both written and verbal communication, with strong
                problem-solving and time management skills developed through
                various academic and extracurricular activities. I am currently
                practicing perfection.
              </div>
              <div className="seperator"></div>
              <div className="info-row">
                <div className="info-item">
                  <span>
                    <BsPersonCircle />
                  </span>
                  <p className="tertiary">Anuj Khadka</p>
                </div>
                <div className="info-item">
                  <span>
                    <MdLocationOn />
                  </span>
                  <p className="tertiary">Dhankuta, Nepal</p>
                </div>
                <div className="info-item">
                  <span>
                    <MdEmail />
                  </span>
                  <p className="tertiary">
                    <a
                      href="mailto:anujkhadka008@gmail.com"
                      class="tertiary"
                      style={{ textDecoration: "underline" }}
                    >
                      anujkhadka008@gmail.com
                    </a>
                  </p>
                </div>
                <div className="info-item">
                  <span>
                    <GrStatusCriticalSmall />
                  </span>
                  <p className="tertiary">Open for Work</p>
                </div>
              </div>
              <div className="action-links">
                <button
                  className="download-resume"
                  onclick="contentWindow.print();"
                >
                  <a
                    href={Resume}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </button>
                <div className="hero-social-handles">
                  <span className="social-btn">
                    <a
                      href="http://linkedin.com/in/anuj-khadka"
                      target="_blank"
                    >
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
                    <a
                      href="http://instagram.com/anuj_khadka008"
                      target="_blank"
                    >
                      <FiInstagram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default About;
