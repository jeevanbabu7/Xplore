import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import ParallaxLayer from "../components/ParallaxLayer";
import Events from "./Events";
import Workshops from "./Workshops";
import ContactPage from "./Contact";
import { ReactLenis } from "@studio-freight/react-lenis";
 

const Home = () => {
  const navigate = useNavigate();

 
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, 
    smooth: true,
  };

  return (
    <div
      className="h-screen"
      id="home"
    >
      <ParallaxLayer />
      <section className="z-50 mt-5">
      <ReactLenis root options={lenisOptions}>
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
        </ReactLenis>
      </section>
    </div>
  );
};

export default Home;
