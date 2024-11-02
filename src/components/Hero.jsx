// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="bg-black text-yellow-500 py-20 px-6 text-center">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg transform transition duration-500 hover:scale-105">
          <img
            src="images/myphoto.jpg" // Place your image in the public folder with this name
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4">
          Hello, I'm Manoj Sharma
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-yellow-300">
          A frontend developer passionate about crafting engaging and interactive digital experiences.
        </p>
        
        
        <button
          onClick={() => window.location.href = '/certifications'} // Replace with the actual certification page path
          className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          View My Certifications
        </button>
      </div>
    </section>
  );
}

export default Hero;
