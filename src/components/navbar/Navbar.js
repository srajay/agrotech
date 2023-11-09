import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import AgroLogo from "../../assets/agro-logo.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <Link to="/">
            <img src={AgroLogo} alt="agrologo" />
          </Link>
        </div>
        <div className="navbar-links">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <p>Our Products</p>
            </Link>
          </li>
          {/* <li>
            <Link to="/news">
              <p>News</p>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/blog">
              <p>Blog</p>
            </Link>
          </li> */}
          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </div>
        <div className="navbar-mob">
          {!navOpen ? (
            <div className="nav-close" onClick={() => setNavOpen(true)}>
              <MenuIcon style={{ fontSize: "2.5rem" }} />
            </div>
          ) : (
            <div className="nav-open" onClick={() => setNavOpen(false)}>
              <div className="close-icon">
                <CloseIcon style={{ fontSize: "2.5rem" }} />
              </div>

              <div className="navbar-items">
                <li>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <p>Services</p>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <p>Our Products</p>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/news">
                    <p>News</p>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/blog">
                    <p>Blog</p>
                  </Link>
                </li> */}
                <li>
                  <Link to="/contact">
                    <button>Contact</button>
                  </Link>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="scroll-top">
        <button onClick={scrollToTop}>
          <KeyboardDoubleArrowUpIcon />
        </button>
      </div>
    </>
  );
};

export default Navbar;
