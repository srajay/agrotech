import React from "react";
import "./principlesection.css";
import AgricultureIcon from "@mui/icons-material/Agriculture";
const PrincipleSection = () => {
  return (
    <>
      <div className="principle-section">
        <div className="principle-content">
          <div className="principle-card">
            <AgricultureIcon style={{ fontSize: "4rem" }} />

            <h1>
              Core <br /> Principle
            </h1>
            <p>Ilami Agro & Tech</p>
          </div>
          <div className="principle-title">
            <div className="line"></div>
            <p>Principle 1</p>
            <div className="line"></div>
            <p>Principle 2</p>
            <div className="line"></div>
            <p>Principle 3</p>
            <div className="line"></div>
          </div>
          <div className="principle-desc">
            <p>Use of participatory and ovel approaches to R&D.</p>

            <p>
              Contribute to creating local employment opportunities by using
              science for development.
            </p>

            <p>
              Develop and promote competitiveness and professionalism in the
              company & its work sphere.
            </p>
          </div>
          <div className="principle-list-mob">
            <div className="line"></div>
            <div className="principle-title-mob">
              <p>Principle 1</p>
            </div>

            <div className="principle-desc-mob">
              <p>Use of participatory and ovel approaches to R&D.</p>
            </div>
            <div className="line"></div>
            <div className="principle-title-mob">
              <p>Principle 2</p>
            </div>
            <div className="principle-desc-mob">
              <p>
                Contribute to creating local employment opportunities by using
                science for development.
              </p>
            </div>
            <div className="line"></div>
            <div className="principle-title-mob">
              <p>Principle 2</p>
            </div>
            <div className="principle-desc-mob">
              <p>
                Develop and promote competitiveness and professionalism in the
                company & its work sphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipleSection;
