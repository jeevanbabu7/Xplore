import React from "react";
import Navbar from "../components/Navbar";
import heroBg from '../assets/images/hero-bg.jpg'
import xploreLogo from '../assets/images/xplore-logo.jpeg'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 "></div>

        {/* Navbar Positioned at the Top */}
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
          {/* <img src={xploreLogo} alt="Xplore 24" className="w-48 mb-4" /> */}
          <h1 className="text-5xl font-bold uppercase">Xplore 24</h1>
          <p className="text-xl mt-2">National Level Multi-Fest</p>
          <p className="mt-4 text-lg">GCE Kannur | 6, 7, 8 Feb 2025</p>
          <a
            href="/register"
            className="mt-8 px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all rounded-lg"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
