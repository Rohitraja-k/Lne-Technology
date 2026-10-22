
import { Link, useParams } from "react-router-dom";
import { offeringGroups } from "../data/offerings";
import "../styles/offerings.css";

/*
  Industrial imagery for individual offerings.
  These are remote Unsplash image URLs; local licensed assets
  can replace them later for more reliable production delivery.
*/
const offeringImages = {
  "procurement-shipping":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",

  "quality-control":
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85",

  "spare-parts-procurement":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",

  "supply-chain-project-management":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",

  "logistics-shipping":
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=85",

  "mro-supply":
    "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",

  "master-data-management":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",

  "supply-chain-financing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",

  "spare-parts-availability":
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",

  "strategic-sourcing-mro-data-enrichment":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",

  "global-mro-procurement-excellence":
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",

  "plant-maintenance-mro-spare-parts-management":
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=85",

  "procurement-services":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",

  "project-supply":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
};

const groupImages = {
  services:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  solutions:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=85",
  disciplines:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
};

function OfferingDetail({ groupKey }) {
  const { slug } = useParams();

  const group = offeringGroups.find(
    (item) => item.path === `/${groupKey}`
  );

  const offering = group?.items.find((item) => item.slug === slug);

  if (!group || !offering) {
    return (
      <main className="offerings-page offering-not-found">
        <div className="offerings-container">
          <p className="offerings-eyebrow">LNE TECHNOLOGY</p>
          <h1>Page not found</h1>
          <p>The requested offering could not be found.</p>
          <Link to="/" className="offerings-button">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  const image =
    offeringImages[offering.slug] || groupImages[groupKey];

  const currentIndex = group.items.findIndex(
    (item) => item.slug === offering.slug
  );

  const relatedOfferings = group.items
    .filter((item) => item.slug !== offering.slug)
    .sort((a, b) => {
      const aDistance = Math.abs(
        group.items.findIndex((item) => item.slug === a.slug) -
          currentIndex
      );

      const bDistance = Math.abs(
        group.items.findIndex((item) => item.slug === b.slug) -
          currentIndex
      );

      return aDistance - bDistance;
    })
    .slice(0, 3);

  const processSteps = [
    {
      number: "01",
      title: "Understand",
      description:
        "Clarify the requirement, specifications, priorities, and expected timeline.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Identify suitable sourcing or coordination options based on the agreed scope.",
    },
    {
      number: "03",
      title: "Coordinate",
      description:
        "Support the agreed purchasing, documentation, quality, or logistics activities.",
    },
    {
      number: "04",
      title: "Follow Through",
      description:
        "Maintain communication and follow up on the agreed next steps and delivery requirements.",
    },
  ];

  return (
    <main className="offerings-page offering-detail-page">
      {/* HERO */}
      <section className="offering-hero">
        <div className="offerings-container">
          <nav className="offerings-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={group.path}>{group.title}</Link>
            <span>/</span>
            <span aria-current="page">{offering.title}</span>
          </nav>

          <div className="offering-hero-grid">
            <div className="offering-hero-copy">
              <p className="offerings-eyebrow">
                LNE TECHNOLOGY / {group.title.toUpperCase()}
              </p>

              <h1>{offering.title}</h1>

              <p className="offerings-intro">
                {offering.description}
              </p>

              <div className="offering-hero-actions">
                <Link
                  to="/contact"
                  state={{ subject: offering.title }}
                  className="offerings-button"
                >
                  Enquire About This Offering
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link to={group.path} className="offering-secondary-link">
                  Explore {group.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="offering-hero-image">
              <img
                src={image}
                alt={`${offering.title} — industrial procurement and supply-chain operations`}
                fetchPriority="high"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />

              <div className="offering-image-caption">
                <span className="offering-image-caption-dot" />
                <span>PROCUREMENT &amp; SUPPLY-CHAIN SUPPORT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="offering-overview-section">
        <div className="offerings-container offering-overview-grid">
          <div className="offering-overview-copy">
            <p className="offerings-eyebrow">OVERVIEW</p>

            <h2>
              A structured approach to{" "}
              <span>{offering.title.toLowerCase()}</span>
            </h2>

            <p className="offering-body-copy">
              Business requirements often involve multiple specifications,
              purchasing priorities, timelines, and coordination activities.
              A clear and organised approach helps bring these requirements
              together.
            </p>

            <p className="offering-body-copy">
              LNE Technology aims to understand each requirement and discuss
              suitable ways to support the process. The scope of work can be
              aligned with the products, operational priorities, and delivery
              expectations agreed with the customer.
            </p>

            <Link
              to="/contact"
              state={{ subject: offering.title }}
              className="offering-text-link"
            >
              Discuss your requirements <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <aside className="offering-highlight-card">
            <div className="offering-highlight-icon" aria-hidden="true">
              <svg
                viewBox="0 0 48 48"
                width="38"
                height="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="8" y="8" width="32" height="32" rx="5" />
                <path d="M16 18h16M16 24h16M16 30h9" />
                <path d="m29 30 3 3 6-7" />
              </svg>
            </div>

            <p className="offerings-eyebrow">OUR APPROACH</p>

            <h3>Clear requirements. Coordinated execution.</h3>

            <p>
              Every engagement begins with understanding the requirement and
              agreeing on the appropriate scope of support.
            </p>

            <ul className="offering-highlight-list">
              <li>Requirement-focused coordination</li>
              <li>Clear communication</li>
              <li>Attention to specifications</li>
              <li>Structured follow-up</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* AREAS OF SUPPORT */}
      <section className="offering-support-section">
        <div className="offerings-container">
          <div className="offering-section-heading">
            <p className="offerings-eyebrow">AREAS OF SUPPORT</p>

            <h2>How we can support your requirements</h2>

            <p>
              Explore the key activities associated with{" "}
              {offering.title.toLowerCase()}. The final scope can be agreed
              according to your needs.
            </p>
          </div>

          <div className="offering-support-grid">
            {offering.details.map((detail, index) => (
              <article className="offering-support-card" key={detail}>
                <span className="offering-support-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="offering-support-marker" aria-hidden="true">
                  ↗
                </div>

                <h3>{detail}</h3>

                <p>
                  Coordinate this activity around the agreed specifications,
                  requirements, and operational priorities.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="offering-process-section">
        <div className="offerings-container">
          <div className="offering-section-heading">
            <p className="offerings-eyebrow">OUR WORKING APPROACH</p>

            <h2>From requirement to coordinated action</h2>

            <p>
              A straightforward process helps keep requirements, communication,
              and next steps organised.
            </p>
          </div>

          <div className="offering-process-grid">
            {processSteps.map((step) => (
              <article className="offering-process-card" key={step.number}>
                <span className="offering-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED OFFERINGS */}
      <section className="offering-related-section">
        <div className="offerings-container">
          <div className="offering-related-heading">
            <div>
              <p className="offerings-eyebrow">EXPLORE FURTHER</p>
              <h2>Related {group.title.toLowerCase()}</h2>
            </div>

            <Link to={group.path} className="offering-text-link">
              View all {group.title.toLowerCase()}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="offering-related-grid">
            {relatedOfferings.map((item, index) => (
              <Link
                to={`${group.path}/${item.slug}`}
                className="offering-related-card"
                key={item.slug}
              >
                <span className="offering-related-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="offering-related-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="offerings-cta offering-detail-cta">
        <div className="offerings-container offerings-cta-inner">
          <div>
            <p className="offerings-eyebrow">
              LET'S DISCUSS YOUR REQUIREMENTS
            </p>

            <h2>
              Looking for support with {offering.title.toLowerCase()}?
            </h2>

            <p>
              Tell us about your requirements, specifications, and priorities.
              We can discuss the appropriate next steps together.
            </p>
          </div>

          <Link
            to="/contact"
            state={{ subject: offering.title }}
            className="offerings-button"
          >
            Contact LNE Technology <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default OfferingDetail;
