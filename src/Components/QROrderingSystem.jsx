import React from 'react';

const QROrderingSystem = () => {
  return (
    <div className="p-6 font-mono text-sm text-white bg-black h-full overflow-y-auto flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4 text-green-400 text-center">
        📄 QR-Based Ordering System
      </h2>

      {/* Project Image */}
      <img
        src="/qrorder.png" // Make sure this image is in your public/images folder
        alt="QR Ordering System Preview"
        className="rounded-lg shadow-md mb-6 w-full max-w-xl object-cover"
      />

      <p className="mb-4 text-gray-300 text-center max-w-2xl">
        A contactless food ordering system where customers scan a <strong>QR code</strong> to browse the menu, place orders, – built with the <strong>MERN stack</strong>.
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 text-left max-w-2xl">
        <li>Dynamic QR code generation per table</li>
        <li>Customer-friendly UI with cart and order tracking</li>
        <li>Admin panel for restaurant staff to manage menu, orders, and tables</li>
        <li>Real-time updates using <strong>Socket.io</strong></li>
        <li>Deployed on <strong>Render</strong> with MongoDB Atlas integration</li>
      </ul>

      <div className="mt-6 flex gap-4 justify-center">
        <a
          href="https://qr-order-dun.vercel.app/2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🔗 View Live
        </a>
        <span className="text-gray-600">|</span>
        <a
          href="https://github.com/UmeshSingh2000/QR-Order"
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

export default QROrderingSystem;
