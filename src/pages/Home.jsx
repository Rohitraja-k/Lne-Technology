import { Navigate, useNavigate } from "react-router-dom";
import "../styles/home.css"
import IntroSection from "../components/IntroSection.jsx";
import ExpertiseSection from "../components/ExpertiseSection.jsx";
import WhyLNE from "../components/WhyLNE.jsx";
import { useEffect } from "react";

function Home() {

useEffect(()=>{
  window.scrollTo({
  top:0,
  behavior: "smooth",
});
},[]);

const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">LNE TECHNOLOGY</p>

          <h1>
            Engineering Solutions
            <br />
            Built for What's Next.
          </h1>

          <p className="hero-description">
            Delivering reliable engineering and technical solutions
            through expertise, quality and innovation.
          </p>

          <div className="hero-buttons">
            <button className="button1"
            onClick={()=>navigate("/divisions")}
            >Explore Our Solutions</button>
            <button
            onClick={()=> navigate("/contact")}
            >Contact Us</button>
          </div>
        </div>
      </section>
      <IntroSection />
      <ExpertiseSection />
      <WhyLNE />
    </main>
  );
}

export default Home;