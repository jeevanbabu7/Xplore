import React, { useState } from "react";
import { NAV_LINKS } from "../utils/constants";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <div className="flex items-center md:gap-2 ">
      <nav className="border-solid border-[.5px] rounded-bl-2xl rounded-br-2xl border-grey-500 text-white fixed top-0 left-0 w-full px-8 z-10 flex items-center md:gap-52 justify-between mt-2 mr-1 ml-1 z-50">
      <div className="logo">
        <img src='./xplore_logo.png' alt="Xplore 24 Logo" className="w-16 h-12" />
      </div>
        <section className="MOBILE-MENU flex lg:hidden z-50">
          <div
            className="HAMBURGER-ICON space-y-2 relative right-0 z-50"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} backdrop-blur-sm`}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-bold z-50">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative group cursor-pointer">
                <a
                  href={link.path}
                  className="hover:text-yellow-400 transition-all uppercase text-sm tracking-wide transition"
                >
                  {link.name}
                </a>
                <span className="absolute left-0 bottom-[-18px] w-0 h-1  bg-[#fe41e4] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            </ul>
            {/* <a
        href="/register"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-full text-sm font-semibold transition-all"
      >
        Register Now
      </a> */}
      
      <img src='./REGISTER_NOW_header.png' className="w-32"/>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex flex space-x-8 gap-36 items-center font-bold ">
          <div className="space-x-8 lg:flex flex space-x-8 h-14 items-center gap-5 z-50">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative group cursor-pointer z-50">
                <a
                  href={link.path}
                  className="hover:text-yellow-400 transition-all uppercase text-sm tracking-wide transition"
                >
                  {link.name}
                </a>
                <span className="absolute left-0 bottom-[-18px] w-0 h-1  bg-[#fe41e4] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </div>
          {/* <a
            href="/register"
            className="h-10 px-10 bg-blue-600 hover:bg-blue-800 rounded-full text-sm font-semibold transition-all"
          >
            Register Now
          </a> */}

          <img src='./REGISTER_NOW_header.png' className="w-32"/>
        </ul>
        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background:none;
        
      }
    `}</style>
    </div>
  );
};

export default Navbar;
