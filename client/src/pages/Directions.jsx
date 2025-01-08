import React from "react";
import { FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa';

const GetDirections = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-black to-black text-white flex flex-col items-center justify-center pt-16">
      {/* Header */}
      <header className="text-center py-6 px-4 w-full mt-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white">Get Directions</h1>
        <p className="text-lg sm:text-lg md:text-xl text-gray-300 mt-4">
          Find us at our venue and join the exciting event!
        </p>
      </header>

      {/* Directions Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4 w-full max-w-6xl">
        {/* Left Column: Map */}
        <div className="flex justify-center w-full md:w-1/2 mb-12 md:mb-0">
          <div className="w-full h-80 md:h-[400px] rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=11.986001564305914,75.38173836857075&key=AIzaSyCjngIi8RzMqhJVGj2egMNQDRTmKOwDUWY"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Address and Info */}
        <div className="w-full md:w-1/2 text-center md:text-left md:ml-8">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-white">Event Location</h2>
          <p className="mt-6 text-lg sm:text-lg md:text-xl text-white bg-black p-4 rounded-lg border-2 border-slate-500 shadow-lg hover:bg-gray-700 transition-all duration-300">
            Government College of Engineering, Kannur, Mangattuparamba, Parassinikadavu P.O., Kannur, Kerala 670563
          </p>
          <p className="text-lg sm:text-lg md:text-xl text-gray-300 mt-4">
            Join us at the venue for an exciting experience with lots of events and workshops!
          </p>
          <a className="text-lg sm:text-lg md:text-xl text-gray-300 mt-4"
            href="tel:+91 7994360529"
          >
            <strong>Contact:</strong> +91 7994360529
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-auto w-full">
        <a href="#" className="text-white hover:text-gray-400 mx-2 text-xl sm:text-xl md:text-2xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-400 mx-2 text-xl sm:text-xl md:text-2xl">
          <FaDiscord />
        </a>
        <a href="#" className="text-white hover:text-gray-400 mx-2 text-xl sm:text-xl md:text-2xl">
          <FaLinkedin />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 w-full bg-black text-gray-400">
        <p className="text-sm sm:text-sm md:text-base">&copy; 2024 Tech Fest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default GetDirections;
