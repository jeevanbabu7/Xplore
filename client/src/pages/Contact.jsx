import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt} from 'react-icons/fa';
import contactBanner from '../assets/images/contact-banner.png'
import { useNavigate } from 'react-router-dom';
import SocialIcons from '../components/SocialIcons.jsx';
import WordPullUp from "../components/ui/word-pull-up";

const ContactPage = () => {
  const navigate = useNavigate();
  // State for toggling visibility of the FAQ content
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [queryData, setQueryData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryData({
      ...queryData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Contact Query</h2>
          <p><strong>First Name:</strong> ${queryData.firstName}</p>
          <p><strong>Last Name:</strong> ${queryData.lastName}</p>
          <p><strong>Email:</strong> ${queryData.email}</p>
          <p><strong>Phone:</strong> ${queryData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${queryData.message}</p>
        </div>
      `;
      const response = await fetch(`https://api.explore24.com/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to: "jeevanbabu190@gmail.com",subject: "General query", html: emailContent }),
      });

      const data = await response.json();
    }
    catch(err) {
      console.error(err);
    }
    
  }


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
                  name='firstName'
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  name='lastName'
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  name='email'
                  onChange={handleChange}
                />
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    name='phone'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                placeholder="Enter your Message"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                name='message'
                onChange={handleChange}
              ></textarea>
              <button className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors w-24"
                onClick={handleSubmit}
              >
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
              <h3 className="text-xl font-bold text-white">What is Xplore '24?</h3>
              <button 
                className="text-3xl text-white"
                onClick={() => toggleFAQ(0)}
              >
                {activeIndex === 0 ? '-' : '+'}
              </button>
            </div>
            {activeIndex === 0 && (
              <div className="bg-gray-800 p-6 mt-4 text-lg text-white">
                <p className="text-lg">Xplore '24 stands as a beacon of innovation, creativity, and excellence, uniting the realms of technology, management, and culture under one dynamic platform. Rooted in the vibrant legacy of its predecessors, Xplore continues to push boundaries, inspiring students, professionals, and enthusiasts to collaborate, compete, and celebrate the spirit of progress.  
                With cutting-edge technical workshops, thought-provoking management challenges, and vibrant cultural performances, Xplore '24 promises an unforgettable experience for all participants.  </p>
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
                <p className="text-lg">Update soon..</p>
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
                <p className="text-lg">Accommodation will be provided to valid attendees of the Xplore Multifest at a nominal charge. Further details regarding availability and charges will be shared upon successful registration.</p>
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
                <p className="text-lg">Update soon..</p>
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
                <p className="text-lg">Update soon..</p>
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
                xplore24.gcek@gmail.com
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
                className="mt-2 text-sm font-medium hover:underline hover:cursor-pointer"
                onClick={() => navigate("/get-directions")}
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>


        {/* Social Icons */}
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactPage;
