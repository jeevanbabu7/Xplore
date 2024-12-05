import React from "react";
import { NAV_LINKS } from "../utils/constants";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-10">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
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
    </header>
  );
};

export default Navbar;
