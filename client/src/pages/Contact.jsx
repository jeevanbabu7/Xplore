import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa';
import contactBanner from '../assets/images/contact-banner.png'

const ContactPage = () => {
  // State for toggling visibility of the FAQ content
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-b from-red-900 via-black to-black">
      <div
        className="w-full bg-cover bg-center bg-no-repeat md:h-[280px] h-[180px] bg-cove"
        style={{
          backgroundImage: `url(${contactBanner})`, // Use the imported path
          height: '280px', // Default height for larger screens
        }}
      ></div>

      <div className="w-full max-w-4xl px-8 py-6 flex flex-col items-center">
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

        {/* Social Icons */}
        <div className="flex justify-center w-full mb-8">
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaDiscord />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
