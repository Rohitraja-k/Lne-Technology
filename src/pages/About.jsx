import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import AboutValues from "../components/AboutValues";

function About() {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
    </main>
  );
}

export default About;