import React from 'react';

const PotatoTrails = () => {
  return (
    <div className="p-6 font-mono text-sm text-white bg-black h-full overflow-y-auto flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4 text-yellow-300 text-center">
        📄 Potato Trails – Blogging Website
      </h2>

      {/* Project Image */}
      <img
        src="/potato.png" // make sure this image is in your public/images folder
        alt="Potato Trails Preview"
        className="rounded-lg shadow-md mb-6 w-full max-w-xl object-cover"
      />

      <p className="mb-4 text-gray-300 text-center max-w-2xl">
        A full-featured blogging platform built with the <strong>MERN stack</strong> and <strong>Next.js</strong> for server-side rendering and performance.
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-left max-w-2xl">
        <li>Public and Admin interfaces with rich-text editing</li>
        <li>Supports markdown formatting (headings, bold, italic, images)</li>
        <li>Tag-based blog categorization and search</li>
        <li>Published a custom <code className="bg-gray-800 px-1 rounded">npm</code> package for pinging the Render backend</li>
        <li>Deployed using <strong>Vercel</strong> and <strong>MongoDB Atlas</strong></li>
      </ul>

      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://www.potatotrail.life"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 View Live
        </a>
        <span className="text-gray-600">|</span>
        <a
          href="https://github.com/UmeshSingh2000/potato-trails"
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

export default PotatoTrails;
