'use client';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Desktop from '@/Components/DesktopComponent';
import About from '@/Components/About';
import Welcome from '@/Components/Welcome';
import PotatoTrails from '@/Components/PotatoTrails';
import ERPPortal from '@/Components/ERPPortal';
import QROrderingSystem from '@/Components/QROrderingSystem';
import Rope from '@/Components/Rope';
import FireSafetyWebsite from '@/Components/FireSafetyWebsite';
import CoachingWebsite from '@/Components/CoachingWebsite';
import Contact from '@/Components/Contact';

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar (for hamburger menu)
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  // Close sidebar (for menu item click & backdrop click)
  const closeSidebar = () => setIsSidebarOpen(false);
  // Select item and close sidebar (for menu item click)
  const selectItem = (item) => {
    setSelectedItem(item);
    closeSidebar();
  };

  // Render content based on selected item
  const renderContent = () => {
    switch (selectedItem) {
      case 'Potato Trails':
        return <PotatoTrails />;
      case 'ERP Portal':
        return <ERPPortal />;
      case 'QR-Based Ordering System':
        return <QROrderingSystem />;
      case 'Rope':
        return <Rope />;
      case 'Fire & Safety':
        return <FireSafetyWebsite />;
      case 'DzineTech':
        return <CoachingWebsite />;
      case 'About':
        return <About />;
      case 'Documents':
        return <Desktop />;
      case 'Contact.js':
        return <Contact />;
      case 'projectFiles':
        return (
          <div className="p-4">
            <div className="text-green-400 font-mono p-4 rounded-lg text-sm">
              <p>📁 Project Files</p>
              <ul className="pl-4 space-y-1">
                <li>📁 Potato Trails</li>
                <li>📁 ERP Portal</li>
                <li>📁 QR Based Attendance</li>
                <li>📁 Rope</li>
                <li>📁 Fire & Safety</li>
                <li>📁 DzineTech</li>
              </ul>
            </div>
          </div>
        );
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      {/* Sidebar & Main Content */}
      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar (handles its own mobile/desktop visibility) */}
        <Sidebar
          selectedItem={selectedItem}
          onSelect={selectItem}
          isSidebarOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />

        {/* Main Content (shifts on sidebar open/close) */}
        <main
          className={`flex-1 bg-black overflow-y-auto h-[calc(100vh-64px)] transition-all duration-300
    ${isSidebarOpen ? 'ml-64' : 'ml-0'} `}
        >
          {renderContent()}
        </main>

      </div>
    </div>
  );
};
export default Page;
