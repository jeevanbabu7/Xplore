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
    ambassadorId: uuidv4()
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (to, subject, html) => {
    try {
           

      const response = await fetch(`https://api.xplore24.com/send-email`, {
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
    setLoading(true);
    setFormData(prevState => ({
      ...prevState,
      ambassadorId: uuidv4(),
    }));
    const html = `
      <div style="font-family: 'Roboto', sans-serif; text-align: center; padding: 30px; background-color: #e8f5e9; border: 1px solid #c8e6c9; border-radius: 10px; max-width: 600px; margin: 20px auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #388e3c; margin-bottom: 20px;">You have successfully registered as an ambassador for Xplore'24!</h1>
        <div style="margin-top: 20px;width: 100%; display: flex; justify-content: center;">
            <img src="https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/email_banner.png?alt=media&token=5aaaa7ca-ad39-4f44-acda-b77f16d92567" alt="Ambassador Image" style="width: 80%; height: auto; margin: 20px 0;">
        </div>
        <p style="font-size: 18px; font-weight: bold; color: #2e7d32;">Ambassador ID: ${formData.ambassadorId}</p>
        <p style="font-size: 16px; color: #4f4f4f; margin-top: 10px;">Welcome aboard! We’re excited to have you as part of the Xplore'24 team.</p>
        <a href="https://chat.whatsapp.com/BNK5mkNURwBJp37uzMO777" target="_blank" style="text-decoration: none;">
            <button style="background-color: #388e3c; color: #ffffff; font-size: 16px; padding: 10px 20px; margin-top: 20px; border: none; border-radius: 5px; cursor: pointer; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
                Join WhatsApp Group
            </button>
        </a>
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
  
      console.log(data);
      toast.success(data.message, {
        position: 'top-left',
      });

      setFormData({
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
        ambassadorId: uuidv4()
      });
      setLoading(false);

      

    }
    catch (error) {
      console.error('Error sending email:', error);
      toast.error("Error in submitting the form.Please try again..", {
        position: 'top-left',
      });
      setLoading(false);
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
                  value={formData.name}
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="whatsapp"
                  placeholder="WhatsApp Number*"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={formData.whatsapp}
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
                  value={formData.email}
                  required
                />
                <input
                  onChange={handleChange}
                  type="text"
                  name="course"
                  placeholder="Course and Year of Study*"
                  className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={formData.course}
                  required
                />
              </div>

              <input
                onChange={handleChange}
                type="text"
                name="college"
                placeholder="College Name*"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                value={formData.college}
                required
              />

              <textarea
                onChange={handleChange}
                name="why"
                placeholder="Why do you want to be a campus ambassador for Xplore'24?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.why}
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="skills"
                placeholder="What skills or experiences do you have that make you a good fit for this role?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.skills}
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="promote"
                placeholder="How would you promote Xplore'24 on your campus?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.promote}
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="hours"
                placeholder="How many hours per week can you commit to this role?"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.hours}
                required
              ></textarea>

              <textarea
                onChange={handleChange}
                name="comments"
                placeholder="Any additional comments or questions:"
                className="bg-gray-900 text-gray-400 px-4 py-3 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={formData.comments}
              ></textarea>

              <button
                className="bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors w-24"
                onClick={handleSubmit}
              >
                {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Submit'}
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
