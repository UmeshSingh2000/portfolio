import React from 'react';

const Rope = () => {
  return (
    <div className="p-6 font-mono text-sm text-white bg-black h-full overflow-y-auto flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4 text-purple-400 text-center">
        📄 Real-Time Chat Application
      </h2>

      {/* Project Image */}
      {/* <img
        src="/chat-app.png" // Make sure this image is in your public/images folder
        alt="Chat Application Preview"
        className="rounded-lg shadow-md mb-6 w-full max-w-xl object-cover"
      /> */}

      <p className="mb-4 text-gray-300 text-center max-w-2xl">
        A real-time chat application using <strong>WebSockets (Socket.io)</strong> and the <strong>MERN stack</strong>. Enables instant messaging between users in private and group chatrooms.
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-left max-w-2xl">
        <li>User authentication and JWT-based protected routes</li>
        <li>Real-time one-to-one and group messaging</li>
        <li>Online status indicators and typing indicators</li>
        <li>Responsive UI built with <strong>React</strong> and <strong>Tailwind CSS</strong></li>
        <li>Backend powered by <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and <strong>Socket.io</strong></li>
        <li>Deployed using <strong>Render</strong> and <strong>MongoDB Atlas</strong></li>
      </ul>

      <div className="mt-6 flex gap-4 justify-center">
        <span className="text-gray-600">|</span>
        <a
          href="https://github.com/UmeshSingh2000/Rope/tree/main"
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

export default Rope;
