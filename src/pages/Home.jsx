// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-24 px-6 md:px-10 min-h-screen bg-white text-gray-900 font-sans">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hello, I’m <span className="text-indigo-600">Gaurab</span> 👋
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
            I’m a passionate developer building clean web experiences and smart
            solutions. From <span className="font-medium">UI/UX</span> to
            <span className="font-medium"> AI-driven tools</span>, I create with
            code and caffeine ☕.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              to="/gaurab-ai"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md text-base font-medium shadow hover:bg-indigo-700 transition"
            >
              Explore Gaurab AI
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md text-base font-medium hover:bg-indigo-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-2xl font-semibold">🔥 Featured Projects Coming Soon</h2>
          <p className="text-gray-500 mt-2">Stay tuned for some exciting drops!</p>
          <p className="mt-5">Comming soon..</p>
        </section>
      </section>
    </div>
  );
};

export default Home;
