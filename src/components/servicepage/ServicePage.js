import React from "react";
import "./servicepage.css";
import GoToTop from "../GoToTop";
import Img4 from "../../assets/img4.webp";
import Img13 from "../../assets/img13.webp";
import Img8 from "../../assets/img8.webp";
import Img17 from "../../assets/img17.webp";
import Img29 from "../../assets/img29.webp";
const ServicePage = () => {
  return (
    <>
      <div className="servicepage">
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img4} alt="agriculture-research" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>Agriculture Research for Development (AR4D)</p>
              </div>

              <div className="servicepage-para">
                <ul>
                  <li>
                    Regenerative agriculture and safe food production
                    technologies.
                  </li>
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
                  <li>
                    Enterprising plant and animal-based products with
                    comparative advantage.
                  </li>
                  <li>Circular Bio-economy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img29} alt="agriculture-research" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>Laboratory analytics and R&D</p>
              </div>

              <div className="servicepage-para">
                <ul>
                  <li>
                    Survey and surveillance of animal diseases and animal
                    disease diagnostic.
                  </li>
                  <li>
                    Mastitis research-bacterial isolation, antibiotic
                    sensitivity test.
                  </li>
                  <li>Bacteriological analysis of water samples.</li>
                  <li>Karyotyping of local animal breeds.</li>
                  <li>
                    New research topic: biological control of ticks, mite and
                    other parasites.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="servicepage-content">
          <div className="content-card">
            <div className="servicepage-img">
              <img src={Img17} alt="agriculture-training" />
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
              <img src={Img8} alt="agriculture-commercialisation" />
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
              <img src={Img13} alt="agriculture-consulting" />
            </div>
            <div className="servicepage-text">
              <div className="servicepage-title">
                <p>Technical Assistance and Farming services</p>
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
                  <li>
                    Design , plantation and management of tea gardens and fruit
                    orchards.
                  </li>
                  <li>Farm advisory services.</li>
                  <li>Irrigation development and support services.</li>
                  <li>Policy analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default ServicePage;
