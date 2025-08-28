
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

//import profilePhoto from "./assets/profile_photo.jpg";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-purple-600/30 relative">
        <h1 className="text-2xl font-bold text-purple-400">Shreya.Portfolio</h1>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/about" className="hover:text-purple-300">About</Link>
          <a href="#projects" className="hover:text-purple-300">Projects</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-purple-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-8 bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
            <Link to="/about" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>About</Link>
            <a href="#projects" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

{/* Hero Section */}
<header className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-8 max-w-6xl mx-auto">

  {/* Left Side - Photo */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex-shrink-0 mb-8 md:mb-0 md:mr-12"
  >
    <img
      src="/profile_photo.jpg"
      alt="Shreya R Nayak"
      className="w-56 h-56 object-cover rounded-full shadow-2xl border-4 border-purple-500 hover:scale-105 transition"
    />
  </motion.div>

  {/* Right Side - Text */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
      Hi, I’m Shreya R Nayak 👋
    </h2>

    {/* Typewriter */}
    <h3 className="text-xl mt-3 text-gray-300">
      <Typewriter
        words={[
          "Full-Stack Developer 💻",
          "AI Enthusiast 🤖",
          "Problem Solver 🔥",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h3>

    {/* Buttons */}
    <motion.div
      className="mt-8 flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <a
        href="#projects"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg transition"
      >
        View My Work
      </a>

      {/* Resume buttons combined */}
      <div className="inline-flex rounded-full shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-pink-500/50">
        {/* View Online */}
        <a
          href="https://drive.google.com/file/d/1XxS2wQjZ4z1duKUYDy6f26LyxrgyjFRU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition text-white font-semibold"
        >
          📄 Resume
        </a>

        {/* Download */}
        <a
          href="/resume.pdf"
          download="Shreya_R_Nayak_Resume.pdf"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition border-l border-white/20 text-white"
        >
          ⬇️
        </a>
      </div>
    </motion.div>
  </motion.div>
</header>



      {/* About Section */}
      <section id="about" className="px-10 py-1 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-purple-300">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          Motivated and detail-oriented Computer Science student with a passion for full-stack development and emerging
          technologies like AI and blockchain. Experienced in building real-world applications and collaborative projects, with a
          strong foundation in web development and machine learning. Eager to contribute technical skills and creativity to
          innovative teams and grow through continuous learning.
        </p>
          {/* Social Buttons */}
  <div className="mt-8 flex justify-center gap-6">
    {/* GitHub */}
    <a
      href="https://github.com/shreyarnayak"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-purple-600 text-white shadow-md hover:scale-110 transition"
    >
      <i className="fab fa-github text-xl"></i>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/shreyarnayak14"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-pink-500 text-white shadow-md hover:scale-110 transition"
    >
      <i className="fab fa-linkedin-in text-xl"></i>
    </a>
  </div>
  <br/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-16 bg-purple-950/40">
        <h3 className="text-3xl font-bold mb-10 text-purple-300 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">CNN-based Crack Detection</h4>
            <p className="text-gray-400 mb-4">An AI-powered tool for detecting structural cracks in real-time using convolutional neural networks.</p>
            <a href="#" className="text-purple-400 hover:underline">View Project →</a>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-200">Medisync</h4>
            <p className="text-gray-400 mb-4">
              Implemented modules for uploading, managing, and sharing medical records with doctors in real-time.
              • Built a smart reminder system for medications and checkups with Firebase-powered notifications.
            </p>
            <a href="#" className="text-purple-400 hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-purple-300">Let’s Connect</h3>
        <p className="text-gray-300 mb-6">You can reach me through the following channels:</p>
        <div className="flex flex-col gap-4 items-center">
          <a href="https://www.linkedin.com/in/shreyarnayak14" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">LinkedIn</a>
          <a href="mailto:shreyarnayak14@gmail.com" className="text-purple-400 hover:underline">shreyarnayak14@gmail.com</a>
          <p className="text-gray-400">📞 +91-9876543210</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-gray-500 text-sm border-t border-purple-600/30">
        © Shreya R Nayak.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
