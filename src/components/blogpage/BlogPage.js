import React, { useState } from "react";
import "./blogpage.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const BlogPage = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="blogpage">
        <div className="blogpage-content">
          <div className="blogpage-text">
            <h1>SORRY</h1>
            <p>Blog content is currently not available.</p>
          </div>
          <div className="blogpage-cta">
            <Link to="/">
              <button>Bact to Home</button>
            </Link>
          </div>
          <div className="text-nav">
            {!navOpen ? (
              <div className="nav-close" onClick={() => setNavOpen(true)}>
                <MenuIcon />
              </div>
            ) : (
              <div className="nav-open">
                <div className="close-icon" onClick={() => setNavOpen(false)}>
                  <CloseIcon />
                </div>
                <div className="nav-item">
                  <li>Home</li>
                  <li>Services</li>
                  <li>Products</li>
                  <li>News</li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
