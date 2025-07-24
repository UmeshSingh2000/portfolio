import React from 'react';

const CoachingWebsite = () => {
  return (
    <div className="p-6 font-mono text-sm text-white bg-black h-full overflow-y-auto flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4 text-blue-400 text-center">
        📄 Coaching Institute Website - DzineTech
      </h2>

      {/* Project Image */}
      <img
        src="/dzine.png" // Place your preview image in the public folder
        alt="Coaching Website Preview"
        className="rounded-lg shadow-md mb-6 w-full max-w-xl object-cover"
      />

      <p className="mb-4 text-gray-300 text-center max-w-2xl">
        A professional and user-friendly website for a <strong>coaching institute</strong>, showcasing courses, schedules, testimonials, and online registration – built with <strong>React</strong> and <strong>Tailwind CSS</strong>.
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-left max-w-2xl">
        <li>Home, About Us, Courses, Gallery, and Contact pages</li>
        <li>Course detail cards with syllabus and pricing</li>
        <li>Student testimonial section with sliding carousel</li>
        <li>Enrollment form with validation and email integration</li>
        <li>Admin dashboard (optional) to manage courses and inquiries</li>
        <li>Deployed on <strong>Vercel</strong></li>
      </ul>

      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://dzinetechsolutions.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 View Live
        </a>
      </div>
    </div>
  );
};

export default CoachingWebsite;
