// src/components/Contact.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-20 lg:px-32  mt-9">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500">Get in Touch</h2>
        <p className="text-lg max-w-xl mx-auto mb-12 text-gray-300">
          I'd love to connect with you! Feel free to reach out through any of the following methods.
        </p>

        <div className="flex flex-col items-center space-y-8">
          {/* Phone Number */}
          <div className="flex items-center space-x-4 text-xl">
            <FaPhoneAlt className="text-yellow-500" size="1.5em" />
            <span className="text-gray-200">+91 7427895985</span>
          </div>

          {/* Email Address */}
          <div className="flex items-center space-x-4 text-xl">
            <FaEnvelope className="text-yellow-500" size="1.5em" />
            <span className="text-gray-200">monusharma078607@gmail.com</span>
          </div>

          {/* Resume Download */}
          <a
            href="/path/to/your_resume.pdf"
            download
            className="flex items-center space-x-4 text-xl text-yellow-500 hover:text-yellow-600 transition"
          >
            <FaFileDownload size="1.5em" />
            <span>Download My Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
