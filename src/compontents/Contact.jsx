import React from "react";
import "../assets/css/Contact.css";
import ContactForm from "./micro-components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="page-title">
        <p className="page-desc tertiary">get in touch</p>
        <h2>Contact</h2>
      </div>
      <div className="contact">
        <div className="contact-row">
          <div className="form-container">
            {/* <img src={Anuj} alt="anuj-khadka" /> */}
            <ContactForm />
          </div>
          <div className="contact-info-container">
            {/* <div className="nice-greeting">Nice meeting you!</div> */}
            <h5>Contact Info</h5>
            <div className="contact-info-row">
                <div className="contact-info-item">
                  <span>
                    {/* <BsPersonCircle /> */}
                  </span>
                  <p className="tertiary">Anuj Khadka</p>
                </div>
                <div className="contact-info-item">
                  <span>
                    {/* <MdLocationOn /> */}
                  </span>
                  <p className="tertiary">Dhankuta, Nepal</p>
                </div>
                <div className="contact-info-item">
                  <span>
                    {/* <MdEmail /> */}
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
                <div className="contact-info-item">
                  <span>
                    {/* <GrStatusCriticalSmall /> */}
                  </span>
                  <p className="tertiary">Open for Work</p>
                </div>
              </div>
            {/* <div className="seperator"></div>  */}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
