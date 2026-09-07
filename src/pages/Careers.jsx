import { useEffect } from 'react';
import '../styles/careers.css';
import { useNavigate } from 'react-router-dom';
import vacancies from '../data/vacancies';
// import careerAboutBg from "../assets/bg/career-work.webp";

function Careers() {

  useEffect(()=>{
    window.scrollTo({
    top:0,
    behavior:"smooth"
  });
  },[]);

  const navigate = useNavigate();
  

  return (
    <main>
      <section className="careers-hero">
        <div className="careers-hero-container">
          <p className="careers-hero-heading">CAREERS</p>
          <h1 className="careers-hero-intro">
            Engineer a Better Future.
          </h1>
          <p className="careers-hero-description">Be part of a team delivering innovative engineering solutions with precision, expertise and reliability.</p>
          <button className="careers-hero-button"
          onClick={()=> navigate("/contact")}
          >
              Join Our Team
          </button>
        </div>
      </section>

      {/* job vacancy section */}

      <section className="job-vacancy">
        <div className="job-vacancy-container">
          <div className="job-vacancy-content">
            <p className="job-label">Discover our Openings.</p>
            <h1 className="job-title">Openings / Vacancy in <br /> Lne Technology</h1>
          </div>
          <div className="job-vacancy-grid">

            {vacancies.map((vacancy) => (

              <div className="job-card" key={vacancy.id}>

                {/* Job Title / Department */}
                <div className="job-card-header">

                  <p>{vacancy.department}</p>

                  <h2>{vacancy.title}</h2>

                </div>


                {/* Job Details */}
                <div className="job-card-details">

                  <div>
                    <span>Location</span>
                    <p>{vacancy.location}</p>
                  </div>

                  <div>
                    <span>Type</span>
                    <p>{vacancy.type}</p>
                  </div>

                </div>


                {/* Description */}
                <div className="job-card-description">

                  <p>
                    {vacancy.description}
                  </p>

                </div>


                {/* Requirements */}
                <div className="job-card-requirements">

                  <h3>Requirements</h3>

                  <ul>

                    {vacancy.requirements.map((requirement, index) => (

                      <li key={index}>
                        {requirement}
                      </li>

                    ))}

                  </ul>

                </div>


                {/* Apply Button */}
                <a
                  href={vacancy.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="job-apply-button"
                >
                  Apply Now
                </a>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/*  career about section*/}

      <section className="careers-about">
        <div className="careers-about-container">
          <div className="careers-about-image">
            {/* } <img src={careerAboutBg} alt="Why-Work-with-Us" /> */}  
          </div>
          <div className="careers-about-text">
            <p className="careers-about-label">WORK WITH LNE</p>
          <h2 className="careers-about-intro">Where Expertise Meets Opportunity.</h2>
          <p className="careers-about-description">At LNE, you'll have the opportunity to work alongside experienced professionals, contribute to real-world engineering projects, and develop practical expertise across diverse technical disciplines.</p>
          </div>
        </div>
      </section>

      <section className="careers-why">
        <div className="careers-why-container">
          <p className="careers-why-label">WHY <b>LNE</b></p>
          <h2 className="careers-why-heading">Build a career with purpose.</h2>
          <div className="careers-why-grid">

            <div className="careers-why-item">

              <p className="careers-why-number">01</p>
              <h1 className="careers-why-title">Learn & Grow</h1>
              <p className="careers-why-description">Develop your technical knowledge through hands-on experience, guidance and exposure to real engineering environments.</p>

            </div>

            <div className="careers-why-item">

              <p className="careers-why-number">02</p>
              <h1 className="careers-why-title">Make an Impact</h1>
              <p className="careers-why-description">Take responsibility for meaningful work that contributes directly to projects and customers.</p>

            </div>

            <div className="careers-why-item">

              <p className="careers-why-number">03</p>
              <h1 className="careers-why-title">Work Across Disciplines</h1>
              <p className="careers-why-description">Gain exposure to different engineering fields and understand how specialist teams work together.</p>

            </div>

            <div className="careers-why-item">

              <p className="careers-why-number">04</p>
              <h1 className="careers-why-title">Grow with LNE</h1>
              <p className="careers-why-description">Build your career within a company that values initiative, responsibility and continuous improvement.</p>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;