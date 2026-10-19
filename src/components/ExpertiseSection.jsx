
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import "../styles/expertise.css";

const expertiseItems = [
  {
    number: "01",
    title: "Services",
    description:
      "Procurement, warehouse support, quality control, spare parts procurement, project supply management and logistics.",
    tag: "WHAT WE DO",
    path: "/services",
  },
  {
    number: "02",
    title: "Solutions",
    description:
      "Practical approaches to MRO supply, strategic sourcing, inventory planning, data management and supply chain needs.",
    tag: "HOW WE SUPPORT YOU",
    path: "/solutions",
  },
  {
    number: "03",
    title: "Disciplines",
    description:
      "Explore our procurement services and project supply capabilities for industrial requirements.",
    tag: "OUR AREAS OF FOCUS",
    path: "/disciplines",
  },
];

function ExpertiseSection() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-container">
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="expertise-heading-content">
            <p className="expertise-label">
              <span className="expertise-label-line" />
              EXPLORE LNE TECHNOLOGY
            </p>

            <h2>
              The right support.
              <br />
              <span>For your supply chain.</span>
            </h2>
          </div>

          <p className="expertise-intro">
            Discover our services, explore our solutions and understand the
            disciplines that support your procurement and supply requirements.
          </p>
        </motion.div>

        <div className="expertise-list">
          {expertiseItems.map((item, index) => (
            <motion.div
              className="expertise-item"
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <span className="expertise-number">{item.number}</span>

              <div className="expertise-info">
                <span className="expertise-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <Link
                to={item.path}
                className="expertise-link"
                aria-label={`Explore our ${item.title.toLowerCase()}`}
              >
                <ArrowUpRight
                  className="expertise-arrow"
                  size={22}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="expertise-footer">
          <p>Have a specific procurement or supply requirement?</p>

          <Link to="/contact" className="expertise-contact-link">
            Let's discuss it
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
