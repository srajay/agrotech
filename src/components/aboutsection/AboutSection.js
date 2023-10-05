import React from "react";
import "./aboutsection.css";
import Img10 from "../../assets/img10.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <div className="about-text-title">
              <h1>
                Ilami Agro & Tech <br />
                Private Limited
              </h1>
            </div>
            <div className="about-text-para">
              <p>
                Ilami Agro Private Limited provides cutting edge agriculture
                science and technology services. Company draws expertise of
                highly skilled professionals to deliver quality products and
                services effectively. Wider networking and linkages with
                partners enhances company’s strength.
              </p>
            </div>
          </div>
          <div className="about-img">
            <img src={Img10} alt="agro-tech" />
          </div>
          <div className="about-goal">
            <div className="about-mission">
              <h2>Our Mission</h2>
              <p>Catalyzing transformation of agri food industry</p>
            </div>
            <div className="about-vision">
              <h2>Our Vision</h2>
              <p>
                To become a leading agriculture science and technology service
                provider for finding innovative solutions and developing and
                delivering high quality products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
