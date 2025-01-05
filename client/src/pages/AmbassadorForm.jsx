import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import { FaCopy } from "react-icons/fa";


const AmbassadorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    course: "",
    college: "",
    why: "",
    skills: "",
    promote: "",
    hours: "",
    comments: "",
    ambassadorId: ""
  });

  const sendEmail = async (to, subject, html) => {
    try {
      const IP_ADDRESS = import.meta.env.VITE_IP_ADDRESS;
      const PORT = import.meta.env.VITE_PORT;
      console.log(IP_ADDRESS, PORT);
      

      const response = await fetch(`https://api.explore24.com/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, html }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Email sent successfully:', data);
      } else {
        console.error('Error sending email:', data.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const requiredFields = ["name", "email", "whatsapp", "course", "college"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    for (let field of requiredFields) {
      if (!formData[field]) {
        toast.error('Fill required fields!!', {
          position: 'top-left',
        });
        return;
      }
    }

    setFormData(prevState => ({
      ...prevState,
      ambassadorId: uuidv4(),
    }));
    const html = `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
          <h1 style="color: #4CAF50;">You have successfully registered as an ambassador for Xplore'24!</h1>
          <div style="margin-top: 20px;">
              <img src="path_to_image.jpg" alt="Ambassador Image" style="max-width: 200px; height: auto; margin: 20px 0;">
          </div>
          <p style="font-size: 18px; font-weight: bold; color: #333;">Ambassador ID: ${formData.ambassadorId}</p>
      </div>

    `;
    try {

      const res = await fetch('https://api.xplore24.com/ambassador-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      sendEmail(formData.email, 'Ambassador Registration', html);
  
      toast.success('Form submitted successfully!', {
        position: 'top-left',
      });
      console.log(data);

    }
    catch (error) {
      console.error('Error sending email:', error);
    }

 
    console.log(formData);
  }
  const handleCopyClick = async (text) => {
      try {
          await window.navigator.clipboard.writeText(text);
          toast.success('Copied to clipboard!');
      } catch (err) {
          console.error(
              "Unable to copy to clipboard.",
              err
          );
          toast.error('Unable to copy to clipboard!');
      }
  };

  const contactData = [
    {
      name: "Sooryadeep A V",
      number: "+91 6282431171"
    },
    {
      name: "Rishana Rahman",
      number: "+91 7560910408"
    },
    {
      name: "Anna V Mariya",
      number: "+91 9037033138"
    }
  ];
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-b from-red-900 via-black to-black mt-16">
      <div className="w-full py-6 flex flex-col items-center">
        <section className="py-8 md:py-16 w-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-full">
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-10 md:-mt-96">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Team!</h2>
              <p className="text-gray-400 text-lg mb-10">Lead the way, build connections, and make unforgettable memories. Your fest, your impact!</p>
              <div className="mockup-window bg-[#0A0202]  w-full shadow-lg shadow-[#832117]">
                <div className=" flex justify-start px-4 py-2 bg-[#0A0202]">
                  <p className='font-extrabold text-2xl'>Contact </p>
                </div>
                
                <div className="bg-[#0A0202] flex flex-col gap-5 justify-start px-10 py-2">
                  {contactData.map((contact, index) => {
                    return (
                      <p key={index} className="font-bold flex items-center ">
                        {contact.name}: {contact.number} <FaCopy className="ml-2 cursor-pointer" onClick={() => handleCopyClick(contact.number)}/>
                      </p>
                    )
                  })}
                  
                </div>
                
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col space-y-4 w-full">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter Full Name*"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp Number*"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your Email*"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  onChange={handleChange}
                  type="tel"
                  name="course"
                  placeholder="Course and Year of Study*"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <input
                onChange={handleChange}
                type="text"
                name="college"
                placeholder="College Name*"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                required
              />

              <textarea
                onChange={handleChange}
                name="why"
                placeholder="Why do you want to be a campus ambassador for Xplore'24?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="skills"
                placeholder="What skills or experiences do you have that make you a good fit for this role?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="promote"
                placeholder="How would you promote Xplore'24 on your campus?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="hours"
                placeholder="How many hours per week can you commit to this role?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="comments"
                placeholder="Any additional comments or questions:"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>

              <button
                className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors w-24"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </div>

      <ToastContainer /> 
    </div>
  );
}

export default AmbassadorForm;
