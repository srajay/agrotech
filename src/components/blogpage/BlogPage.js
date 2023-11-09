import React from "react";
import "./blogpage.css";
import { Link } from "react-router-dom";

const BlogPage = () => {
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
        </div>
      </div>
    </>
  );
};

export default BlogPage;
