import React from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { eventData, workshopData } from "../utils/eventData";
import workshopBanner from '../assets/images/workshop-banner.png';
import SocialIcons from "../components/SocialIcons";
import { ToastContainer, toast } from "react-toastify";

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

    const handleRegister = () => {
        toast.info("Registration has not started yet. Please come back later.",{
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black text-white flex flex-col items-center w-full">
            {/* Workshop Banner */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${workshopBanner})`,
                    height: "250px", // Fixed banner height (adjust as needed)
                }}
            ></div>

            {/* Workshop Content */}
            <div className="flex flex-col md:flex-row items-center max-w-4xl px-8 md:px-0 pt-8 md:pt-10 w-full flex-grow">
                {/* Left Content */}
                <animated.div
                    style={contentAnimation}
                    className="flex flex-col items-center mb-12 space-y-6 mr-8 w-full md:w-1/2"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">{item.name}</h1>
                    <p className="text-lg md:text-2xl text-center text-gray-300 mb-4">{item.description}</p>
                    {/* <div className="flex flex-col items-center space-y-2">
                        <p className="text-base text-gray-400">
                            <strong>Date:</strong> {item.date}
                        </p>
                        <p className="text-xl text-gray-400">
                            <strong>Time:</strong> {item.time}
                        </p>
                        <p className="text-xl text-gray-400 mb-6">
                            <strong>Location:</strong> {item.location}
                        </p>
                    </div> */}
                    <button className="px-8 py-3 border-2 border-purple-600 text-white rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 focus:outline-none bg-transparent shadow-lg shadow-purple-600/50" onClick={handleRegister}>
                        Register Now
                    </button>
                    <button className="px-8 py-3 border-2 border-blue-500 text-white rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 focus:outline-none bg-transparent shadow-lg shadow-blue-500/50" onClick={toggleDetails}>
                            Details
                    </button>
                </animated.div>

                {/* Image */}
                <animated.div
                    style={imageAnimation}
                    className="flex-shrink-0 w-full md:w-[50%] h-auto rounded-lg shadow-lg mt-6 md:mt-0"
                >
                    <img
                        src={item.imageDetails}
                        alt={item.name}
                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                </animated.div>
            </div>

            {/* Social Icons */}
            <SocialIcons />
            <ToastContainer />
        </div>
    );
};

export default EventDetails;
