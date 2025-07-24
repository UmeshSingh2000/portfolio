import React from 'react';

const Thanks = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="max-w-xl">
        <h1 className="text-xl mb-4"> Submission Received</h1>

        <p className="mb-2">$ Thank you for reaching out!</p>
        <p className="mb-2">$ I'll get back to you as soon as possible.</p>
        <p className="mb-8">$ You may close this window or return to the homepage.</p>

        <a
          href="/"
          className="inline-block bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4"
        >
          Go Home
        </a>

        <p className="mt-8 text-sm text-green-500">
          <span className="animate-pulse">▌</span> End of line...
        </p>
      </div>
    </div>
  );
};

export default Thanks;
