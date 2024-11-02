// src/components/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'UnlistedBuySell',
    description: 'UnlistedBuySell is a user-friendly online platform that facilitates the buying and selling of unlisted shares. Designed for investors seeking access to exclusive market opportunities, it streamlines transactions and provides comprehensive information, ensuring a seamless experience for users looking to invest in unlisted companies.',
    liveLink: 'https://www.unlistedbuysell.com/',
    codeLink: 'https://github.com/jashandeep31/fiberxstock-frontend',
  },
  {
    id: 2,
    title: 'OttMartIndia',
    description: 'OTTMart India is a comprehensive online platform offering affordable and high-quality OTT subscriptions. With a user-friendly interface, it simplifies the process of exploring and purchasing various streaming services, ensuring customers have easy access to their favorite content anytime, anywhere.',
    liveLink: 'https://www.ottmartindia.in/',
    codeLink: 'https://github.com/monu7427/OttMartIndia',
  },
  {
    id: 3,
    title: 'FiberX OTT Website',
    description: 'Affordable OTT subscriptions with a sleek interface and intuitive user experience.',
    liveLink: 'https://fiberxott.com',
    codeLink: 'https://github.com/manoj/fiberx-ott',
  },
  {
    id: 4,
    title: 'StreamNation',
    description: 'Subscription platform offering high-quality and cost-effective OTT services.',
    liveLink: 'https://streamnation.xyz',
    codeLink: 'https://github.com/manoj/streamnation',
  },
  {
    id: 5,
    title: 'Contact app using Firebase',
    description: 'The Contact Management App is a user-friendly web application designed for storing and organizing contact information.',
    liveLink: 'https://contact-app-liard-alpha.vercel.app/',
    codeLink: 'https://github.com/monu7427/ContactApp',
  },
  {
    id: 6,
    title: 'html css js code editor',
    description: 'A code editor for HTML, CSS, and JavaScript that allows users to write and preview their code in real-time.',
    liveLink: 'https://we-b-code-editor.vercel.app/',
    codeLink: 'https://github.com/monu7427/WeBCodeEditor',
  },
  {
    id: 7,
    title: 'Jain Consultancy',
    description: 'Jain Consultancy offers reliable, affordable services in Income Tax Return Filing, GST Return, and Company Incorporation. Our team ensures accurate, timely solutions tailored to meet your financial and regulatory needs with expert guidance.',
    liveLink: 'https://www.jainconsultancy.org/',
    codeLink: 'https://github.com/monu7427/JainConsultancy',
  },
  {
    id: 8,
    title: 'FiberX Services',
    description: 'FiberX Services provides precise, efficient data solutions, including data entry, processing, conversion, Shopify product management, and web research. We ensure accuracy, security, and reliability to streamline business operations, enabling informed decisions and optimized workflows for global clients.',
    liveLink: 'https://fiberx-services.vercel.app/',
    codeLink: 'https://github.com/monu7427/FiberxServices',
  },
  {
    id: 9,
    title: 'Buy Tulsi',
    description: 'Welcome to Buy Tulsi! Discover a diverse range of plants, including the Tulsi Vrindavan Matt and Rama Tulsi seeds. Our easy online ordering, expert advice, and plant care guides make it simple to create your botanical paradise. Enjoy nature at home!',
    liveLink: 'https://ubs-plants.vercel.app/',
    codeLink: 'https://github.com/monu7427/UBS-Plants',
  }
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
          <div
            key={project.id}
            className="bg-black text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-6"
          >
            {/* Live Preview in iframe */}
            <div className="relative overflow-hidden mb-4 rounded-lg">
              <iframe
                src={project.liveLink}
                title={project.title}
                className="w-full h-48 border-none"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex justify-center space-x-4">
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
