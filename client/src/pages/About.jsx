import React from 'react';
import PageHeader from '../components/PageHeader';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a0000] to-black text-white py-10 px-5">
      <PageHeader title="About Xplore" color="#007bff" />

      <div className="px-8 lg:px-16 py-12 lg:py-16 min-h-screen">
        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Welcome to Xplore 25, the premier Techno-Management-Cultural Festival of the Government College of Engineering, Kaluni (GCEK). Building on the vibrant legacy of Xplore, the event is a grand confluence of technology, management, and culture, offering a platform for innovation, collaboration, and celebration.
          </p>
        </section>

        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Legacy</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            First held in 2015, Xplore has grown to become a symbol of excellence and creativity in the student community. The 2022 edition, Xplore 25, marked the landmark 25th iteration, featuring a dynamic mix of technical, managerial, and cultural events, workshops, and competitions that have become a staple of the festival. Spanning across 3 days, Xplore 25 witnessed participation from students and professionals from across the country.
          </p>
        </section>

        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Xplore 25 promises to raise the bar, continuing the tradition of excellence while introducing cutting-edge themes and activities. Whether you're a tech enthusiast, a management geek, or an artist at heart, Xplore 25 has something for everyone. Here's what you can expect:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg lg:text-xl">
            <li>Technical Events: Hackathons, coding challenges, and workshops on emerging technologies</li>
            <li>Management Challenges: Business plan competitions, strategy games, and entrepreneur talks</li>
            <li>Cultural Extravaganza: Music, dance, and drama performances celebrating diverse talents</li>
            <li>Networking Opportunities: Meet industry leaders, innovators, and like-minded peers</li>
          </ul>
        </section>

        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-cover bg-center h-64 lg:h-80" style={{ backgroundImage: `url('/images/events-image.jpg')` }} />
            <div className="bg-cover bg-center h-64 lg:h-80" style={{ backgroundImage: `url('/images/workshops-image.jpg')` }} />
          </div>
        </section>

        <section className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Workshops</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-cover bg-center h-64 lg:h-80" style={{ backgroundImage: `url('/images/technical-workshops.jpg')` }} />
            <div className="bg-cover bg-center h-64 lg:h-80" style={{ backgroundImage: `url('/images/management-workshops.jpg')` }} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;