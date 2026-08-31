import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/divisionDetail.css";
import { divisionData } from "../data/divisionData";
import electricalBg from "../assets/bg/electrical.jpg";
import instrumentationBg from "../assets/bg/instrumentation.webp";
import oilAndGasBg from "../assets/bg/oil-and-gas.webp";
import lightingBg from "../assets/bg/lighting.webp";
import supportSystemsBg from "../assets/bg/support-systems.webp";
import concreteDrillingBg from "../assets/bg/concrete-drilling.webp";
import toolsBg from "../assets/bg/tools.webp";


function DivisionDetail() {
  const { divisionName } = useParams();
  const navigate = useNavigate();

  const [openService, setOpenService] = useState(null);

  const division = divisionData[divisionName];

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  if (!division) {
    return (
      <section className="division-detail">
        <div className="division-detail-container">
          <h1>Division Not Found</h1>

          <p>
            The division you are looking for does not exist.
          </p>

          <button
            className="back-button"
            onClick={() => navigate("/divisions")}
          >
            Back to Divisions
          </button>
        </div>
      </section>
    );
  }

  const divisionBackgrounds = {
  electrical: electricalBg,
  instrumentation: instrumentationBg,
  "oil-and-gas": oilAndGasBg,
  lighting: lightingBg,
  "support-systems": supportSystemsBg,
  "concrete-drilling-and-sawing": concreteDrillingBg,
  tools: toolsBg,
};

  return (
    <main className="division-detail">

      {/* =========================================
          HERO
      ========================================= */}

  <section
  className="division-detail-hero"
  style={{
  backgroundImage: `
  linear-gradient(
    90deg,
    rgba(7, 16, 24, .95) 0%,
    rgba(7, 16, 24, 0.75) 45%,
    rgba(7, 16, 24, .45) 100%
  ),
  url(${divisionBackgrounds[divisionName]})`,
  }}
  >

  <div className="division-detail-container">

    <button
      className="division-back"
      onClick={() => navigate("/divisions")}
    >
      ← Back to Divisions
    </button>

    <p className="division-detail-label">
      OUR DIVISION
    </p>

    <h1 className="division-detail-title">
      {division.name}
    </h1>

    <span className="division-detail-number">
      {String(Object.keys(divisionData).indexOf(divisionName) + 1)
        .padStart(2, "0")}
    </span>

    <p className="division-detail-description">
      {division.description}
    </p>

  </div>

</section>


      {/* =========================================
          SERVICES
      ========================================= */}

      <section className="division-services">

        <div className="division-detail-container">

          <div className="services-header">
            <div className="services-section-number">
              01
            </div>

            <p className="division-detail-label">
              WHAT WE PROVIDE
            </p>
            <h2>
              Our Services
            </h2>

            <p>
              Explore our specialized services and the solutions
              available within this division.
            </p>

          </div>


          {/* Services List */}

          <div className="services-list">

            {division.services.map((service, index) => {

              const isOpen = openService === index;

              return (
                <div
                  className={`service-item ${
                    isOpen ? "service-item-open" : ""
                  }`}
                  key={service.name}
                >

                  {/* Service Header */}

                  <button
                    className="service-header"
                    onClick={() => toggleService(index)}
                    aria-expanded={isOpen}
                  >

                    <div className="service-title-wrapper">

                      <span className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <h3>
                          {service.name}
                        </h3>

                        <p>
                          {service.description}
                        </p>

                      </div>

                    </div>


                    <span className="service-icon">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  {/* Sub Services */}

                  <div
                    className={`sub-services ${
                      isOpen ? "sub-services-open" : ""
                    }`}
                  >

                    <div className="sub-services-inner">

                      <p className="sub-services-label">
                        SUB-SERVICES
                      </p>

                      <div className="sub-services-list">

                        {service.subServices.map((subService) => (
                          <div
                            className="sub-service"
                            key={subService}
                          >
                            <span>→</span>

                            <p>
                              {subService}
                            </p>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}

export default DivisionDetail;