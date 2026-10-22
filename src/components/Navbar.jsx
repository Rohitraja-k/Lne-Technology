
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logoLne from "../assets/lne-logo.png";

const navigationGroups = [
  {
    title: "Services",
    path: "/services",
    items: [
      { label: "Procurement & Shipping", path: "/services/procurement-shipping" },
      // { label: "Warehouse", path: "/services/warehouse" },
      { label: "Quality Control", path: "/services/quality-control" },
      { label: "Spare Parts Procurement", path: "/services/spare-parts-procurement" },
      {
        label: "Supply Chain Project Management",
        path: "/services/supply-chain-project-management",
      },
      { label: "Logistics & Shipping", path: "/services/logistics-shipping" },
    ],
  },
  {
    title: "Solutions",
    path: "/solutions",
    items: [
      { label: "MRO Supply", path: "/solutions/mro-supply" },
      { label: "Master Data Management", path: "/solutions/master-data-management" },
      { label: "Supply Chain Financing", path: "/solutions/supply-chain-financing" },
      { label: "Spare Parts Availability", path: "/solutions/spare-parts-availability" },
      {
        label: "Strategic Sourcing & MRO Data Enrichment",
        path: "/solutions/strategic-sourcing-mro-data-enrichment",
      },
      {
        label: "Global MRO Procurement Excellence",
        path: "/solutions/global-mro-procurement-excellence",
      },
      // {
      //   label: "Inventory Planning & Optimisation",
      //   path: "/solutions/inventory-planning-optimisation",
      // },
      {
        label: "Plant Maintenance & MRO Spare Parts Management",
        path: "/solutions/plant-maintenance-mro-spare-parts-management",
      },
    ],
  },
  {
    title: "Disciplines",
    path: "/disciplines",
    items: [
      { label: "Procurement Services", path: "/disciplines/procurement-services" },
      { label: "Project Supply", path: "/disciplines/project-supply" },
    ],
  },
];

function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenMobileGroup(null);
  };

  useEffect(() => {
    closeMobileMenu();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isGroupActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className={`navbar ${isScrolled ? "shrink" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          aria-label="LNE Technology home"
          onClick={closeMobileMenu}
        >
          <img src={logoLne} alt="LNE Technology" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>

          {navigationGroups.map((group) => (
            <div
              className={`nav-dropdown ${
                isGroupActive(group.path) ? "dropdown-active" : ""
              }`}
              key={group.path}
            >
              <div className="nav-dropdown-heading">
                <NavLink to={group.path} className="nav-link">
                  {group.title}
                </NavLink>

                <span className="dropdown-arrow" aria-hidden="true">
                  ▾
                </span>
              </div>

              <div className="nav-dropdown-menu">
                <NavLink
                  to={group.path}
                  end
                  className="dropdown-overview"
                >
                  Explore All {group.title}
                  <span aria-hidden="true">↗</span>
                </NavLink>

                {group.items.map((item) => (
                  <NavLink to={item.path} key={item.path}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <NavLink to="/careers" className="nav-link">
            Careers
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        {/* DESKTOP CTA */}
        <Link to="/contact" className="nav-cta">
          Let's Talk <span aria-hidden="true">↗</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span>{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <NavLink to="/" end onClick={closeMobileMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMobileMenu}>
          About Us
        </NavLink>

        {navigationGroups.map((group) => {
          const isOpen = openMobileGroup === group.path;
          const groupActive = isGroupActive(group.path);

          return (
            <div className="mobile-nav-group" key={group.path}>
              <button
                type="button"
                className={`mobile-group-toggle ${
                  groupActive ? "mobile-group-active" : ""
                }`}
                onClick={() =>
                  setOpenMobileGroup(isOpen ? null : group.path)
                }
                aria-expanded={isOpen}
              >
                <span>{group.title}</span>
                <span className="mobile-group-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mobile-group-links">
                  <NavLink
                    to={group.path}
                    end
                    onClick={closeMobileMenu}
                  >
                    All {group.title}
                  </NavLink>

                  {group.items.map((item) => (
                    <NavLink
                      to={item.path}
                      key={item.path}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <NavLink to="/careers" onClick={closeMobileMenu}>
          Careers
        </NavLink>

        <NavLink to="/contact" onClick={closeMobileMenu}>
          Contact
        </NavLink>

        <Link
          to="/contact"
          className="mobile-nav-cta"
          onClick={closeMobileMenu}
        >
          Let's Talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
