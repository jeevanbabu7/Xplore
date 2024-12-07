import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import headerImg from '../assets/images/header-left.png'

const PageHeader = ({ title, color, headerLeft }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <header className="relative py-12 px-8 lg:py-16 lg:px-16 flex items-center shadow-lg rounded-lg overflow-hidden">
      {/* Container with grid layout */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between w-full`}>
        {/* Left-side image, hidden on mobile */}
        {!isMobile && (
          <div className="h-32 w-32 bg-no-repeat bg-center bg-contain" 
            style={{ backgroundImage: `url(${headerImg})` }} />
        )}

        {/* Title */}
        <h1 className={`text-white font-extrabold ${isMobile ? 'text-4xl' : 'text-6xl'} tracking-tight text-center lg:text-left`}>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
