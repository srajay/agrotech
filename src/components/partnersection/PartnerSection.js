import React from "react";
import "./partnersection.css";
import GrowInnova from "../../assets/growinnova.png";
import LiBird from "../../assets/li-bird.png";
import AnmolBiu from "../../assets/anamolbiu.png";
import Kirdarc from "../../assets/kirdarc_logo.jpeg";
import SSDC from "../../assets/ssdc.png";
import Hurac from "../../assets/hurac-rolpa.png";
import Sahas from "../../assets/sahas-nepal.png";
import KDCN from "../../assets/KDCN-pyuthan.png";
import HWEPC from "../../assets/hwepc.png";
import Muktinath from "../../assets/muktinath-krishi.png";

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
            <div className="partner-img">
              <a
                href="https://kirdarc.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Kirdarc} alt="kirdarc" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://ssdcnepal.org.np/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={SSDC} alt="ssdc" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="http://www.hurac.org.np/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Hurac} alt="hurac" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://www.sahasnepal.org.np/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Sahas} alt="sahas" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://kdcnepal.org.np/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={KDCN} alt="kdcn" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://hwepc.org.np/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={HWEPC} alt="hwepc" />
              </a>
            </div>
            <div className="partner-img">
              <a
                href="https://www.muktinathkrishi.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Muktinath} alt="muktinath" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;
