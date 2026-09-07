import { useEffect, useState } from 'react';
import '../styles/careers.css';
import { useNavigate } from 'react-router-dom';
import vacancies from '../data/vacancies';
import discoverMore from "../assets/icons/discover-more.svg";

function Careers() {

  const [activeJob, setActiveJob] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const navigate = useNavigate();

  const toggleJob = (id) => {
    setActiveJob(activeJob === id ? null : id);
  };

  return (
    <main>

      {/* =========================
          CAREERS HERO
      ========================= */}

      <section className="careers-hero">
        <div className="careers-hero-container">

          <p className="careers-hero-heading">
            CAREERS
          </p>

          <h1 className="careers-hero-intro">
            Engineer a Better Future.
          </h1>

          <p className="careers-hero-description">
            Be part of a team delivering innovative engineering solutions
            with precision, expertise and reliability.
          </p>

          <button
            className="careers-hero-button"
            onClick={() => navigate("/contact")}
          >
            Join Our Team
          </button>

        </div>
      </section>


      {/* =========================
          JOB VACANCIES
      ========================= */}

      <section className="job-vacancy">

        <div className="job-vacancy-container">

          <div className="job-vacancy-content">

            <p className="job-label">
              Discover our Openings.
            </p>

            <h1 className="job-title">
              Openings / Vacancy in <br />
              LNE Technology
            </h1>

          </div>


          <div className="job-vacancy-list">

            {vacancies.map((vacancy) => (

              <div
                className={`job-listing ${
                  activeJob === vacancy.id ? "job-listing-active" : ""
                }`}
                key={vacancy.id}
              >

                {/* =========================
                    JOB SUMMARY
                ========================= */}

                <div
                  className="job-listing-header"
                  onClick={() => toggleJob(vacancy.id)}
                >

                  <div className="job-number">
                    {String(vacancy.id).padStart(2, "0")}
                  </div>


                  <div className="job-main-info">

                    <h2 className="job-listing-title">
                      {vacancy.title}
                    </h2>

                    <div className="job-meta">

                      <span>
                        {vacancy.department}
                      </span>

                      <span>
                        {vacancy.location}
                      </span>

                      <span>
                        {vacancy.type}
                      </span>

                    </div>

                  </div>


                  <button
                    className="job-expand-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleJob(vacancy.id);
                    }}
                    aria-label={
                      activeJob === vacancy.id
                        ? "Close job details"
                        : "View job details"
                    }
                  >
                    {activeJob === vacancy.id ? "−" : "+"}
                  </button>

                </div>


                {/* =========================
                    JOB DETAILS
                ========================= */}

                {activeJob === vacancy.id && (

                  <div className="job-listing-details">

                    <div className="job-detail-description">

                      <span className="job-detail-label">
                        DESCRIPTION
                      </span>

                      <p>
                        {vacancy.description}
                      </p>

                    </div>


                    <div className="job-detail-requirements">

                      <span className="job-detail-label">
                        REQUIREMENTS
                      </span>

                      <ul>

                        {vacancy.requirements.map(
                          (requirement, index) => (
                            <li key={index}>
                              {requirement}
                            </li>
                          )
                        )}

                      </ul>

                    </div>


                    <div className="job-apply-wrapper">

                      <a
                        href={vacancy.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="job-apply-button"
                      >
                        Apply Now
                        <span>↗</span>
                      </a>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

          <div className="discover-more">
            <a
             href=""            
            >Discover More <img src={discoverMore} alt="Discover-More-option" /></a>
          </div>

        </div>

      </section>


      {/* =========================
          WORK WITH LNE
      ========================= */}

      <section className="careers-about">

        <div className="careers-about-container">

          <div className="careers-about-image">
            {/* <img src={careerAboutBg} alt="Why-Work-with-Us" /> */}
          </div>

          <div className="careers-about-text">

            <p className="careers-about-label">
              WORK WITH LNE
            </p>

            <h2 className="careers-about-intro">
              Where Expertise Meets Opportunity.
            </h2>

            <p className="careers-about-description">
              At LNE, you'll have the opportunity to work alongside
              experienced professionals, contribute to real-world engineering
              projects, and develop practical expertise across diverse
              technical disciplines.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Careers;