import React from "react";
import Navbar from "../components/Navbar";
import heroBg from '../assets/images/hero-bg.png'
import xploreLogo from '../assets/images/xplore-logo.jpeg'
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 "></div>

        {/* Navbar Positioned at the Top */}
        <Navbar />

        <div className="h-screen mt-16 flex flex-col text-white">
          <div className="w-full flex flex-col justify-center items-center pt-20 sm:pt-52 md:pt-10 z-40">
          
            <img src='./hero.png' className="w-[60%] sm:w-[50%] md:w-[45%]" />
            <p className="text-2xl sm:text-4xl font-bold text-center">
              NATIONAL LEVEL MULTI-FEST
            </p>
          </div>

          <div className="flex md:justify-start md:pl-32 sm:justify-center z-50">
            <img src='./register_btn.png' className="w-52 h-10 sm:w-48 mt-10 cursor-pointer" onClick={() => {navigate}}
              alt="Register Now"
            />
          </div>
        </div>



      </section>
    </div>
  );
};

export default Home;
