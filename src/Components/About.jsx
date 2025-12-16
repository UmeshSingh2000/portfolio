import React from 'react';

const About = () => {
  return (
    <div className="w-full h-full text-white font-mono px-6 py-8">
      <div className="max-w-3xl text-sm space-y-3 leading-relaxed">

        <h1 className="text-lg font-semibold">📄 About Me</h1>

        <p>Hi, I'm <strong>Umesh Singh Mehta</strong>, a Full Stack Web Developer passionate about creating scalable and user-friendly web applications using the <strong>MERN stack</strong>.</p>

        <p>
          🎓 Completed <strong>MCA</strong> from <strong>Teerthanker Mahaveer University</strong>.
        </p>

        <p>
          ⚙️ Tech Stack & Tools:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Frontend: React.js, Redux, Next.js</li>
          <li>Backend: Node.js, Express.js, MongoDB, MySQL</li>
          <li>Tools: GitHub, Postman, Vercel, Render, MongoDB Atlas, Docker</li>
        </ul>

        <p>
          🧠 Key Concepts:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>MVC Architecture, CRUD Operations, JWT Auth</li>
          <li>Responsive Design, RESTful APIs</li>
          <li>Deployment & Hosting (Render, Vercel)</li>
        </ul>

      </div>
    </div>
  );
};

export default About;
