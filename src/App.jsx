import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import HeroWithNavbar from "./components/HeroNav";
import AboutMe from "./components/AboutMe";
import SkillsCarousel from "./components/SkillsCarousel";
import Projects from "./components/Projects";
import ContactMe from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Preloader />}
      {!loading && (
        <>
          <HeroWithNavbar />

          {/* sections with IDs */}
          <section id="about">
            <AboutMe />
          </section>

          <section id="skills">
            <SkillsCarousel />
          </section>

          <section id="projects">
            <Projects />
          </section>
          <section id="contact-me">
            <ContactMe />
          </section>
        </>
      )}
    </div>
  );
}
