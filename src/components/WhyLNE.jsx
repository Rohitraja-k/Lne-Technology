import "../styles/why.css";

function WhyLNE() {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-header">
          <p className="section-label">WHY LNE TECHNOLOGIES</p>

          <h2>
            Built on expertise,
            <br />
            quality and reliability.
          </h2>
        </div>

        <div className="why-grid">

          <div className="why-item">
            <span className="why-number">01</span>

            <div>
              <h3>ENGINEERING EXPERTISE</h3>
              <p>
                Technical knowledge and practical engineering
                solutions designed for demanding environments.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="why-number">02</span>

            <div>
              <h3>QUALITY & RELIABILITY</h3>
              <p>
                Consistent quality and dependable project
                execution focused on long-term performance.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="why-number">03</span>

            <div>
              <h3>SAFETY FIRST</h3>
              <p>
                A safety-focused approach integrated into
                every stage of our engineering work.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span className="why-number">04</span>

            <div>
              <h3>CUSTOMER FOCUS</h3>
              <p>
                Solutions developed around client requirements,
                project goals and operational needs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyLNE;