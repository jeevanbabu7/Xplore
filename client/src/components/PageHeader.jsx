import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import headerImg from '../assets/images/header-left.png';

const PageHeader = ({ title, color, headerLeft }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <header className="relative py-12 px-8 lg:py-16 lg:px-16 flex items-center justify-center rounded-lg overflow-hidden">
      {/* Container with grid layout */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center w-full`}>
        {/* Left-side image, hidden on mobile */}
        {!isMobile && (
          <div className="h-24 w-24 bg-no-repeat bg-center bg-contain mb-6 lg:mr-6 mt-4" 
            style={{ backgroundImage: `url(${headerImg})` }} />
        )}

        {/* Title */}
        <h1
          className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] font-extrabold 
            ${isMobile ? 'text-4xl' : 'text-6xl'} tracking-wider text-center lg:text-left 
            drop-shadow-xl transition-all duration-300 ease-in-out hover:scale-105`}>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
