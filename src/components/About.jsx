// src/components/About.jsx
import React from 'react';
import { FaCode, FaPalette, FaLightbulb } from 'react-icons/fa';

const cardData = [
  {
    id: 1,
    icon: <FaCode size="2.5em" className="text-yellow-500 mb-4" />,
    title: 'Developer',
    description: 'Experienced in building modern, responsive web applications using technologies like React, Tailwind CSS, and JavaScript.',
  },
  {
    id: 2,
    icon: <FaPalette size="2.5em" className="text-yellow-500 mb-4" />,
    title: 'Designer',
    description: 'Skilled in creating visually appealing and user-centered designs that enhance user experience and bring ideas to life.',
  },
  {
    id: 3,
    icon: <FaLightbulb size="2.5em" className="text-yellow-500 mb-4" />,
    title: 'Innovator',
    description: 'Driven by a love for learning and innovation, constantly exploring new technologies and techniques to improve my work.',
  },
];

function Card({ icon, title, description }) {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

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
        {cardData.map((card) => (
          <Card key={card.id} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
}

export default About;
