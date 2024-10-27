// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-200 text-black py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Logo and Intro */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-2xl font-bold text-yellow-600">Manoj Sharma</h2>
            <p className="text-gray-600 max-w-sm text-center md:text-left">
              Bringing creative ideas to life through web development and design. Let's connect and build something amazing together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-xl font-semibold text-yellow-600">Quick Links</h3>
            <a href="#about" className="text-gray-600 hover:text-yellow-600 transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-yellow-600 transition">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-yellow-600 transition">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-xl font-semibold text-yellow-600">Contact</h3>
            <p className="text-gray-600">+91 9876543210</p>
            <p className="text-gray-600">manoj.sharma@example.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition">
              <FaFacebookF size="1.5em" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition">
              <FaInstagram size="1.5em" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition">
              <FaLinkedinIn size="1.5em" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition">
              <FaTwitter size="1.5em" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-12 border-t border-gray-300 pt-6">
          <p>&copy; {new Date().getFullYear()} Manoj Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
