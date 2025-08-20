
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";

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
    
      <img src="/profile_photo.jpg" alt="Shreya R Nayak" className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-purple-500 ml-6" />
      <header className="flex flex-col items-center justify-center text-center py-1 px-6">
        
        <h2 className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Hi, I’m Shreya R Nayak👋
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Crafting elegant solutions with code. Passionate about building impactful web apps and solving complex problems.
        </p>
        <a href="#projects" className="mt-8 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full shadow-lg transition">
          View My Work
        </a>
       
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
        <br />
        <a
          href="https://drive.google.com/file/d/1XxS2wQjZ4z1duKUYDy6f26LyxrgyjFRU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg transition"
        >
          View Resume
        </a>
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
