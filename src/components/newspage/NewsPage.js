import React from "react";
import "./newspage.css";
import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <div className="newspage">
        <div className="newspage-content">
          <div className="newspage-text">
            <h1>SORRY</h1>
            <p>News content is currently not available.</p>
          </div>
          <div className="newspage-cta">
            <Link to="/">
              <button>Bact to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
