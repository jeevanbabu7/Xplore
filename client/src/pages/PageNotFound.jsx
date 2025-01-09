import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is used for navigation

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#A13E22]">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-300">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-block mt-6 px-6 py-3 bg-[#A13E22] text-white rounded-lg shadow-lg transition">
          Go to Home
        </Link>
        
      </div>
    </div>
  );
};

export default PageNotFound;
