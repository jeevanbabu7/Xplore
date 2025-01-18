import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import eventBanner from "../assets/images/event-banner.png";
import Event from "../components/Event";
import { eventData, culturalEventData } from "../utils/eventData.js";
import CulturalCard from "../components/CulturalCard.jsx";

const Events = () => {
  const [eventType, setEventType] = useState("technical");
  const [filteredEvents, setFilteredEvents] = useState(eventData);

  useEffect(() => {
    setFilteredEvents(eventType === "cultural" ? culturalEventData : eventData);
  }, [eventType]);

  const bannerAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 100, friction: 20 },
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const gradientBackground = "linear-gradient(159deg, rgba(253,1,48,1) 0%, rgba(200,1,38,1) 0%, rgba(173,1,33,1) 0%, rgba(160,1,31,1) 0%, rgba(149,1,29,1) 0%, rgba(141,1,27,1) 0%, rgba(126,1,24,1) 0%, rgba(89,0,17,1) 0%, rgba(140,1,27,1) 0%, rgba(62,1,12,1) 0%, rgba(90,1,18,1) 0%, rgba(90,1,18,1) 0%, rgba(91,1,18,1) 0%, rgba(71,1,14,1) 21%, rgba(36,0,7,1) 36%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 91%)";

  return (
    <div style={{ background: gradientBackground }}>
      {/* Animated Banner Section */}
      <animated.section
        className="w-full min-h-[150px] md:min-h-[200px] bg-cover bg-center bg-no-repeat"
        style={{
          ...bannerAnimation,
          backgroundImage: `url(${eventBanner})`,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)", // Deeper and larger shadow
          borderBottom: "5px solid rgba(0, 0, 0, 0.2)",  // Optional bottom border
        }}
      ></animated.section>


      {/* Event Type Buttons */}
      <div className="flex justify-center space-x-8 my-8 px-4">
        <button
          className={`px-6 py-3 rounded-full text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
            eventType === "technical" 
              ? "bg-gradient-to-r from-red-600 to-red-800 shadow-lg" 
              : "bg-gradient-to-r from-gray-700 to-gray-900 opacity-75 hover:opacity-100"
          }`}
          onClick={() => {
            setFilteredEvents(eventData);
            setEventType("technical");
          }}
        >
          Technical Events
        </button>
        <button
          className={`px-6 py-3 rounded-full text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
            eventType === "cultural" 
              ? "bg-gradient-to-r from-red-600 to-red-800 shadow-lg" 
              : "bg-gradient-to-r from-gray-700 to-gray-900 opacity-75 hover:opacity-100"
          }`}
          onClick={() => {
            setFilteredEvents(culturalEventData);
            setEventType("cultural");
          }}
        >
          Cultural Events
        </button>
      </div>

      {/* Event List */}
      <div className="w-full min-h-screen flex flex-wrap justify-center gap-8 p-8 md:gap-16 md:px-16 lg:px-32">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {(eventType === "cultural" ? (<CulturalCard eventDetails={event}/>): <Event eventDetails={event} type={eventType} />)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;

