// src/components/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'FiberX OTT Website',
    description: 'Affordable OTT subscriptions with a sleek interface and intuitive user experience.',
    image: '/images/fiberx.jpg', // Replace with actual image paths
    liveLink: 'https://fiberxott.com',
    codeLink: 'https://github.com/manoj/fiberx-ott',
  },
  {
    id: 2,
    title: 'StreamNation',
    description: 'Subscription platform offering high-quality and cost-effective OTT services.',
    image: 'https://www.streamnation.xyz/images/favicon.ico',
    liveLink: 'https://streamnation.xyz',
    codeLink: 'https://github.com/manoj/streamnation',
  },
  {
    id: 3,
    title: 'Project X',
    description: 'Description of Project X.',
    image: '/images/project-x.jpg', // Replace with actual image paths
    liveLink: 'https://project-x.com',
    codeLink: 'https://github.com/manoj/project-x',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="bg-white text-black py-16 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">Projects</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700">
          Here are some of my recent projects. Each project is designed with a focus on user experience, performance, and visual appeal.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-black text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mt-9 transition-transform transform hover:scale-110"
              onError={(e) => {
                e.target.onerror = null; // prevents infinite loop
                e.target.src = 'https://via.placeholder.com/300'; // Placeholder image
              }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Live Demo <FaExternalLinkAlt className="ml-2" />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Source Code <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
