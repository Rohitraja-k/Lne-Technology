
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import "../styles/about.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="about-hero-label">
            <span className="about-hero-label-line" />
            ABOUT LNE TECHNOLOGY
          </p>

          <h1>
            Connecting industry.
            <br />
            <span>Supporting what matters.</span>
          </h1>

          <p className="about-hero-description">
            We support industrial and commercial requirements through
            procurement, MRO supplies, spare parts sourcing and project
            supply solutions — with a focus on understanding each customer's
            needs.
          </p>

          <div className="about-hero-actions">
            <Link to="/services" className="about-hero-primary">
              Explore Our Services
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>

            <Link to="/contact" className="about-hero-secondary">
              Get in Touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        <a
          href="#about-intro"
          className="about-hero-scroll"
          aria-label="Scroll to learn about LNE Technology"
        >
          <span className="about-hero-scroll-icon">
            <ArrowDown size={16} aria-hidden="true" />
          </span>
          <span>DISCOVER LNE</span>
        </a>

        <div className="about-hero-bottom-fade" aria-hidden="true" />
      </div>
    </section>
  );
}

export default AboutHero;
