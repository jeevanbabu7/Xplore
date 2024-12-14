import React from "react";
import { useSpring, animated } from "@react-spring/web";
import eventBanner from "../assets/images/event-banner.png";
import Event from "../components/Event";
import { eventData } from "../utils/eventData.js";

const Events = () => {
  // Define the animation using useSpring
  const bannerAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 100, friction: 20 },
  });

  return (
    <>
      {/* Animated Banner Section */}
      <animated.section
        className="w-full md:h-screen h-32 md:h-[280px] bg-cover bg-center bg-no-repeat"
        style={{
          ...bannerAnimation,
          backgroundImage: `url(${eventBanner})`,
        }}
        
      ></animated.section>

      {/* Event List */}
      <div
        
        style={{
          background:
            "linear-gradient(159deg, rgba(253,1,48,1) 0%, rgba(200,1,38,1) 0%, rgba(173,1,33,1) 0%, rgba(160,1,31,1) 0%, rgba(149,1,29,1) 0%, rgba(141,1,27,1) 0%, rgba(126,1,24,1) 0%, rgba(89,0,17,1) 0%, rgba(140,1,27,1) 0%, rgba(62,1,12,1) 0%, rgba(90,1,18,1) 0%, rgba(90,1,18,1) 0%, rgba(91,1,18,1) 0%, rgba(71,1,14,1) 21%, rgba(36,0,7,1) 36%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 91%)",
        }}
        className="w-full md:h-screen lg:screen overflow-auto p-10 flex flex-row md:flex-wrap justify-center gap-20 pl-80 md:pl-0 lg:pl-0 min-h32" 
          id="events"
        >
        {eventData.map((event, index) => {
          return <Event key={index} eventDetails={event} type="event"/>;
        })}
      </div>
    </>
  );
};

export default Events;