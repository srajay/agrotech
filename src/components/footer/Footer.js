import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-left">
              <div className="footer-logo">
                <Link to="/">
                  <h2>Ilami Agro and Tech Pvt. Ltd.</h2>
                </Link>
              </div>
              <div className="company-info">
                <p>Bhanimandal, Lalitpur, Nepal</p>
                <p>+977 01-4890768</p>
                <div className="social">
                  <a
                    href="https://www.facebook.com/ilamiat"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="https://www.instagram.com/ilami_agro/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://youtube.com/agrotech"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-midA">
              <h1>LINKS</h1>
              <hr />
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/services">Services</Link>
              </p>
              <p>
                <Link to="/products">Our Products</Link>
              </p>
              <p>
                <Link to="/contact">Contact Us</Link>
              </p>
            </div>
            <div className="footer-midB">
              <h1>PARTNERS</h1>
              <hr />
              <p>
                <a
                  href="https://growinnova.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GrowInnova
                </a>
              </p>
              <p>
                <a
                  href="https://libird.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Li-Bird
                </a>
              </p>
              <p>
                <a
                  href="https://www.anamolbiu.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  AnamolBiu
                </a>
              </p>
            </div>
            {/* <div className="footer-right">
              <h1>Products</h1>
              <hr />
              <p>
                <Link to="/news">Announcement</Link>
              </p>
              <p>
                <Link to="/news">Publication</Link>
              </p>
              <p>
                <Link to="/news">Apps</Link>
              </p>
              <p>
                <Link to="/news">Audio & Video</Link>
              </p>
            </div> */}
          </div>
          <div className="footer-copyright">
            <p>
              ALL RIGHTS RESERVED 2023 | &#169; Ilami Agro & Tech | DESIGNED BY
              Margin Tech
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
