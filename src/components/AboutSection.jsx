import '../styles/homeAbout.css'

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">ABOUT LNE TECHNOLOGY</p>

          <h2>
            Engineering expertise.
            <br />
            Reliable solutions.
            <br />
            Built around you.
          </h2>
        </div>

        <div className="about-content">

          <p className="about-intro">
            LNE Technologies delivers comprehensive engineering and
            technical solutions designed to meet the requirements of
            demanding industrial and commercial environments.
          </p>

          <p>
            With expertise across multiple specialized divisions,
            we focus on delivering reliable solutions while maintaining
            high standards of quality, safety and customer satisfaction.
          </p>

          <a href="/about" className="about-link">
            Discover LNE Technologies
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;