import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <div className="pt-24 px-6 md:px-10 min-h-screen bg-black text-white font-sans">
      <section className="max-w-6xl mx-auto">
        {/* Top Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="flex flex-col items-start space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hello, I’m <span className="text-indigo-400">Gaurab Budha</span> 👋
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I’m a <span className="text-white font-medium">Hardware Hacker</span>, 
              <span className="text-white font-medium"> Computer Science major</span>,
              and a Class 11 student studying <span className="text-white font-medium">Biology</span>.
              Passionate about building sleek, optimized, and creative digital experiences.
            </p>

            <p className="text-base md:text-lg text-gray-400">
              From clean UI/UX to powerful AI, my work blends performance with personality. 
              SEO and AEO optimization are always in focus 🔍⚙️.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/gaurab-ai"
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition"
              >
                Explore Gaurab AI
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <img
              src={Hero}
              alt="Gaurab Budha - Hardware Hacker and Developer"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Coming Soon Section */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">🔥 Featured Projects Coming Soon</h2>
          <p className="text-gray-400 mt-2">Stay tuned for some exciting drops — Gaurab is cooking up some powerful tools and projects!</p>
          <p className="mt-4 italic text-gray-500">More to come...</p>
        </section>
      </section>
    </div>
  );
};

export default Home;
