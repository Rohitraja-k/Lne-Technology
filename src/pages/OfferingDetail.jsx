
import { Link, useParams } from "react-router-dom";
import { offeringGroups } from "../data/offerings";
import "../styles/offerings.css";

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

  const offering = group?.items.find(
    (item) => item.slug === slug
  );

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

  const overviewParagraphs =
    offering.overview?.length > 0
      ? offering.overview
      : [offering.description];

  const supportItems = offering.details || [];
  const benefits = offering.benefits || [];
  const approach = offering.approach || [];

  const relatedOfferings = group.items
    .filter((item) => item.slug !== offering.slug)
    .slice(0, 3);

  return (
    <main className="offerings-page offering-detail-page">
      {/* PAGE INTRODUCTION */}
      <section className="offering-hero">
        <div className="offerings-container">
          <nav
            className="offerings-breadcrumb"
            aria-label="Breadcrumb"
          >
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
                  Discuss Your Requirements
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  to={group.path}
                  className="offering-secondary-link"
                >
                  Explore {group.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="offering-hero-image">
              <img
                src={image}
                alt={`${offering.title} in an industrial business context`}
                fetchPriority="high"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />

              <div className="offering-image-caption">
                <span className="offering-image-caption-dot" />
                <span>INDUSTRIAL PROCUREMENT &amp; SUPPLY CHAIN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS AND WHY IT MATTERS */}
      <section className="offering-overview-section">
        <div className="offerings-container offering-overview-grid">
          <div className="offering-overview-copy">
            <p className="offerings-eyebrow">
              UNDERSTANDING THE OFFERING
            </p>

            <h2>
              {offering.overviewTitle || offering.title}
            </h2>

            {overviewParagraphs.map((paragraph, index) => (
              <p className="offering-body-copy" key={index}>
                {paragraph}
              </p>
            ))}

            <Link
              to="/contact"
              state={{ subject: offering.title }}
              className="offering-text-link"
            >
              Discuss your requirements <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <aside className="offering-highlight-card">
            <p className="offerings-eyebrow">
              AT A GLANCE
            </p>

            <h3>Understanding the requirement comes first.</h3>

            <p>
              The right scope depends on the products, specifications,
              operational priorities, and delivery expectations involved.
              LNE can discuss these requirements with your team and clarify
              the appropriate scope of support.
            </p>
          </aside>
        </div>
      </section>

      {/* WHAT LNE SUPPORTS */}
      <section className="offering-support-section">
        <div className="offerings-container">
          <div className="offering-section-heading">
            <p className="offerings-eyebrow">
              SCOPE OF SUPPORT
            </p>

            <h2>What this offering covers</h2>

            <p>
              The following activities describe the main areas associated
              with {offering.title.toLowerCase()}. The exact scope can be
              agreed based on your requirements.
            </p>
          </div>

          <div className="offering-scope-list">
            {supportItems.map((item, index) => (
              <article className="offering-scope-item" key={item}>
                <span className="offering-scope-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="offering-scope-content">
                  <h3>{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE WORK IS CARRIED OUT */}
      <section className="offering-process-section">
        <div className="offerings-container">
          <div className="offering-section-heading">
            <p className="offerings-eyebrow">
              HOW WE WORK
            </p>

            <h2>A clear process, built around your requirements</h2>

            <p>
              Each engagement follows a practical sequence, with the
              activities adapted to the needs and agreed scope of
              {` ${offering.title.toLowerCase()}`}.
            </p>
          </div>

          <div className="offering-process-list">
            {approach.map((description, index) => (
              <article className="offering-process-item" key={description}>
                <span className="offering-process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>
                    {[
                      "Review the requirement",
                      "Coordinate the activity",
                      "Follow through",
                    ][index] || `Step ${index + 1}`}
                  </h3>

                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL BUSINESS VALUE */}
      {benefits.length > 0 && (
        <section className="offering-business-section">
          <div className="offerings-container offering-business-grid">
            <div>
              <p className="offerings-eyebrow">
                BUSINESS APPLICATION
              </p>

              <h2>What this can help your team manage</h2>

              <p className="offering-body-copy">
                Depending on your existing processes and the agreed scope,
                this offering can help bring greater structure to the
                following areas.
              </p>
            </div>

            <ul className="offering-business-list">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* RELATED OFFERINGS */}
      <section className="offering-related-section">
        <div className="offerings-container">
          <div className="offering-related-heading">
            <div>
              <p className="offerings-eyebrow">
                RELATED CAPABILITIES
              </p>

              <h2>Explore related {group.title.toLowerCase()}</h2>
            </div>

            <Link to={group.path} className="offering-text-link">
              View all {group.title.toLowerCase()}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="offering-related-grid">
            {relatedOfferings.map((item) => (
              <Link
                to={`${group.path}/${item.slug}`}
                className="offering-related-card"
                key={item.slug}
              >
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

      {/* CONTACT */}
      <section className="offerings-cta offering-detail-cta">
        <div className="offerings-container offerings-cta-inner">
          <div>
            <p className="offerings-eyebrow">
              ENQUIRE WITH LNE TECHNOLOGY
            </p>

            <h2>
              Let's discuss your {offering.title.toLowerCase()} requirements.
            </h2>

            <p>
              Share your product requirements, specifications, project
              details, or delivery priorities to discuss the appropriate
              next steps.
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
