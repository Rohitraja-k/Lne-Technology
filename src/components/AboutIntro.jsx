
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function AboutIntro() {
  return (
    <section className="about-intro" id="about-intro">
      <div className="about-intro-container">
        <motion.div
          className="about-intro-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="about-intro-label">
            <span className="about-intro-label-line" />
            WHO WE ARE
          </p>

          <h2>
            Connecting needs.
            <br />
            <span>Enabling supply.</span>
            <br />
            Building trust.
          </h2>
        </motion.div>

        <motion.div
          className="about-intro-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="about-intro-lead">
            LNE Technology supports industrial and commercial requirements
            through procurement, MRO supplies, spare parts sourcing and
            project supply.
          </p>

          <p>
            We recognise that every requirement is different. Understanding
            product specifications, sourcing needs and delivery expectations
            is an important part of finding a suitable supply solution.
          </p>

          <p>
            Our focus is on a practical, customer-oriented approach that helps
            businesses navigate procurement requirements and coordinate the
            supplies needed for their operations.
          </p>

          <Link to="/services" className="about-intro-link">
            <span>Explore our services</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutIntro;
