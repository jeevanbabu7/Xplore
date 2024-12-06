import React from "react";
import { NAV_LINKS } from "../utils/constants";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full py-3 px-8 z-50 flex items-center justify-between">
      {/* Logo */}
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Xplore 24 Logo" className="w-12 h-12" />
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-8">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.path}
              className="hover:text-yellow-400 transition-all uppercase text-sm tracking-wide"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Register Button */}
      <a
        href="/register"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-full text-sm font-semibold transition-all"
      >
        Register Now
      </a>
    </nav>
  );
};

export default Navbar;
