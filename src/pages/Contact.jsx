import { useEffect, useState } from "react";
import "../styles/contact.css";

function Contact() {

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behaviour: "smooth"
    });
  },[]);

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

    try {
    const response = await fetch("http://localhost:5000/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
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
    }
  } catch (error) {
  console.error("Error submitting enquiry:", error);
  }

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
                  >

                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option value="project">
                      Project / Engineering Enquiry
                    </option>

                    <option value="product">
                      Product Enquiry
                    </option>

                    <option value="technical">
                      Technical Support
                    </option>

                    <option value="service">
                      Service Enquiry
                    </option>

                    <option value="quotation">
                      Quotation Request
                    </option>

                    <option value="partnership">
                      Business / Partnership
                    </option>

                    <option value="career">
                      Career Enquiry
                    </option>

                    <option value="other">
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
                  ></textarea>

                  {errors.message && (
                    <small>
                      {errors.message}
                    </small>
                  )}

                </div>


                <button
                  type="submit"
                  className="enquiry-submit"
                >

                  <span>
                    Submit Enquiry
                  </span>

                  <span className="submit-arrow">
                    →
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
                  Thrissur,Kerala, India
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


            <div className="map-placeholder">

              <div className="map-grid"></div>

              <div className="map-marker">

                <span className="marker-dot"></span>

                <div>

                  <strong>
                    LNE Technology
                  </strong>

                  <small>
                    Kerala, India
                  </small>

                </div>

              </div>

              <span className="map-label">
                LOCATION
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;