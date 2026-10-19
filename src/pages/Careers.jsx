
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import vacancies from "../data/vacancies";
import discoverMore from "../assets/icons/discover-more.svg";
import "../styles/careers.css";

function Careers() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="careers-page">
      {/* =========================
          CAREERS HERO
      ========================= */}
      <section className="careers-hero">
        <div className="careers-hero-container">
          <p className="careers-hero-heading">
            <span className="careers-label-line" />
            CAREERS AT LNE
          </p>

          <h1 className="careers-hero-intro">
            Engineer a Better Future.
          </h1>

          <p className="careers-hero-description">
            Be part of a team delivering engineering and industrial
            supply solutions with a focus on practical expertise,
            quality and reliability.
          </p>

          <button
            type="button"
            className="careers-hero-button"
            onClick={() => navigate("/contact")}
          >
            Join Our Team
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div
          className="careers-hero-bottom-fade"
          aria-hidden="true"
        />
      </section>

      {/* =========================
          JOB VACANCIES
      ========================= */}
      <section className="job-vacancy" id="openings">
        <div className="job-vacancy-container">
          <div className="job-vacancy-content">
            <p className="job-label">
              <span className="careers-label-line" />
              DISCOVER OUR OPENINGS
            </p>

            <h2 className="job-title">
              Opportunities to
              <br />
              grow with LNE.
            </h2>

            <p className="job-intro-description">
              Explore the opportunities listed below and find a role
              that matches your interests and experience.
            </p>
          </div>

          {/* Scrollable vacancy panel */}
          <div
            className="job-vacancy-scroll"
            aria-label="Available job vacancies"
            tabIndex={0}
          >
            {vacancies.length > 0 ? (
              <div className="job-vacancy-grid">
                {vacancies.map((vacancy) => (
                  <article
                    className="job-card"
                    key={vacancy.id}
                  >
                    {/* Card top */}
                    <div className="job-card-top">
                      <span className="job-card-number">
                        {String(vacancy.id).padStart(2, "0")}
                      </span>

                      <span className="job-card-type">
                        {vacancy.type}
                      </span>
                    </div>

                    {/* Card content */}
                    <div className="job-card-content">
                      <h3 className="job-card-title">
                        {vacancy.title}
                      </h3>

                      <div className="job-card-meta">
                        <span>
                          <span
                            className="job-meta-label"
                            aria-hidden="true"
                          >
                            LOCATION
                          </span>
                          {vacancy.location}
                        </span>

                        <span>
                          <span
                            className="job-meta-label"
                            aria-hidden="true"
                          >
                            DEPARTMENT
                          </span>
                          {vacancy.department}
                        </span>
                      </div>

                      <div
                        className="job-card-line"
                        aria-hidden="true"
                      />

                      <p className="job-card-description">
                        {vacancy.description}
                      </p>

                      <div className="job-card-requirements">
                        <span className="job-card-label">
                          REQUIREMENTS
                        </span>

                        <ul>
                          {vacancy.requirements.map(
                            (requirement, index) => (
                              <li key={`${vacancy.id}-${index}`}>
                                {requirement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="job-card-footer">
                      <a
                        href={vacancy.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="job-apply-button"
                        aria-label={`Apply for ${vacancy.title}`}
                      >
                        Apply Now
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="job-vacancy-empty">
                <h3>No vacancies listed right now</h3>
                <p>
                  Please check back later or contact LNE Technology
                  to enquire about future opportunities.
                </p>
                <button
                  type="button"
                  className="job-empty-contact"
                  onClick={() => navigate("/contact")}
                >
                  Contact LNE <span aria-hidden="true">↗</span>
                </button>
              </div>
            )}
          </div>

          {/* Discover more */}
          <div className="discover-more">
            <a
              href="https://in.indeed.com/jobs?q=LNE+Engineering+Pvt+Ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover More
              <img
                src={discoverMore}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          WORK WITH LNE
      ========================= */}
      <section className="careers-about">
        <div className="careers-about-container">
          <div
            className="careers-about-image"
            role="img"
            aria-label="Industrial and engineering work environment"
          />

          <div className="careers-about-text">
            <p className="careers-about-label">
              <span className="careers-label-line" />
              WORK WITH LNE
            </p>

            <h2 className="careers-about-intro">
              Where Expertise Meets Opportunity.
            </h2>

            <p className="careers-about-description">
              At LNE, you can contribute to industrial and commercial
              requirements while developing your skills and practical
              knowledge. We value a thoughtful, responsible and
              customer-focused approach to our work.
            </p>

            <button
              type="button"
              className="careers-about-button"
              onClick={() => navigate("/contact")}
            >
              Connect With Us
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;
