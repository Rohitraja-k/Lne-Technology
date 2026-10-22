import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.css";

import IntroSection from "../components/IntroSection.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import WhyLNE from "../components/WhyLNE.jsx";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-background-grid" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-label">
            <span className="hero-label-line" />
            LNE TECHNOLOGY
          </p>

          <h1>
            Global Sourcing 
            <br />
            <span>Company.</span>
          </h1>

          <p className="hero-description"><b>LNE TECHNOLOGY </b>
            provides end to end sourcing services
            from all key emerging supply markets in the world.
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="button1"
              onClick={() => navigate("/solutions")}
            >
              Explore Our Solutions
              <span className="hero-button-arrow" aria-hidden="true">
                ↗
              </span>
            </button>

            <button
              type="button"
              className="button2"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Requirements
              <span className="hero-button-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </div>

          <div className="hero-bottom-note">
            <span className="hero-status-dot" />
            <span>Procurement · MRO · Project Supply · Logistics</span>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span />
          <p>SCROLL TO EXPLORE</p>
        </div>

        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      <IntroSection />
      <ExpertiseSection />
      <WhyLNE />
    </main>
  );
}

export default Home;