import React from "react";

function GaurabPackages() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black px-6 py-24">
      <h2 className="text-6xl font-extrabold text-white mb-4 select-none">403</h2>
      <p className="text-2xl font-semibold text-white mb-6 text-center max-w-md">
        Sorry, this page is not available or has not been uploaded yet.
      </p>
      {/* Optional: Add a button to go back home or elsewhere */}
      <a
        href="/"
        className="px-6 py-3 bg-white text-black hover:bg-white font-semibold rounded-md hover:bg-indigo-700 transition"
      >
        Go Back Home
      </a>
    </main>
  );
}

export default GaurabPackages;
