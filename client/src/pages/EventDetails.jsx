import React from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { eventData, workshopData } from "../utils/eventData";
import eventBanner from '../assets/images/event-banner.png';
import event1 from '../assets/images/event1.png';

const EventDetails = () => {
    const { eventId, type } = useParams();

    // Determine the data source based on the type (event or workshop)
    const data = type === "event" ? eventData : workshopData;

    // Find the specific event/workshop by its name
    const item = data.find((e) => e.name.replace(/\s+/g, "-").toLowerCase() === eventId);

    if (!item) {
        return (
            <div className="text-center text-white">
                <h1>Details Not Found</h1>
                <p>The event or workshop you're looking for doesn't exist.</p>
            </div>
        );
    }

    // Entry animation for the content and image
    const contentAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { tension: 100, friction: 40 },
    });

    const imageAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { tension: 100, friction: 40 },
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-950 via-black to-black text-white flex flex-col items-center py-0 h-full">
            {/* Event Banner */}
            <div
                className="w-full h-38 md:h-[280px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${eventBanner})`, // Use the imported path
                    top: 0,
                }}
            ></div>

            {/* Event Content */}
            <div className="flex items-center max-w-4xl p-8 mt-8">
                {/* Left Content */}
                <animated.div
                    style={contentAnimation} // Entry animation for the left content
                    className="flex flex-col items-center mb-12 space-y-6 mr-8"
                >
                    <h1 className="text-5xl font-bold text-center text-white mb-4">{item.name}</h1>
                    <p className="text-2xl text-center text-gray-300 mb-6">{item.description}</p>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-base text-gray-400">
                            <strong>Date:</strong> {item.date}
                        </p>
                        <p className="text-xl text-gray-400">
                            <strong>Time:</strong> {item.time}
                        </p>
                        <p className="text-xl text-gray-400 mb-6">
                            <strong>Location:</strong> {item.location}
                        </p>
                    </div>
                    <button className="px-8 py-3 border-2 border-purple-600 text-white rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 focus:outline-none bg-transparent shadow-lg shadow-purple-600/50">
                        Register Now
                    </button>
                </animated.div>

                {/* Image */}
                <animated.div
                    style={imageAnimation} // Entry animation for the image
                    className="flex-shrink-0 w-72 h-auto rounded-lg shadow-lg"
                >
                    <img
                        src={event1} // Use the imported path
                        alt={item.name}
                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                </animated.div>
            </div>
        </div>
    );
};

export default EventDetails;
