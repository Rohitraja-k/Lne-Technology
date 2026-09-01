function AboutValues() {
  const values = [
    {
      number: "01",
      title: "Technical Expertise",
      description:
        "We bring engineering knowledge and practical experience to every project, ensuring solutions are technically sound and purpose-built."
    },
    {
      number: "02",
      title: "Quality Driven",
      description:
        "We focus on quality at every stage, delivering solutions that meet demanding requirements and maintain consistent performance."
    },
    {
      number: "03",
      title: "Reliable Partnerships",
      description:
        "We work closely with our customers to build lasting relationships based on trust, responsiveness and dependable service."
    }
  ];

  return (
    <section className="about-values">
      <div className="about-values-container">

        <div className="about-values-header">
          <p className="section-label">WHAT DRIVES US</p>

          <h2>
            Experience that matters.
            <br />
            Standards that last.
          </h2>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <div
            className={`about-value-card about-value-${value.number}`}
            key={value.number}
            >
              <span className="about-value-number">
                {value.number}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutValues;