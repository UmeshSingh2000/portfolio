import React from 'react';

const FireSafetyWebsite = () => {
  return (
    <div className="p-6 font-mono text-sm text-white bg-black h-full overflow-y-auto flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4 text-red-400 text-center">
        📄 Fire & Safety Business Website
      </h2>

      {/* Project Image */}
      <img
        src="/fire.png" // Ensure this image exists in your public/images folder
        alt="Fire & Safety Website Preview"
        className="rounded-lg shadow-md mb-6 w-full max-w-xl object-cover"
      />

      <p className="mb-4 text-gray-300 text-center max-w-2xl">
        A professional portfolio and business website for a <strong>fire safety service provider</strong>. Built with <strong>React</strong> and <strong>Tailwind CSS</strong> to showcase services, certifications, and contact information.
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-left max-w-2xl">
        <li>Dedicated pages for Services, About, Certifications, and Contact</li>
        <li>Hero section with emergency contact and CTA</li>
        <li>Interactive service cards with animations</li>
        <li>Embedded contact form with email integration</li>
        <li>Deployed using <strong>Vercel</strong> for fast, secure hosting</li>
      </ul>

      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://fireandsafetyassociate.vercel.app/"
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

export default FireSafetyWebsite;
