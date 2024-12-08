import React from "react";
import heroBg from '../assets/images/hero-bg3.jpg'
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import date from "../assets/images/date-img.png";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
  {/* Hero Section */}
      <section
        className="relative -top-16 w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0"></div>

        <div className="h-screen mt-16 flex flex-col text-white relative md:gap-10 lg: gap-10">
          <div className="w-full flex flex-col justify-center items-center pt-20 sm:pt-52 md:pt-10 z-30">
            <img src="./logo.png" className="w-[40%] sm:w-[70%] md:w-[35%]" alt="Hero" />
            <p className="text-2xl sm:text-4xl font-bold text-center">
              NATIONAL LEVEL MULTI-FEST
            </p>
          </div>

          <div className="w-full flex flex-col sm:justify-center items-center sm:flex-row pl-10 pr-10 flex-wrap md:gap-10 lg:gap-10 gap-20 py-8 md:justify-between lg:justify-between">
            <img
              src="./register_btn.png"
              className="w-52 h-10 sm:w-48 cursor-pointer animate-bounce transition-all ease-in-out duration-1500"
              onClick={() => navigate('/about')}
              alt="Register Now"
            />
            <img
              src={date}
              className="w-52 h-10 sm:w-48 cursor-pointer"
              onClick={() => navigate('/about')}
              alt="Date"
            />
          </div>
        </div>
      </section>
      <section className="-mt-16">
        <AboutPage />
      </section>
    </div>

  );
};

export default Home;
