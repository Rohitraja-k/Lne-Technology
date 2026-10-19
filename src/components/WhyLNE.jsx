
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/why.css";

const reasons = [
  {
    number: "01",
    title: "Procurement Focus",
    description:
      "A structured approach to sourcing products, spare parts and MRO supplies around your operational requirements.",
  },
  {
    number: "02",
    title: "Supply Chain Support",
    description:
      "Support across procurement, project supply and logistics to help coordinate industrial supply requirements.",
  },
  {
    number: "03",
    title: "Quality-Conscious Approach",
    description:
      "Attention to product requirements, documentation and quality checks throughout the procurement process.",
  },
  {
    number: "04",
    title: "Customer-Centred Solutions",
    description:
      "Solutions shaped around your sourcing needs, supply priorities and specific business requirements.",
  },
];

function WhyLNE() {
  return (
    <section className="why-section" id="why-lne">
      <div className="why-container">
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="why-heading-content">
            <p className="why-label">
              <span className="why-label-line" />
              WHY LNE TECHNOLOGY
            </p>

            <h2>
              A practical approach
              <br />
              <span>to industrial supply.</span>
            </h2>
          </div>

          <p className="why-intro">
            Industrial procurement requires more than finding a product.
            It takes attention to requirements, coordination and the details
            that keep supply processes moving.
          </p>
        </motion.div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <motion.article
              className="why-item"
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="why-item-top">
                <span className="why-number">{reason.number}</span>

                <span className="why-item-arrow" aria-hidden="true">
                  <ArrowUpRight size={19} strokeWidth={1.6} />
                </span>
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="why-footer">
          <p>Have a sourcing or procurement requirement?</p>

          <Link to="/contact" className="why-contact-link">
            Let's talk
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyLNE;
