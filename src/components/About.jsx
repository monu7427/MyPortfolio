// src/components/About.jsx
import React from 'react';
import { FaCode, FaPalette, FaLightbulb } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="bg-white text-black py-16 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
          Hello! I’m <span className="font-semibold">Manoj Sharma</span>, a passionate Frontend Developer specializing in crafting interactive and responsive web applications.
          I love blending creativity with code to create visually engaging, user-friendly websites.
        </p>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-around mt-10 space-y-10 md:space-y-0 md:space-x-6">
        {/* Card 1 */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
          <FaCode size="2.5em" className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Developer</h3>
          <p className="text-gray-300">
            Experienced in building modern, responsive web applications using technologies like React, Tailwind CSS, and JavaScript.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
          <FaPalette size="2.5em" className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Designer</h3>
          <p className="text-gray-300">
            Skilled in creating visually appealing and user-centered designs that enhance user experience and bring ideas to life.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
          <FaLightbulb size="2.5em" className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Innovator</h3>
          <p className="text-gray-300">
            Driven by a love for learning and innovation, constantly exploring new technologies and techniques to improve my work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
