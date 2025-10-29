
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
  <h3 className="text-3xl font-bold mb-10 text-purple-300 text-center">
    Featured Projects
  </h3>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {/* Project 1 */}
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition border border-gray-700">
      {/* Image */}
      <img
        src="/Project1.png"
        alt="Safe Span"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-purple-200">Safe Span</h4>
        <p className="text-gray-400 mb-4">
          A AI-Powered Crack Detection System using CNNs to automatically identify and classify structural from videos with high accuracy based on depth. Supports real-time monitoring, reducing manual inspection costs and improving infrastructure safety.
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Python", "Machine Learning", "TensorFlow / Keras","CNN", "OpenCV", "Streamlit"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-purple-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/shreyarnayak/AI_Powered-Crack-Detection-System"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <span>💻</span> Code
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition"
          >
            🚀 Live Demo
          </a>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition border border-gray-700">
      <img
        src="/project2.png"
        alt="Text to Speech App"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-purple-200">Text to Speech App</h4>
        <p className="text-gray-400 mb-4">
           Android Text-to-Speech (TTS) application that converts text (typed by the user or extracted from PDF files) into natural-sounding speech. It also supports translation into multiple languages before playback, making it useful for accessibility, learning, and productivity.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Java", "Android TextToSpeech API", "LibreTranslate API", "React.PDFBox-Android ", "Node.Gradle"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-purple-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/shreyarnayak/TextToSpeech_AndroidFramework"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <span>💻</span> Code
          </a>
         <a
  href="https://drive.google.com/uc?export=download&id=1ZoQPqt6YW_6AYPho0mBtRGtuVPhjYc9N"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition"
>
  🚀 Download APK
</a>

        </div>
      </div>
    </div>
  </div>
  {/* View More Projects */}
<div className="flex justify-center mt-10">
  <a
    href="https://github.com/shreyarnayak" // 🔗 your GitHub profile link here
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.38-5.25 5.66.42.37.79 1.1.79 2.22v3.29c0 .31.21.66.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
    View More Projects
  </a>
</div>

</section>

{/* Experience Section */}
<section id="experience" className="px-8 py-16 max-w-5xl mx-auto relative">
  <h3 className="text-3xl font-bold mb-10 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
    💼 Experience
  </h3>

  <div className="relative border-l-4 border-purple-500/40 pl-6 space-y-12">
    {/* Sasken Internship */}
    <div className="relative bg-gradient-to-r from-gray-800 via-purple-900/40 to-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
      <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-gray-900"></span>
      <h4 className="text-xl font-semibold text-purple-200 flex items-center gap-2">
        🚀 Intern - Sasken Technologies
      </h4>
      <p className="text-gray-400 text-sm mb-2">Virtual Internship | June 2025 – August 2025</p>
      <p className="text-gray-300 leading-relaxed">
        Worked on <span className="text-pink-400 font-semibold">Android Studio</span> using 
        the <span className="text-purple-400 font-semibold">Java framework</span>. 
        Contributed to developing mobile application features, debugging modules, 
        and collaborating with mentors in a remote environment.
      </p>
    </div>
  </div>
</section>

{/* Education Section */}
<section id="education" className="px-8 py-16 max-w-5xl mx-auto relative bg-gradient-to-br from-gray-900 via-purple-950 to-black">
  <h3 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent text-white">
    🎓 Education
  </h3>

  <div className="relative border-l-4 border-pink-500/40 pl-6 space-y-12">
    {/* College */}
    <div className="relative bg-gradient-to-r from-gray-800 via-pink-900/40 to-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
      <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900"></span>
      <h4 className="text-xl font-semibold text-purple-200">
        Bachelor of Engineering in Computer Science
      </h4>
      <p className="text-gray-400 text-sm mb-2">📍 Canara Engineering College | 2022 – 2026</p>
      <p className="text-gray-300 leading-relaxed">
        Coursework: <span className="text-pink-400">Data Structures</span>, 
        <span className="text-purple-400"> Web Development</span>, 
        <span className="text-pink-400"> Cloud Computing</span>, 
        <span className="text-purple-400"> AI</span>, 
        <span className="text-pink-400"> Blockchain</span>.  
        Actively involved in hackathons and technical clubs.
      </p>
    </div>

    {/* PU */}
    <div className="relative bg-gradient-to-r from-gray-800 via-purple-900/40 to-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
      <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-gray-900"></span>
      <h4 className="text-xl font-semibold text-purple-200">Pre-university PCMB (97%)</h4>
      <p className="text-gray-400 text-sm">📍 H.H.S.I.B.S.S Edneer | 2020 – 2022</p>
    </div>

    {/* SSLC */}
    <div className="relative bg-gradient-to-r from-gray-800 via-pink-900/40 to-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
      <span className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900"></span>
      <h4 className="text-xl font-semibold text-purple-200">SSLC (92%)</h4>
      <p className="text-gray-400 text-sm">📍 M.S.C.H.S.S Peradala, Neerchal | 2019 – 2020</p>
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
          <p className="text-gray-400">📞 +91-8075800020</p>
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
