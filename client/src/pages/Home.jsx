import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import ParallaxLayer from "../components/ParallaxLayer";
import Events from "./Events";
import Workshops from "./Workshops";
import ContactPage from "./Contact";
import { ReactLenis } from "@studio-freight/react-lenis";
import { VelocityScroll } from "../components/ui/scroll-based-velocity";
import Loading from "../components/Loading";

const Home = () => {
  const navigate = useNavigate();

  const lenisOptions = {
    lerp: 0.2,
    duration: 1.5,
    smoothTouch: true,
    smooth: true,
  };


  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  
  return (
    <div  id="home">
      {/* Don't render the navbar here */}
      <div className="h-screen sm:mb-0 md:mb-36">
        <ParallaxLayer />
      </div>
      <section className="z-50 mt-32 md:mt-0 h-fit">
        <ReactLenis root options={lenisOptions}>
          <div
            id="about"
            className="shadow-top-only mt-16"
            style={{
              boxShadow: "0 -50px 100px rgba(0, 0, 0, 0.75)",
              position: "relative",
            }}
          >
            <AboutPage />
          </div>

          <VelocityScroll
            text="XPLORE'24"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] md:tracking-[-0.03em] md:drop-shadow-lg bg-black"
          />
          <div id="events" className="h-fit">
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
      {loading && (
        <Loading />
      )}
    </div>
  );
};

export default Home;
