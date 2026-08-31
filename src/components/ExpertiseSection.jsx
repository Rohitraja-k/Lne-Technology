import "../styles/expertise.css";

function ExpertiseSection(){
  return(
    <section className="expertise-section">
      <div className="expertise-container">

        <div className="expertise-header">

        <p className="section-label">OUR EXPERTISE</p>
        <h2>Engineering capabilities <br /> for demanding environments.</h2>
        </div>

        <div className="expertise-item">
          <div className="expertise-number">01</div>
          <div className="expertise-info">
            <h3>ELECTRICAL</h3>
            <p>Electrical systems and technical solutions for demanding environments.</p>
          </div>
          <a href="/divisions" className="expertise-link"><span className="expertise-arrow">→</span></a>
        </div>
        
        <div className="expertise-item">
          <div className="expertise-number">02</div>
          <div className="expertise-info">
            <h3>INSTRUMENTATION</h3>
            <p>Instrumentation and control solutions for industrial applications.</p>
          </div>
          <a href="/divisions" className="expertise-link"><span className="expertise-arrow">→</span></a>
        </div>

        <div className="expertise-item">
          <div className="expertise-number">03</div>
          <div className="expertise-info">
            <h3>OIL & GAS</h3>
            <p>Specialized engineering solutions supporting oil and gas operations.</p>
          </div>
          <a href="/divisions" className="expertise-link"><span className="expertise-arrow">→</span></a>
        </div>

      </div>
    </section>
  )
}

export default ExpertiseSection;