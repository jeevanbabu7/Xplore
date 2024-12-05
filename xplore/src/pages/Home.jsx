import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
          <img src="/assets/images/logo.png" alt="Xplore 24" className="w-48 mb-4" />
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

      {/* Events Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Our Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Cards */}
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img src="/assets/images/events/vr-games.jpg" alt="VR Games" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold">VR Games</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/events/vr-games" className="text-blue-500 mt-4 inline-block">
                View Details
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img src="/assets/images/events/esports.jpg" alt="E-Sports" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Enter in E-Sports</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/events/esports" className="text-blue-500 mt-4 inline-block">
                View Details
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img src="/assets/images/events/gaming.jpg" alt="Gaming" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Gaming</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="/events/gaming" className="text-blue-500 mt-4 inline-block">
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
