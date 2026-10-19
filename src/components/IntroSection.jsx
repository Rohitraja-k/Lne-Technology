
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import "../styles/intro.css";
import aboutHeroImg from "../assets/bg/oiil.png";

function IntroSection() {
  return (
    <section className="intro-section" id="about-intro">
      <div className="intro-container">
        <motion.div
          className="intro-image"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={aboutHeroImg}
            alt="LNE Technology industrial engineering and supply solutions"
            loading="lazy"
          />

          <div className="intro-image-overlay" aria-hidden="true" />

          <div className="intro-image-caption">
            <span className="intro-caption-line" />
            <span>ENGINEERING &amp; PROCUREMENT</span>
          </div>

          <span className="intro-image-index" aria-hidden="true">
            LNE / 01
          </span>
        </motion.div>

        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="intro-heading">
            <p className="intro-label">
              <span className="intro-label-line" />
              ABOUT LNE TECHNOLOGY
            </p>

            <h2>
              Engineering expertise.
              <br />
              <span>Reliable solutions.</span>
              <br />
              Built around you.
            </h2>
          </div>

          <div className="intro-content">
            <p className="intro-description">
              Connecting industrial requirements with dependable procurement,
              MRO supplies, spare parts sourcing and project supply solutions.
            </p>

            <p className="intro-secondary">
              We help businesses navigate sourcing and supply challenges
              through a practical, customer-focused approach. Our aim is to
              support operational continuity with solutions aligned to each
              requirement.
            </p>

            <Link to="/about" className="intro-link">
              <span>Discover LNE Technology</span>
              <span className="intro-link-icon" aria-hidden="true">
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default IntroSection;
