import { useNavigate } from "react-router-dom";
import "../styles/divisions.css";

import ElectricalIcon from "../assets/sound-wave.png";
import InstrumentIcon from "../assets/drawing-compass.png";
import OilIcon from "../assets/oil.png";
import LightingIcon from "../assets/flash.png";
import SupportIcon from "../assets/integration.png";
import ConcreteIcon from "../assets/hammer.png";
import ToolsIcon from "../assets/instrument.png";

function Divisions() {
  const navigate = useNavigate();

  const divisions = [
    {
      name: "Electrical",
      slug:"electrical",
      icon: ElectricalIcon,
    },
    {
      name: "Instrumentation",
      slug:"instrumentation",
      icon: InstrumentIcon,
    },
    {
      name: "Oil & Gas",
      slug:"oil-and-gas",
      icon: OilIcon,
    },
    {
      name: "Lighting",
      slug:"lighting",
      icon: LightingIcon,
    },
    {
      name: "Support Systems",
      slug:"support-systems",
      icon: SupportIcon,
    },
    {
      name: "Concrete Drilling and Sawing",
      slug:"concrete-drilling-and-sawing",
      icon: ConcreteIcon,
    },
    {
      name: "Tools",
      slug:"tools",
      icon: ToolsIcon,
    },
  ];

 const openDivision = (division) => {
  navigate(`/divisions/${division.slug}`);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.scrollTo({
    top:0,
    behavior:"smooth"
  });
  
  return (
    <>
      {/* =========================================
          DIVISIONS SECTION
      ========================================= */}

      <section className="divisions">
        <div className="divisions-container">

          {/* Hero */}

          <p className="divisions-label">
            OUR DIVISIONS
          </p>

          <h1 className="label-heading">
            Engineering expertise.
            <br />
            Multiple possibilities.
          </h1>

          <p className="divisions-description">
            LNE Technologies brings together specialized divisions
            delivering engineering and technology solutions across
            diverse industries.
          </p>


          {/* Division List */}

          <div className="divisions-list">

            {divisions.map((division) => (
              <div
                className="divisions-list-item"
                key={division.name}
              >

                <img
                  src={division.icon}
                  alt={division.name}
                />  

                <h2 className="divisions-heading">
                  {division.name}
                </h2>

                <button
                onClick={() => openDivision(division)}
                >Read More</button>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================
          PARTNERS SECTION
      ========================================= */}

      <section className="partners-section">

        <div className="partners-container">

          <p className="partners-label">
            OUR PARTNERS
          </p>

          <h2 className="partners-heading">
            Trusted by industry-leading partners.
          </h2>
          <p className="partners-description">
            Our success is built on strong partnerships. We value the relationships we have cultivated with our partners, recognizing that collaboration is key to achieving mutual growth and success. By working closely with our partners, we leverage collective strengths, expertise, and resources to deliver innovative solutions that drive positive outcomes for all involved. Together, we forge lasting partnerships founded on trust, integrity, and shared goals.
          </p>

          <div className="partners-marquee">

            <div className="partners-track">

              <span><b>ELECT</b>RICITY</span>
              <span>Partner Two</span>
              <span>Partner Three</span>
              <span>Partner Four</span>
              <span>Partner Five</span>
              <span>Partner Six</span>

              {/* Duplicate for seamless scrolling */}

              <span><b>ELECT</b>RICITY</span>
              <span>Partner Two</span>
              <span>Partner Three</span>
              <span>Partner Four</span>
              <span>Partner Five</span>
              <span>Partner Six</span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY CHOOSE LNE
      ========================================= */}

      <section className="why-section">

        <div className="why-container">

          {/* Introduction */}

          <div className="why-intro">

            <p className="why-label">
              WHY CHOOSE LNE
            </p>

            <h2>
              Engineering solutions
              <br />
              built around you.
            </h2>

            <p>
              We combine technical expertise, industry experience
              and dependable support to deliver solutions that create
              lasting value for our clients.
            </p>

          </div>


          {/* Why Choose Items */}

          <div className="why-grid">

            <div className="why-item">

              <span className="why-number">
                01
              </span>

              <h3>
                Technical Expertise
              </h3>

              <p>
                Specialized knowledge across multiple engineering
                disciplines enables us to approach complex requirements
                with confidence.
              </p>

            </div>


            <div className="why-item">

              <span className="why-number">
                02
              </span>

              <h3>
                Quality & Reliability
              </h3>

              <p>
                We focus on dependable solutions, quality execution
                and consistent performance throughout every project.
              </p>

            </div>


            <div className="why-item">

              <span className="why-number">
                03
              </span>

              <h3>
                Industry Experience
              </h3>

              <p>
                Our experience across diverse industries helps us
                understand practical challenges and deliver effective
                solutions.
              </p>

            </div>


            <div className="why-item">

              <span className="why-number">
                04
              </span>

              <h3>
                Client Focus
              </h3>

              <p>
                We work closely with our clients to understand their
                needs and develop solutions that align with their goals.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Divisions;