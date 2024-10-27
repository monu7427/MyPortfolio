// src/components/Skills.jsx
import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaGithub, FaPaintBrush } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { MdVideoLibrary } from 'react-icons/md';

const skills = [
  { id: 1, name: 'React', icon: <FaReact size="2.5em" />, color: 'text-blue-500' },
  { id: 2, name: 'Tailwind CSS', icon: <SiTailwindcss size="2.5em" />, color: 'text-teal-500' },
  { id: 3, name: 'HTML5', icon: <FaHtml5 size="2.5em" />, color: 'text-orange-500' },
  { id: 4, name: 'CSS3', icon: <FaCss3Alt size="2.5em" />, color: 'text-blue-600' },
  { id: 5, name: 'JavaScript', icon: <FaJs size="2.5em" />, color: 'text-yellow-500' },
  { id: 6, name: 'GitHub', icon: <FaGithub size="2.5em" />, color: 'text-gray-800' },
  { id: 7, name: 'Canva Designing', icon: <FaPaintBrush size="2.5em" />, color: 'text-pink-500' },
  { id: 8, name: 'Video Editing (Filmora)', icon: <MdVideoLibrary size="2.5em" />, color: 'text-green-500' },
];

function Skills() {
  return (
    <section id="skills" className="bg-white text-black py-16 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">Skills</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700">
          Here are some of the technologies and tools I work with to build beautiful, responsive, and performant web applications, as well as creative designs and video edits.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center p-6 bg-black text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className={`mb-4 ${skill.color}`}>
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-yellow-500">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
