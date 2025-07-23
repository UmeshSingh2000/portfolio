'use client';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Desktop from '@/Components/DesktopComponent';

import About from '@/Components/About';
import Welcome from '@/Components/Welcome';

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = () => {
    switch (selectedItem) {
      case 'index.js':
        return <About />;
      case 'App.jsx':
        return <div>📄 This is App.jsx content</div>;
      case 'config.json':
        return <About />;
      case 'Documents':
        return <div>📁 Documents section</div>;
      case 'Downloads':
        return <Desktop />;
      case 'projectFiles':
        return <div>📂 Project Folder Overview</div>;
      default:
        return <h1 className="text-xl font-bold mb-4"><Welcome /></h1>;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar */}
        <div className="w-64 fixed top-[64px] bottom-0 left-0 z-40">
          <Sidebar selectedItem={selectedItem} onSelect={setSelectedItem} />
        </div>

        {/* Main content */}
        <main className="ml-64 flex-1 overflow-y-auto h-[calc(100vh-64px)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Page;
