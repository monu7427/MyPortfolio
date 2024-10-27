// src/pages/CertificationsPage.jsx
import React, { useEffect } from 'react';

function CertificationsPage() {
  // Scroll to top when the page is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  // Paths to local images in the public/images folder
  const certificates = [
    {
      url: '/images/ManojIntershipCertificate.png',
      title: '4 months Internship Certificate',
    },
    {
      url: '/images/HtmlCertificate.png',
      title: 'HTML Certificate',
    },
    {
      url: '/images/CssCertificate.png',
      title: 'CSS Certificate',
    },
    {
      url: '/images/JavaCertificate.png',
      title: 'Java Certificate',
    },
  ];

  const achievements = [
    {
      url: '/images/photo1.jpeg', // Replace with actual paths if in public/images
      title: 'Photo with HOD Sir',
    },
    {
      url: '/images/photo3.jpeg', // Replace with actual paths if in public/images
      title: 'Won First Prize in Hackathon',
    },
    {
      url: '/images/photo2.jpeg',
      title: 'Best Innovator Award',
    },
    // Add more achievement photos as needed
  ];

  return (
    <div className="bg-white mt-9 text-black min-h-screen py-12 px-6 md:px-16 lg:px-24">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-yellow-600 mb-10 text-center">Showcase</h1>

      {/* Certificates Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img src={cert.url} alt={cert.title} className="w-full h-56 object-cover" />
              <p className="text-center py-2 font-medium text-gray-800">{cert.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img src={achievement.url} alt={achievement.title} className="w-full h-56 object-cover" />
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CertificationsPage;
