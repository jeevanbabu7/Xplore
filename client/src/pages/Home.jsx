import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import ParallaxLayer from "../components/ParallaxLayer";
import Events from "./Events";
import Workshops from "./Workshops";
import ContactPage from "./Contact";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
  {/* Hero Section */}
      <ParallaxLayer  />
      <section className="-mt-16 z-50">
        <AboutPage />
        <Events />
        <Workshops />
        <ContactPage />
      </section>
    </div>

  );
};

export default Home;
