// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificationsPage from './pages/CertificationsPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } 
        />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
