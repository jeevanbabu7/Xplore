import React from "react";
import { motion } from "framer-motion";
import workshopBanner from "../assets/images/workshop-banner.png";
import Event from "../components/Event";
import { workshopData } from "../utils/eventData.js";

const Workshops = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Workshop Banner Section */}
      <motion.section
        className="w-full h-[20vh] md:h-[25vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${workshopBanner})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.section>

      {/* Workshop List */}
      <div
        style={{
          background:
            "linear-gradient(45deg, rgba(75,0,130,0.6) 0%, rgba(0,0,0,1) 90%)",
        }}
        className="w-full min-h-[75vh] md:min-h-[80vh] flex flex-wrap justify-center items-start gap-8 p-8 md:gap-16 md:px-16 lg:px-32"
      >
        {workshopData.map((event, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            custom={index} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Event eventDetails={event} type="workshop" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Workshops;
