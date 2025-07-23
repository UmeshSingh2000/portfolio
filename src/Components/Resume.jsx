import React from 'react';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>

      <div className="w-full max-w-4xl h-[80vh]">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="w-full h-full border shadow-lg"
        />
      </div>

      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
