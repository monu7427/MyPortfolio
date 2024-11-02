// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <header className="bg-slate-200 text-black py-4 px-8 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center relative">
        <h1 className="text-2xl font-bold">Manoj Sharma</h1>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size="1.5em" className="text-black" />
          ) : (
            <FaBars size="1.5em" className="text-black" />
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`fixed inset-0 bg-slate-200 md:static md:flex md:space-x-6 font-semibold transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close button for the mobile menu */}
          {isOpen && (
            <div className="absolute top-4 right-4" onClick={closeMenu}>
              <FaTimes size="1.5em" className="text-black cursor-pointer" />
            </div>
          )}

          <div className="flex flex-col md:flex-row md:space-x-6 w-full h-full justify-center items-center">
            <Link
              to="/"
              className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/certifications"
              className="block px-4 py-2 hover:text-yellow-500 transition duration-300"
              onClick={closeMenu}
            >
              Certifications
            </Link>
            <div className="flex space-x-4">
          <a
            href="https://github.com/monu7427"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-yellow-500 transition duration-300"
          >
            <FaGithub size="1.5em" />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-sharma-794399211/"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-yellow-500 transition duration-300"
          >
            <FaLinkedin size="1.5em" />
          </a>
          <a
            href="mailto:monusharma078607@gmail.com"
            className="text-black hover:text-yellow-500 transition duration-300"
          >
            <FaEnvelope size="1.5em" />
          </a>
        </div>
          </div>
        </nav>

        {/* Social Icons */}
       
      </div>
    </header>
  );
}

export default Header;
