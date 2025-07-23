import React from 'react';

const ERPPortal = () => {
  return (
    <div className="p-6 font-mono text-sm text-white bg-black h-full overflow-y-auto flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4 text-green-300 text-center">
        📄 ERP Portal – College Attendance System
      </h2>

      {/* Preview Image */}
      <img
        src="/erp.png" // Place your image in public/images
        alt="ERP Portal Preview"
        className="rounded-lg shadow-md mb-6 w-full max-w-xl object-cover"
      />

      <p className="mb-4 text-gray-300 text-center max-w-2xl">
        A role-based ERP portal built with the <strong>MERN stack</strong> to manage students, teachers, and attendance efficiently.
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-left max-w-2xl">
        <li><strong>Admin</strong> can add/manage students and teachers</li>
        <li><strong>Teachers</strong> can mark attendance, view students</li>
        <li><strong>Students</strong> can view their attendance status</li>
        <li>Authentication and role-based access control using JWT</li>
        <li>Clean UI built with Tailwind CSS and React</li>
        <li>MongoDB used for data storage with Mongoose schemas</li>
      </ul>

      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://github.com/UmeshSingh2000/ERP-Portal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          📁 Source Code
        </a>
      </div>
    </div>
  );
};

export default ERPPortal;
