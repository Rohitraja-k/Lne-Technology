
import { useEffect } from "react";

import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import AboutValues from "../components/AboutValues";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="about-page">
      <AboutHero />
      <AboutIntro />
      <AboutValues />
    </main>
  );
}

export default About;
