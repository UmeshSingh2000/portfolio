'use client';
import React from 'react';

const experiences = [
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
  {
    company: 'Next24Tech Technology',
    role: 'Web Development Intern',
    duration: 'Jun 2024 – Aug 2024',
    description: [
      'Worked on full-stack web development using the MERN stack.',
      'Collaborated with team members to build user-facing features and REST APIs.',
      'Optimized website performance and improved UI responsiveness.',
    ],
  },
  {
    company: 'Embrizon Technologies',
    role: 'Web Development Trainee',
    duration: 'Jan 2024 – Mar 2024',
    description: [
      'Gained hands-on experience in frontend and backend development.',
      'Built small-scale web apps and learned version control with Git.',
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
