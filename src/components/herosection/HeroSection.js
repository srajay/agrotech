import React from "react";
import "./herosection.css";
import { Link } from "react-router-dom";
import Img5 from "../../assets/img5.jpg";
import Img6 from "../../assets/img6.jpg";
import Img7 from "../../assets/img7.jpg";
import Img8 from "../../assets/img8.jpg";
const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left">
          <div className="hero-title">
            <h1>Sow, Grow, and Thrive with Agrotech's Bright Horizon.</h1>
          </div>
          <div className="hero-para">
            <p>
              Welcome to the world of agrotech, where innovation meets
              agriculture to revolutionize your farming future. Explore the
              power of agrotech solutions that will help you sow, grow, and
              thrive in a sustainable and efficient manner.
            </p>
          </div>
          <div className="hero-cta">
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="box-left">
            <div className="box1">
              <img src={Img5} alt="img1" />
            </div>
            <div className="box2">
              <div className="box21">
                <img src={Img6} alt="img3" />
              </div>
              <div className="box22">
                <img src={Img7} alt="img6" />
              </div>
            </div>
          </div>
          <div className="box-right">
            <div className="box3">
              <img src={Img8} alt="img4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
