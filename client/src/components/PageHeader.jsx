import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import headerImg from '../assets/images/header-left.png'

const PageHeader = ({ title, color, headerLeft }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <header className="relative py-12 px-8 lg:py-16 lg:px-16 flex items-center shadow-lg rounded-lg overflow-hidden">
        {/* Left-side image */}
        <div className="absolute left-0 top-0 h-32 w-32 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${headerImg})` }} />

        {/* Title */}
        <h1 className={`relative text-white font-extrabold ml-auto mr-4 ${isMobile ? 'text-5xl' : 'text-6xl'} tracking-tight`}>
            {title}
        </h1>
    </header>
  );
};

export default PageHeader;