import React from "react";
import "./partnersection.css";
import GrowInnova from "../../assets/growinnova.png";
import LiBird from "../../assets/li-bird.png";
import AnmolBiu from "../../assets/anamolbiu.png";

const PartnerSection = () => {
  return (
    <>
      <div className="partner-section">
        <div className="partner-content">
          <div className="partner-text">
            <h1>
              Our <br />
              Partners
            </h1>
          </div>
          <div className="partner-card">
            <div className="partner-img">
              <a
                href="https://growinnova.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={GrowInnova} alt="growinnova" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://libird.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={LiBird} alt="li-bird" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://www.anamolbiu.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={AnmolBiu} alt="anmolbiu" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;
