import React from "react";
import "./header.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <a href="info@aronengineering.com">
              <p className="header-icon">
                <DraftsIcon />
              </p>

              <p>agroilami@gmail.com</p>
            </a>
          </div>
          <div className="header-right">
            <div className="header-links">
              <a
                href="https://www.facebook.com/ilamiat"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://linkedin.com/agrotech"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://youtube.com/agrotech"
                target="_blank"
                rel="noreferrer noopener"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/ilami_agro/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
