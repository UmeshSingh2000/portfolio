import React from 'react';

const Welcome = () => {
  return (
    <div className="w-full h-full text-white font-mono overflow-hidden px-6 py-8">
      <div className="max-w-3xl text-sm space-y-3 leading-relaxed">

        <h1 className="text-lg font-semibold">👋 Welcome to My Portfolio</h1>
        <p>I’m <strong>Umesh Singh Mehta</strong>, a Full Stack Web Developer.</p>

        <p>
          ✆ +91 7351667526 | ✉ <a href="mailto:umeshsinghmehta4@gmail.com" className="underline">Email</a> |
          🔗 <a href="https://github.com/UmeshSingh2000" className="underline" target="_blank">GitHub</a> |
          🟦 <a href="https://www.linkedin.com/in/umesh-singh-mehta-93819a194/" className="underline" target="_blank">LinkedIn</a>
        </p>

        <p>
          I'm experienced in building responsive, scalable apps using the MERN stack with clean UI and solid backend APIs.
        </p>

        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Frontend: React.js, Redux, Next.js</li>
          <li>Backend: Node.js, Express.js, MongoDB, MySQL</li>
          <li>Tools: GitHub, Postman, Vercel, Render</li>
        </ul>

        <p className="text-gray-400">
          Tip: Click on <code className="bg-gray-800 px-1 rounded">Projects Files</code> or <code className="bg-gray-800 px-1 rounded">Downloads</code> from the sidebar to explore.
        </p>

      </div>
    </div>
  );
};

export default Welcome;
