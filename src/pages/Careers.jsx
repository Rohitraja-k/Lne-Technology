import { useEffect, useState } from "react";
import "../styles/careers.css";
import { useNavigate } from "react-router-dom";
import vacancies from "../data/vacancies";
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


    {/* =========================
        VACANCY SCROLL AREA
    ========================= */}

    <div className="job-vacancy-scroll">

      <div className="job-vacancy-grid">

        {vacancies.map((vacancy) => (

          <article
            className="job-card"
            key={vacancy.id}
          >

            {/* CARD TOP */}

            <div className="job-card-top">

              <span className="job-card-number">
                {String(vacancy.id).padStart(2, "0")}
              </span>

              <span className="job-card-type">
                {vacancy.type}
              </span>

            </div>


            {/* CARD CONTENT */}

            <div className="job-card-content">

              <h2 className="job-card-title">
                {vacancy.title}
              </h2>

              <div className="job-card-meta">

                <span>
                  {vacancy.location}
                </span>

                <span>
                  {vacancy.department}
                </span>

              </div>


              <div className="job-card-line"></div>


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
                      <li key={index}>
                        {requirement}
                      </li>
                    )
                  )}

                </ul>

              </div>

            </div>


            {/* CARD FOOTER */}

            <div className="job-card-footer">

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

          </article>

        ))}

      </div>

    </div>


    {/* =========================
        DISCOVER MORE
    ========================= */}

    <div className="discover-more">

      <a
        href="https://in.indeed.com/jobs?q=LNE+Engineering+Pvt+Ltd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discover More

        <img
          src={discoverMore}
          alt="Discover More"
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