import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import contactBanner from '../assets/images/contact-banner.png'
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  // State for toggling visibility of the FAQ content
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-b from-red-900 via-black to-black"

    >
      <div
        className="w-full h-32 md:h-[200px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactBanner})`, // Use the imported path
     
        }}
      ></div>

      <div className="w-full max-w-4xl py-6 flex flex-col items-center">
        {/* Get in Touch Section */}
        <section className="py-8 md:py-16 w-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch with us</h2>
              <p className="text-gray-400 text-lg">We'd love to hear from you!</p>
            </div>
            <div className="md:w-1/2 flex flex-col space-y-4 w-full">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <div className="relative flex-1">
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <textarea
                placeholder="Enter your Message"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors w-24">
                Send
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full mb-16 mt-20 px-5">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-600 py-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">What is Xplore '25?</h3>
              <button 
                className="text-3xl text-white"
                onClick={() => toggleFAQ(0)}
              >
                {activeIndex === 0 ? '-' : '+'}
              </button>
            </div>
            {activeIndex === 0 && (
              <div className="bg-gray-800 p-6 mt-4 text-lg text-white">
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec orci malesuada condimentum...</p>
              </div>
            )}
            
            {/* FAQ Item 2 */}
            <div className="border-b border-gray-600 py-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">How can I register?</h3>
              <button 
                className="text-3xl text-white"
                onClick={() => toggleFAQ(1)}
              >
                {activeIndex === 1 ? '-' : '+'}
              </button>
            </div>
            {activeIndex === 1 && (
              <div className="bg-gray-800 p-6 mt-4 text-lg text-white">
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec orci malesuada condimentum...</p>
              </div>
            )}
            
            {/* FAQ Item 3 */}
            <div className="border-b border-gray-600 py-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Will accommodation be provided?</h3>
              <button 
                className="text-3xl text-white"
                onClick={() => toggleFAQ(2)}
              >
                {activeIndex === 2 ? '-' : '+'}
              </button>
            </div>
            {activeIndex === 2 && (
              <div className="bg-gray-800 p-6 mt-4 text-lg text-white">
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec orci malesuada condimentum...</p>
              </div>
            )}
            
            {/* FAQ Item 4 */}
            <div className="border-b border-gray-600 py-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Will certificates be provided?</h3>
              <button 
                className="text-3xl text-white"
                onClick={() => toggleFAQ(3)}
              >
                {activeIndex === 3 ? '-' : '+'}
              </button>
            </div>
            {activeIndex === 3 && (
              <div className="bg-gray-800 p-6 mt-4 text-lg text-white">
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec orci malesuada condimentum...</p>
              </div>
            )}
            
            {/* FAQ Item 5 */}
            <div className="border-b border-gray-600 py-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">How much does it cost to register?</h3>
              <button 
                className="text-3xl text-white"
                onClick={() => toggleFAQ(4)}
              >
                {activeIndex === 4 ? '-' : '+'}
              </button>
            </div>
            {activeIndex === 4 && (
              <div className="bg-gray-800 p-6 mt-4 text-lg text-white">
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec orci malesuada condimentum...</p>
              </div>
            )}
          </div>
        </section>


        {/* Contact Details */}
        <section className="w-full mt-12 px-5">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Inquiries */}
            <div className="group flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-950 text-white p-8 rounded-lg shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-yellow-500 p-4 rounded-full">
                <FaEnvelope className="text-3xl text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-yellow-500 transition-colors">
                General Inquiries
              </h3>
              <a
                href="mailto:general@xplore25.com"
                className="mt-2 text-sm font-medium hover:underline"
              >
                general@xplore25.com
              </a>
              <a
                href="tel:+123456789"
                className="mt-1 text-sm font-medium hover:underline"
              >
                +1 234 567 89
              </a>
            </div>

            {/* Technical Support */}
            <div className="group flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-950 text-white p-8 rounded-lg shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-yellow-500 p-4 rounded-full">
                <FaPhone className="text-3xl text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-yellow-500 transition-colors">
                Technical Support
              </h3>
              <a
                href="mailto:support@xplore25.com"
                className="mt-2 text-sm font-medium hover:underline"
              >
                support@xplore25.com
              </a>
              <a
                href="tel:+987654321"
                className="mt-1 text-sm font-medium hover:underline"
              >
                +9 876 543 21
              </a>
            </div>

            {/* Venue */}
            <div className="group flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-950 text-white p-8 rounded-lg shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="bg-yellow-500 p-4 rounded-full">
                <FaMapMarkerAlt className="text-3xl text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-yellow-500 transition-colors">
                Venue
              </h3>
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-medium hover:underline"
                onClick={() => navigate("/get-directions")}
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>


        {/* Social Icons */}
        <div className="mt-12 mb-6 flex justify-center w-full">
          {/* <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaDiscord />
          </a> */}
          <a href="#" className="text-white hover:text-gray-400 mx-2 text-xl">
            <FaLinkedin />
          </a>
          <a target='*' href="https://www.instagram.com/xplore.24?igsh=ZXc4NWplaDNnZmZo" className="text-white hover:text-gray-400 mx-2 text-xl">
            <FaInstagram />
          </a>
          <a target='*' href="https://whatsapp.com/channel/0029Van4hPFJ3juqHUezQ82f" className="text-white hover:text-gray-400 mx-2 text-xl">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
