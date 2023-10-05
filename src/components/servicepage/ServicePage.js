import React from "react";
import "./servicepage.css";
import Img6 from "../../assets/img6.jpg";
import Img7 from "../../assets/img7.jpg";
import Img8 from "../../assets/img8.jpg";
import Img9 from "../../assets/img9.jpg";

const ServicePage = () => {
  return (
    <>
      <div className="servicepage">
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img6} alt="agriculture-research" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>
                  Agriculture Research for Development (AR4D) and farming
                  services
                </p>
              </div>

              <div className="servicepage-para">
                <ul>
                  <li>
                    Innovative AR4D for developing & identifying climate smart
                    and appropriate technologies.
                  </li>
                  <li>
                    Providing latest science and technological services on crop
                    production and post harvest management.
                  </li>
                  <li>
                    Fast tracking commercialization of best bet technologies and
                    products with comparative advantages.
                  </li>
                  <li>Enterprising seed sector with comparative advantage.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img9} alt="agriculture-training" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>Training and capacity building</p>
              </div>

              <div className="servicepage-para">
                <ul>
                  <li>
                    Develop confident, self-reliant, competitive and highly
                    professional workforce on various trades of agri-food
                    industry & natural resources sector.
                  </li>
                  <li>
                    Updating and upgrading practitioners and field level
                    technicians by imparting in-depth knowledge on latest
                    advances in agriculture science and technology.
                  </li>
                  <li>
                    Engaging students from the university and Agricultural Trade
                    Schools for providing vital practical skills and
                    experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img7} alt="agriculture-commercialisation" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>
                  Product development, processing, enterprising and
                  commercialisation
                </p>
              </div>

              <div className="servicepage-para">
                <ul>
                  <li>
                    Product development, branding and commercialisation of
                    biofortifed, nutrient dense crops & health foods.
                  </li>
                  <li>
                    Connecting producers & entrepreneurs with cutting edge
                    science & technologies.
                  </li>
                  <li>
                    Capitalising on private sector-led priority value chains.
                  </li>
                  <li>
                    Identifying niche markets, market corridors for various
                    agricultural and consumer products.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img8} alt="agriculture-consulting" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>Consulting and farming services</p>
              </div>

              <div className="servicepage-para">
                <ul>
                  <li>
                    Providing strategic as well as customized scientific &
                    technical services to improve productivity, quality and
                    efficiency of agri-food industry.
                  </li>
                  <li>
                    Developing Master Plans, project and programme evaluation,
                    outcome & impact assessment for stakeholders.
                  </li>
                  <li>Policy analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
