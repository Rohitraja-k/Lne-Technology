import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logoLne from "../assets/lne-logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [desktopDivisionsOpen, setDesktopDivisionsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setDivisionsOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname.startsWith("/divisions")) {
      setDivisionsOpen(true);
    }
  }, []);

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <Link to="/" className="logo">
          <img src={logoLne} alt="LNE Technologies" />
        </Link>


        {/* DESKTOP NAVIGATION */}

        <nav className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About us
          </NavLink>


          {/* DIVISIONS DROPDOWN */}

          <div className="nav-dropdown">

            <NavLink
              to="/divisions"
              className={({ isActive }) =>
                isActive ||
                window.location.pathname.startsWith("/divisions/")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Divisions
            </NavLink>


            {/* DROPDOWN MENU */}

            <div className="nav-dropdown-menu">

              <NavLink to="/divisions/electrical">
                Electrical
              </NavLink>

              <NavLink to="/divisions/instrumentation">
                Instrumentation
              </NavLink>

              <NavLink to="/divisions/oil-and-gas">
                Oil & Gas
              </NavLink>

              <NavLink to="/divisions/lighting">
                Lighting
              </NavLink>

              <NavLink to="/divisions/support-systems">
                Support Systems
              </NavLink>

              <NavLink to="/divisions/concrete-drilling-and-sawing">
                Concrete Drilling & Sawing
              </NavLink>

              <NavLink to="/divisions/tools">
                Tools
              </NavLink>

            </div>

          </div>


          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Careers
          </NavLink>


          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>


        {/* MOBILE MENU BUTTON */}

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>


        {/* DESKTOP CTA */}

        <Link to="/contact" className="nav-cta">
          Let's Talk
        </Link>

      </div>


      {/* MOBILE NAVIGATION */}

      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <NavLink
          to="/"
          end
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          onClick={closeMobileMenu}
        >
          About us
        </NavLink>


        {/* MOBILE DIVISIONS */}

        <div className="mobile-divisions">

          <button
            className={`mobile-divisions-toggle ${
              window.location.pathname.startsWith("/divisions")
                ? "mobile-divisions-active"
                : ""
            }`}
            onClick={() =>
              setDivisionsOpen(!divisionsOpen)
            }
          >

            <span>Divisions</span>

            <span>
              {divisionsOpen ? "−" : "+"}
            </span>

          </button>


          {divisionsOpen && (

            <div className="mobile-divisions-list">

              <NavLink
                to="/divisions/electrical"
                onClick={closeMobileMenu}
              >
                Electrical
              </NavLink>

              <NavLink
                to="/divisions/instrumentation"
                onClick={closeMobileMenu}
              >
                Instrumentation
              </NavLink>

              <NavLink
                to="/divisions/oil-and-gas"
                onClick={closeMobileMenu}
              >
                Oil & Gas
              </NavLink>

              <NavLink
                to="/divisions/lighting"
                onClick={closeMobileMenu}
              >
                Lighting
              </NavLink>

              <NavLink
                to="/divisions/support-systems"
                onClick={closeMobileMenu}
              >
                Support Systems
              </NavLink>

              <NavLink
                to="/divisions/concrete-drilling-and-sawing"
                onClick={closeMobileMenu}
              >
                Concrete Drilling & Sawing
              </NavLink>

              <NavLink
                to="/divisions/tools"
                onClick={closeMobileMenu}
              >
                Tools
              </NavLink>

            </div>

          )}

        </div>


        <NavLink
          to="/careers"
          onClick={closeMobileMenu}
        >
          Careers
        </NavLink>


        <NavLink
          to="/contact"
          onClick={closeMobileMenu}
        >
          Contact
        </NavLink>


        <button className="mobile-nav-cta">
          Let's Talk
        </button>

      </div>

    </header>
  );
}

export default Navbar;