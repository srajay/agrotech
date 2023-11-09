import React from "react";
import "./servicesection.css";
import { Link } from "react-router-dom";
import Img4 from "../../assets/img4.webp";
import Img13 from "../../assets/img13.webp";
import Img8 from "../../assets/img8.webp";
import Img17 from "../../assets/img17.webp";

import EastIcon from "@mui/icons-material/East";

const ServiceSection = () => {
  return (
    <>
      <div className="service-section">
        <div className="service-content">
          <div className="service-text">
            <div className="service-text-title">
              <h1>
                Our <br />
                Services
              </h1>
            </div>
            <div className="service-text-para">
              <p>
                Our dedicated team of experts conducts cutting-edge research and
                development, ensuring that the latest innovations reach your
                fields.
              </p>

              <div className="service-link">
                <Link to="/services">
                  <p>Learn more about services</p>
                  <p>
                    <EastIcon />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="card">
              <div className="card-img">
                <img src={Img4} alt="agriculture-research" />
              </div>
              <div className="card-text">
                <h3>Agriculture Research & Development</h3>
                <p>
                  Innovative AR4D for developing & identifying climate smart and
                  appropriate technologies.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <h3>Enterprising & Commercialization</h3>
                <p>
                  Product development, branding and commercialisation of
                  biofortifed, nutrient dense crops, health foods, livestocks
                  and dairy products.
                </p>
              </div>
              <div className="card-img">
                <img src={Img8} alt="enterprising" />
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Img17} alt="training" />
              </div>
              <div className="card-text">
                <h3>Training Programme</h3>
                <p>
                  Develop confident, self-reliant, competitive and highly
                  professional workforce on various trades of agri-food industry
                  & natural resources sector.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-text">
                <h3>Consulting Services</h3>
                <p>
                  Providing strategic as well as customized scientific &
                  technical services to improve productivity, quality and
                  efficiency of agri-food industry.
                </p>
              </div>
              <div className="card-img">
                <img src={Img13} alt="consulting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
