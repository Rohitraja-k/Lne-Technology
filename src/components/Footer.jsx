import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Footer CTA */}
        <div className="footer-cta">
          <div className="footer-cta-text">
            <span className="footer-eyebrow">LET'S BUILD TOGETHER</span>

            <h2>
              Engineering solutions
              <br />
              built for what comes next.
            </h2>
          </div>

          <Link to="/contact" className="footer-cta-button">
            Let's Talk
            <span>↗</span>
          </Link>
        </div>


        {/* Footer Main */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              LNE
              <span>TECHNOLOGY</span>
            </Link>

            <p>
              Delivering reliable engineering solutions through
              technology, expertise and innovation.
            </p>
          </div>


          {/* Company */}
          <div className="footer-column">
            <h4>COMPANY</h4>

            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>


          {/* Divisions */}
          <div className="footer-column">
            <h4>DIVISIONS</h4>

            <Link to="/divisions/electrical">Electrical</Link>
            <Link to="/divisions/instrumentation">Instrumentation</Link>
            <Link to="/divisions/oil-and-gas">Oil & Gas</Link>
            <Link to="/divisions/lighting">Lighting</Link>
          </div>


          {/* More Divisions */}
          <div className="footer-column footer-column-last">
            <h4>&nbsp;</h4>

            <Link to="/divisions/support-systems">Support Systems</Link>
            <Link to="/divisions/concrete-drilling-sawing">
              Concrete Drilling & Sawing
            </Link>
            <Link to="/divisions/tools">Tools</Link>
          </div>


          {/* Contact */}
          <div className="footer-column footer-contact">
            <h4>GET IN TOUCH</h4>

            <a href="mailto:info@lnetechnology.com">
              info@lnetechnology.com
            </a>

            <a href="tel:+919946000000">
              +91 0000 000 000
            </a>

            <span>
              Kerala, India
            </span>
          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 LNE Technology. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#top">Back to top ↑</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;