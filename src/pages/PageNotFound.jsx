import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* 404 Code */}
      <h1 className="text-8xl font-extrabold text-indigo-500">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-gray-400 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        But don’t worry — you can always head back to the homepage.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 transition-all"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
