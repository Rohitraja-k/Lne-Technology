import { useEffect } from 'react';
import '../styles/careers.css';
import { useNavigate } from 'react-router-dom';
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
          <h2 className="careers-why-heading">Build Your Career With Us</h2>
          <div className="careers-why-grid">

            <div className="careers-why-item">

              <p className="careers-why-number">01</p>
              <h1 className="careers-why-title">Technical Expertise</h1>
              <p className="careers-why-description">Work alongside experienced professionals and develop practical knowledge across engineering disciplines</p>

            </div>

            <div className="careers-why-item">

              <p className="careers-why-number">02</p>
              <h1 className="careers-why-title">Diverse Project</h1>
              <p className="careers-why-description">Gain exposure to real-world projects serving different industries and technical requirements.</p>

            </div>

            <div className="careers-why-item">

              <p className="careers-why-number">03</p>
              <h1 className="careers-why-title">Professional Growth</h1>
              <p className="careers-why-description">Build your skills through hands-on experience, responsibility and continuous learning.</p>

            </div>

            <div className="careers-why-item">

              <p className="careers-why-number">04</p>
              <h1 className="careers-why-title">Safety & Excellance</h1>
              <p className="careers-why-description">Be part of a team committed to safety, quality and reliable engineering practices.</p>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;