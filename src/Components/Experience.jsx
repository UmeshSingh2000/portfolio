'use client';
import React from 'react';

const experiences = [
  {
    company: 'BharatTech',
    role: 'Software Developer Intern',
    duration: 'Aug 2025 – Dec 2025',
    description: [
      'Maintained and enhanced the company’s Lead Management System (LMS) portal, ensuring smooth functionality and an improved user experience for internal teams.',
      'Developed a real-time chat system enabling seamless communication between students and mentors using WebSockets (Socket.io).',
      'Built and secured REST APIs using Node.js and Express.js, integrating SQL databases for efficient and reliable data handling.',
      'Optimized frontend components using Next.js, improving application performance, responsiveness, and load times.',
      'Fixed bugs, improved UI workflows, and contributed to new feature development while collaborating with the development team to debug issues and deploy updates.',
    ],
  },
  {
    company: 'Teerthanker Mahaveer University',
    role: 'Graduate Engineer Trainee',
    duration: 'Apr 2025 – July 2025',
    description: [
      'Contributed to the development of a University ERP System used by over 2000+ students and faculty, streamlining academic, attendance, and administrative workflows.',
      'Developed and maintained REST APIs using Node.js and Express.js.',
      'Built interactive dashboards and responsive UIs with React.js for admin, teacher, and student portals, improving usability and reducing manual processes by 40%.',
      'Collaborated with multiple departments and a cross-functional team of 5+ developers for requirement gathering, testing, and deployment.',
      'Assisted in database design and management using MongoDB and MySQL.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full px-6 py-8 text-white font-mono bg-black min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">💼 Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{exp.role} @ {exp.company}</h2>
            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
