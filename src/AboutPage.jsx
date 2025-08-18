import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans p-8">
      <h1 className="text-4xl font-bold text-purple-300 mb-6">About Me</h1>
      <p className="mb-4 text-gray-300">
        Aspiring Full Stack Developer | AI/ML Explorer | Passionate Tech Builder
      </p>

      <h2 className="text-2xl font-semibold text-purple-200 mt-8 mb-2">Education</h2>
      <ul className="list-disc ml-6 text-gray-300">
        <li>Canara Engineering College, Mangalore — B.E. in Computer Science (9.0 CGPA)(Nov 2022 – Present)</li>
        <li>H.H.S.I.B.S.S Edneer — Pre-university PCMB (97%)(Jun 2020 – Aug 2022)</li>
        <li>M.S.C.H.S.S Peradala — SSLC (92%) (Jun 2019 – Mar 2020)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-200 mt-8 mb-2">Technical Skills</h2>
      <p className="text-gray-300">
        <strong>Languages:</strong> Java, C, SQL, Python <br />
        <strong>Backend:</strong> MongoDB, REST <br />
        <strong>Frontend:</strong> HTML, CSS🎨, JavaScript, ReactJS⚡ <br />
        <strong>Other:</strong> OOPs, Computer Networks, Operating System <br />
        <strong>Developer Tools:</strong> Git🔧, VS Code, Android Studio
      </p>

      <h2 className="text-2xl font-semibold text-purple-200 mt-8 mb-2">Certification</h2>
      <p className="text-gray-300"><strong>Acclode Tech Solutions</strong>: Basics of machine learning Workshop <br />
                                  Spoken tutorial: <strong>Java</strong><br />
                                  <strong>Deloitte-</strong>Cyber Job Simulation <br /></p>

      <h2 className="text-2xl font-semibold text-purple-200 mt-8 mb-2">Achievements and Experience</h2>
      <p className="text-gray-300">1st Place – Department <strong>Project Expo</strong> for Crack Detection Model.<br />
Shortlisted among the Top 60 teams out of 600+ participants in a <strong>national-level hackathon</strong> for our innovative tech 
solution- Hackfest 2025.<br />
Shortlisted among top 10 teams in college level Ideathon competition. <br />
Event Coordinator – College Fest (Aakriti 2025) </p>

      <h2 className="text-2xl font-semibold text-purple-200 mt-8 mb-2">Hobbies</h2>
      <p className="text-gray-300">Exploring new tech trends,coding<br />
                                     Dancing, Cooking, Embroidery<br />
                                     Listening to music & reading books</p>
    </div>
  );
}
