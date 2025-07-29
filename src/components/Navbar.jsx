import React, { useState } from "react";
import { Link } from "react-router-dom";

const navitems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gaurab Packages", path: "/gaurab-packages" },
  { name: "Gaurab AI", path: "/gaurab-ai" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-xl border-b border-gray-200 font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-black tracking-wide">
          gaurab<span className="text-indigo-500">.exe</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold tracking-tight text-gray-900">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group transition-all duration-300 hover:text-indigo-500"
            >
              {item.name}
              <span className="block h-[3px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-indigo-400 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md text-gray-900 px-6 pb-6 pt-2 shadow-md">
          <nav className="flex flex-col gap-4 text-xl font-medium">
            {navitems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-500 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
