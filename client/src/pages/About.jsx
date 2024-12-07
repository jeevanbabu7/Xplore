import React from 'react';
import PageHeader from '../components/PageHeader';
import eventImg from '../assets/images/events-img.png'
import workshopImg from '../assets/images/workshop-img.png'

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#2c0c0c] to-black text-white py-10 px-5">
      <PageHeader title="About Xplore" color="#007bff" />

    {/* About us */}
      <div className="px-8 lg:px-16 py-12 lg:py-16 min-h-screen">
        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
            Welcome to Xplore 25, the premier Techno-Management-Cultural Festival of the Government College of Engineering, Kaluni (GCEK). Building on the vibrant legacy of Xplore, the event is a grand confluence of technology, management, and culture, offering a platform for innovation, collaboration, and celebration.
          </p>
          <button>XPLORE MORE</button>
        </section>

    {/*Legacy */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Legacy</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
            First held in 2015, Xplore has grown to become a symbol of excellence and creativity in the student community. The 2022 edition, Xplore 25, marked the landmark 25th iteration, featuring a dynamic mix of technical, managerial, and cultural events, workshops, and competitions that have become a staple of the festival. Spanning across 3 days, Xplore 25 witnessed participation from students and professionals from across the country.
          </p>
        </section>

    {/* What we offer */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300 mb-6 tracking-wide drop-shadow-sm">
            Xplore 25 promises to raise the bar, continuing the tradition of excellence while introducing cutting-edge themes and activities. Whether you're a tech enthusiast, a management geek, or an artist at heart, Xplore 25 has something for everyone. Here's what you can expect:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
            <li>Technical Events: Hackathons, coding challenges, and workshops on emerging technologies</li>
            <li>Management Challenges: Business plan competitions, strategy games, and entrepreneur talks</li>
            <li>Cultural Extravaganza: Music, dance, and drama performances celebrating diverse talents</li>
            <li>Networking Opportunities: Meet industry leaders, innovators, and like-minded peers</li>
          </ul>
        </section>

    {/* Events Section */}
        <section className="py-5 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event Image */}
            <div className="bg-cover bg-center h-64 lg:h-80 rounded-sm" style={{ backgroundImage: `url(${eventImg})` }} />
            
            {/* Event Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-6 tracking-wide drop-shadow-lg">EVENTS</h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
                Xplore 24 will feature an exciting lineup of events, including hackathons, robotics competitions, and coding challenges for tech enthusiasts, alongside management games and entrepreneurial workshops to foster leadership skills. Cultural performances in music, dance, and drama will add a creative flair, making it a vibrant and diverse platform for innovation, learning, and celebration.
              </p>
              <button className="w-[30%] text-white font-bold border-2 border-blue-400 bg-transparent py-2 px-6 rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 text-lg">
                XPLORE MORE
              </button>

            </div>
          </div>
        </section>

    {/* Workshops Section */}
        <section className="py-5 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Workshop Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-6 tracking-wide drop-shadow-lg">WORKSHOPS</h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
                Xplore 24 will feature workshops tailored to span all branches of engineering, providing hands-on learning experiences for students of Civil, EEE, ECE, CSE, and Mechanical Engineering. From advanced topics like structural modeling, smart grids, IoT, and machine learning to practical skills in 3D printing, robotics, and renewable energy systems, these sessions aim to bridge academic concepts with industry applications. 
              </p>
              <button className="w-[30%] text-white font-bold border-2 border-blue-400 bg-transparent py-2 px-6 rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 text-lg">
                XPLORE MORE
              </button>
            </div>

            {/* Workshop Image */}
            <div className="bg-cover bg-center h-64 lg:h-80" style={{ backgroundImage: `url(${workshopImg})` }} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
