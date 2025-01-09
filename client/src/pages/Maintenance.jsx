import React from "react";

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-500">Xplore'24</h1>
        <h2 className="text-3xl font-semibold">Site Under Maintenance</h2>
        <p className="text-lg text-gray-300">
          We're working hard to bring you a better experience. Please check back soon!
        </p>
        <div className="mt-6">
          <svg
            className="w-16 h-16 mx-auto text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            {/* <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path> */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
