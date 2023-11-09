import React from "react";
import "./herosection.css";
import { Link } from "react-router-dom";
import Img4 from "../../assets/img4.webp";
import Img9 from "../../assets/img9.webp";
import Img17 from "../../assets/img17.webp";
import Img38 from "../../assets/img38.webp";
const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Sow and Grow For a Happy Harvest with Safe Food Production System.
            </h1>
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
              <img src={Img4} alt="img1" />
            </div>
            <div className="box2">
              <div className="box21">
                <img src={Img9} alt="img3" />
              </div>
              <div className="box22">
                <img src={Img17} alt="img6" />
              </div>
            </div>
          </div>
          <div className="box-right">
            <div className="box3">
              <img src={Img38} alt="img4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
