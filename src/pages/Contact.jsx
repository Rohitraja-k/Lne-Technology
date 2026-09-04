import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "",
    project: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      await emailjs.send(
        "service_meni95e",
        "template_5cm239a",
        {
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.enquiryType,
          project: formData.project,
          message: formData.message,
        },
        "EvRrPQbl6fdjwKYwJ"
      );

      setSubmitted(true);

      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        enquiryType: "",
        project: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setSubmitError(
        "Unable to send your enquiry right now. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">

      {/* ================================
          CONTACT HERO
      ================================= */}

      <section className="contact-hero">

        <div className="contact-container">

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              CONTACT LNE TECHNOLOGY
            </span>

            <h1>
              Let's Discuss Your
              <span>Engineering Requirement.</span>
            </h1>

            <p>
              Connect with our team for engineering solutions,
              project requirements, technical enquiries, service
              support and business opportunities.
            </p>

          </div>

        </div>

      </section>


      {/* ================================
          ENGINEERING ENQUIRY
      ================================= */}

      <section className="enquiry-section">

        <div className="contact-container">

          <div className="enquiry-wrapper">

            {/* LEFT */}

            <div className="enquiry-intro">

              <span className="contact-eyebrow">
                ENGINEERING ENQUIRY
              </span>

              <h2>
                Let's Discuss Your
                <span>Project.</span>
              </h2>

              <p>
                Tell us about your project, technical requirement
                or business enquiry. Our team will review your
                request and get in touch with you.
              </p>

              <div className="enquiry-points">

                <div className="enquiry-point">
                  <span>✓</span>
                  <p>Project & Engineering Enquiries</p>
                </div>

                <div className="enquiry-point">
                  <span>✓</span>
                  <p>Product & Solution Enquiries</p>
                </div>

                <div className="enquiry-point">
                  <span>✓</span>
                  <p>Technical Support</p>
                </div>

                <div className="enquiry-point">
                  <span>✓</span>
                  <p>Quotation Requests</p>
                </div>

                <div className="enquiry-point">
                  <span>✓</span>
                  <p>Business & Partnership Enquiries</p>
                </div>

              </div>

            </div>


            {/* RIGHT - FORM */}

            <div className="enquiry-form-wrapper">

              <div className="form-header">

                <span>01</span>

                <div>

                  <h3>
                    Send an Enquiry
                  </h3>

                  <p>
                    Fields marked with * are required.
                  </p>

                </div>

              </div>


              {submitted && (
                <div className="form-success">

                  <strong>
                    Thank you for contacting us.
                  </strong>

                  <span>
                    Your enquiry has been received. Our team
                    will get back to you shortly.
                  </span>

                </div>
              )}


              {submitError && (
                <div className="form-error">

                  <strong>
                    Submission Failed
                  </strong>

                  <span>
                    {submitError}
                  </span>

                </div>
              )}


              <form
                className="enquiry-form"
                onSubmit={handleSubmit}
                noValidate
              >

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="fullName">
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={isSending}
                    />

                    {errors.fullName && (
                      <small>
                        {errors.fullName}
                      </small>
                    )}

                  </div>


                  <div className="form-group">

                    <label htmlFor="company">
                      Company / Organization
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      disabled={isSending}
                    />

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@company.com"
                      disabled={isSending}
                    />

                    {errors.email && (
                      <small>
                        {errors.email}
                      </small>
                    )}

                  </div>


                  <div className="form-group">

                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      disabled={isSending}
                    />

                    {errors.phone && (
                      <small>
                        {errors.phone}
                      </small>
                    )}

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="enquiryType">
                    Enquiry Type <span>*</span>
                  </label>

                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    disabled={isSending}
                  >

                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option value="Project / Engineering Enquiry">
                      Project / Engineering Enquiry
                    </option>

                    <option value="Product Enquiry">
                      Product Enquiry
                    </option>

                    <option value="Technical Support">
                      Technical Support
                    </option>

                    <option value="Service Enquiry">
                      Service Enquiry
                    </option>

                    <option value="Quotation Request">
                      Quotation Request
                    </option>

                    <option value="Business / Partnership">
                      Business / Partnership
                    </option>

                    <option value="Career Enquiry">
                      Career Enquiry
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                  {errors.enquiryType && (
                    <small>
                      {errors.enquiryType}
                    </small>
                  )}

                </div>


                <div className="form-group">

                  <label htmlFor="project">
                    Project / Requirement
                  </label>

                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Project name or requirement"
                    disabled={isSending}
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    rows="6"
                    disabled={isSending}
                  />

                  {errors.message && (
                    <small>
                      {errors.message}
                    </small>
                  )}

                </div>


                <button
                  type="submit"
                  className="enquiry-submit"
                  disabled={isSending}
                >

                  <span>
                    {isSending ? "Sending Enquiry..." : "Submit Enquiry"}
                  </span>

                  <span className="submit-arrow">
                    {isSending ? "..." : "→"}
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          GET IN TOUCH
      ================================= */}

      <section className="contact-info-section">

        <div className="contact-container">

          <div className="contact-section-heading">

            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              We're Here to Help
            </h2>

            <p>
              Reach out to our team and we'll connect you with
              the appropriate department for your requirement.
            </p>

          </div>


          <div className="contact-info-grid">

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <span>01</span>
              </div>

              <div>
                <h3>Head Office</h3>

                <p>
                  LNE Technology Pvt. Ltd.
                  <br />
                  Thrissur, Kerala, India
                </p>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <span>02</span>
              </div>

              <div>
                <h3>Call Us</h3>

                <p>
                  +91 XXXXX XXXXX
                  <br />
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <span>03</span>
              </div>

              <div>
                <h3>Email Us</h3>

                <p>
                  info@lnetechnology.com
                  <br />
                  sales@lnetechnology.com
                </p>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="contact-info-icon">
                <span>04</span>
              </div>

              <div>
                <h3>Working Hours</h3>

                <p>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


    {/* ================================
        LOCATION
    ================================= */}

    <section className="location-section">

      <div className="contact-container">

        <div className="location-wrapper">

          <div className="location-content">

            <span className="contact-eyebrow">
              OUR LOCATION
            </span>

            <h2>
              Visit Our
              <span>Office.</span>
            </h2>

            <p>
              Connect with our team at our office for business
              discussions, project meetings and technical
              consultations.
            </p>


            <div className="location-details">

              <div>

                <span>ADDRESS</span>

                <p>
                  LNE Technologies Pvt. Ltd.
                  <br />
                  Kerala, India
                </p>

              </div>


              <div>

                <span>PHONE</span>

                <p>
                  +91 XXXXX XXXXX
                </p>

              </div>


              <div>

                <span>EMAIL</span>

                <p>
                  info@lnetechnology.com
                </p>

              </div>

            </div>

          </div>


          <div className="map-container">
            <a
              href="https://maps.app.goo.gl/7dhfnVKLxYBZSdE37"
              target="_blank"
              rel="noopener noreferrer"
              className="map-location-link"
            >
              <div className="map-location-icon">
                ↗
              </div>

              <div className="map-location-text">
                <strong>LNE Technology</strong>
                <span>View on Google Maps</span>
              </div>
            </a>

            <iframe
              title="LNE Engineering Pvt Ltd Location"
              src="https://www.google.com/maps?q=10.5361903,76.2611716&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
            <div className="map-overlay-label">
              <span>LOCATION</span>
              <strong>LNE ENGINEERING PVT LTD</strong>
            </div>
          </div>

        </div>

      </div>

    </section>

    </main>
  );
}

export default Contact;