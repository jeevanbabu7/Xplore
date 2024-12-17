import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import ParallaxLayer from "../components/ParallaxLayer";
import Events from "./Events";
import Workshops from "./Workshops";
import ContactPage from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="h-screen overflow-y-scroll 
      scrollbar-thin scrollbar-thumb-gray-300/50 scrollbar-track-gray-100/20 
      dark:scrollbar-thumb-neutral-500/50 dark:scrollbar-track-neutral-700/20"
      id="home"
    >
      <ParallaxLayer scrollToSection={scrollToSection} />
      <section className="z-50 mt-5">
        <div id="about">
          <AboutPage />
        </div>
        <div id="events">
          <Events />
        </div>
        <div id="workshops">
          <Workshops />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </section>
    </div>
  );
};

export default Home;
