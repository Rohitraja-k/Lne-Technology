import { Link } from "react-router-dom";
import "../styles/intro.css";
import aboutHeroImg from "../assets/bg/about-hero-img.webp";

function IntroSection(){
  return(
    <section className="intro-section">

      <div className="intro-container">

      
      <div className="intro-image">
        <img src={aboutHeroImg} alt="About-Us" />
      </div>


      <div className="intro-text">
        
        <div className="intro-heading">
          <p className="section-label">ABOUT LNE TECHNOLOGIES</p>

          <h2>
            Engineering expertise.
            <br />
            Reliable solutions.
            <br />
            Built around you.
          </h2>
        </div>

        <div className="intro-content">

          <p className="intro-description">
            LNE Technologies delivers comprehensive engineering and
            technical solutions designed to meet the requirements of
            demanding industrial and commercial environments.
          </p>

          <p>
            With expertise across multiple specialized divisions,
            we focus on delivering reliable solutions while maintaining
            high standards of quality, safety and customer satisfaction.
          </p>

          <Link to  ="/about" className="intro-link">
            Discover LNE Technologies
            <span>→</span>
          </Link>
          
        </div>
      </div>

      </div>

    </section>
  )
}

export default IntroSection;