
import { motion } from "framer-motion";

import "../styles/about.css";

function AboutValues() {
  const values = [
    {
      number: "01",
      title: "Technical Expertise",
      description:
        "We bring engineering knowledge and practical understanding to industrial requirements, helping identify solutions suited to each application.",
      className: "about-value-01",
    },
    {
      number: "02",
      title: "Quality Driven",
      description:
        "We pay attention to product specifications, quality expectations and application needs when supporting procurement and supply requirements.",
      className: "about-value-02",
    },
    {
      number: "03",
      title: "Reliable Partnerships",
      description:
        "We value clear communication, responsiveness and a customer-focused approach to building dependable, long-term working relationships.",
      className: "about-value-03",
    },
  ];

  return (
    <section className="about-values">
      <div className="about-values-container">
        <motion.div
          className="about-values-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="about-intro-label">
            <span className="about-intro-label-line" />
            WHAT DRIVES US
          </p>

          <h2>
            Experience that matters.
            <br />
            <span>Standards that last.</span>
          </h2>

          <p className="about-values-description">
            The principles behind how we approach industrial supply,
            customer requirements and long-term working relationships.
          </p>
        </motion.div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <motion.article
              className={`about-value-card ${value.className}`}
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <span className="about-value-number">
                {value.number}
              </span>

              <div className="about-value-content">
                <span
                  className="about-value-accent"
                  aria-hidden="true"
                />

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
