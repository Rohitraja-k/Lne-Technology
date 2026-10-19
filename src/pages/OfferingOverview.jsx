
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  Boxes,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Database,
  Factory,
  Globe,
  HardHat,
  Package,
  PackageSearch,
  Settings2,
  Truck,
  Warehouse,
  Workflow,
  Wrench,
} from "lucide-react";

import { offeringGroups } from "../data/offerings";
import "../styles/offerings.css";

const iconMap = {
  "procurement-shipping": PackageSearch,
  warehouse: Warehouse,
  "quality-control": ClipboardCheck,
  "spare-parts-procurement": Wrench,
  "supply-chain-project-management": Workflow,
  "logistics-shipping": Truck,

  "mro-supply": Package,
  "master-data-management": Database,
  "supply-chain-financing": CreditCard,
  "spare-parts-availability": Boxes,
  "strategic-sourcing-mro-data-enrichment": ChartNoAxesCombined,
  "global-mro-procurement-excellence": Globe,
  "inventory-planning-optimisation": Settings2,
  "plant-maintenance-mro-spare-parts-management": Factory,

  "procurement-services": Building2,
  "project-supply": HardHat,
};

const imageMap = {
  "procurement-shipping":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  warehouse:
    "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1400&q=85",
  "quality-control":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
  "spare-parts-procurement":
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=85",
  "supply-chain-project-management":
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85",
  "logistics-shipping":
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=85",

  "mro-supply":
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
  "master-data-management":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  "supply-chain-financing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
  "spare-parts-availability":
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=85",
  "strategic-sourcing-mro-data-enrichment":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  "global-mro-procurement-excellence":
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=85",
  "inventory-planning-optimisation":
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=85",
  "plant-maintenance-mro-spare-parts-management":
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=85",

  "procurement-services":
    "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",
  "project-supply":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
};

const groupImages = {
  "/services":
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=85",
  "/solutions":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
  "/disciplines":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
};

function OfferingOverview({ groupKey }) {
  const group = offeringGroups.find(
    (item) => item.path === `/${groupKey}`
  );

  const [activeSlug, setActiveSlug] = useState("");

  if (!group) {
    return (
      <main className="offerings-page">
        <section className="offerings-not-found">
          <h1>Page not found</h1>
          <Link to="/">Return to Home</Link>
        </section>
      </main>
    );
  }

  const activeItem =
    group.items.find((item) => item.slug === activeSlug) ||
    group.items[0];

  if (!activeItem) {
    return (
      <main className="offerings-page">
        <section className="offerings-not-found">
          <h1>No offerings available</h1>
          <Link to="/">Return to Home</Link>
        </section>
      </main>
    );
  }

  const ActiveIcon = iconMap[activeItem.slug] || Package;

  const activeImage =
    imageMap[activeItem.slug] || groupImages[group.path];

  return (
    <main className="offerings-page offering-selector-page">
      {/* HERO */}
      <section className="offerings-hero offering-selector-hero">
        <div className="offerings-container">
          <p className="offerings-eyebrow">
            LNE TECHNOLOGY <span>/</span> {group.title.toUpperCase()}
          </p>

          <h1>
            {group.title} for{" "}
            <span>Industrial Supply Chains.</span>
          </h1>

          <p className="offerings-intro">
            {group.intro}
          </p>

          <Link to="/contact" className="offerings-button">
            Discuss Your Requirements
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* INTERACTIVE OFFERING SELECTOR */}
      <section className="offering-explorer">
        <div className="offerings-container">
          <div className="offering-explorer-heading">
            <div>
              <p className="offerings-eyebrow">EXPLORE OUR CAPABILITIES</p>
              <h2>Find the right support for your needs.</h2>
            </div>

            <p className="offering-explorer-description">
              Select a category to discover the services and capabilities
              relevant to your requirements.
            </p>
          </div>

          <div
            className="offering-selector"
            role="tablist"
            aria-label={`${group.title} categories`}
          >
            {group.items.map((item, index) => {
              const ItemIcon = iconMap[item.slug] || Package;
              const isActive = activeItem.slug === item.slug;

              return (
                <button
                  type="button"
                  role="tab"
                  id={`offering-tab-${item.slug}`}
                  aria-selected={isActive}
                  aria-controls="offering-feature-panel"
                  key={item.slug}
                  className={`offering-selector-item ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() => setActiveSlug(item.slug)}
                >
                  <span className="offering-selector-icon">
                    <ItemIcon size={23} strokeWidth={1.7} />
                  </span>

                  <span className="offering-selector-title">
                    {item.title}
                  </span>

                  <span className="offering-selector-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* SELECTED CATEGORY FEATURE */}
          <div
            className="offering-feature-panel"
            id="offering-feature-panel"
            role="tabpanel"
            aria-labelledby={`offering-tab-${activeItem.slug}`}
            key={activeItem.slug}
          >
            <div className="offering-feature-image">
              <img
                src={activeImage}
                alt={`${activeItem.title} industrial operations`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.visibility = "hidden";
                }}
              />

              <span className="offering-image-label">
                LNE TECHNOLOGY <span>/</span> {group.title.toUpperCase()}
              </span>

              <div className="offering-image-corner" aria-hidden="true">
                <ArrowDownRight size={26} />
              </div>
            </div>

            <div className="offering-feature-content">
              <div className="offering-feature-topline">
                <span className="offering-feature-icon">
                  <ActiveIcon size={24} strokeWidth={1.7} />
                </span>

                <span className="offering-feature-category">
                  {group.title}
                </span>
              </div>

              <p className="offering-feature-index">
                CAPABILITY {String(
                  group.items.findIndex(
                    (item) => item.slug === activeItem.slug
                  ) + 1
                ).padStart(2, "0")}{" "}
                <span>/ {String(group.items.length).padStart(2, "0")}</span>
              </p>

              <h3>{activeItem.title}</h3>

              <p className="offering-feature-description">
                {activeItem.description}
              </p>

              <ul className="offering-feature-points">
                {activeItem.details.slice(0, 3).map((detail) => (
                  <li key={detail}>
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`${group.path}/${activeItem.slug}`}
                className="offering-read-more"
              >
                Read More
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* CATEGORY COUNT */}
          <div className="offering-explorer-footer">
            <span>
              <span className="offering-footer-dot" />
              {group.items.length} categories to explore
            </span>

            <span>
              Select a category above to explore its capabilities
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="offerings-cta">
        <div className="offerings-container offerings-cta-inner">
          <div>
            <p className="offerings-eyebrow">LET'S WORK TOGETHER</p>
            <h2>Have a specific requirement?</h2>
            <p>
              Tell us about your sourcing, materials, or project needs so we
              can discuss the next steps.
            </p>
          </div>

          <Link to="/contact" className="offerings-button">
            Contact LNE
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default OfferingOverview;
