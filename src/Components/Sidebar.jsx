'use client';
import React from 'react';
import { Folder, FileText, ChevronDown, ChevronRight } from 'lucide-react';

const Sidebar = ({ selectedItem, onSelect, isSidebarOpen, closeSidebar }) => {
  const [expandedFolders, setExpandedFolders] = React.useState({
    projectFiles: true,
  });

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const isSelected = (name) => selectedItem === name;

  // Backdrop for mobile only
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <aside
  className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 overflow-y-auto z-40
    transform duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:translate-x-0 md:static
  `}
>
        <div className="text-xl font-bold mb-6 border-b border-gray-600 pb-2">
          Explorer
        </div>
        <ul className="text-sm">
          <li>
            <div
              onClick={() => toggleFolder('projectFiles')}
              className={`flex items-center w-full text-left py-2 px-2 rounded cursor-pointer ${
                isSelected('projectFiles') ? 'bg-gray-700' : 'bg-gray-800'
              }`}
            >
              {expandedFolders.projectFiles ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <Folder className="ml-2 mr-2" size={16} />
              <span
                className="flex-1"
                onClick={() => onSelect('projectFiles')}
              >
                Project Files
              </span>
            </div>
            {expandedFolders.projectFiles && (
              <ul className="ml-6 mt-1">
                {[
                  'Potato Trails',
                  'ERP Portal',
                  'QR-Based Ordering System',
                  'Rope',
                  'Fire & Safety',
                  'DzineTech',
                ].map((file) => (
                  <li
                    key={file}
                    onClick={() => onSelect(file)}
                    className={`py-1 px-2 flex items-center rounded cursor-pointer ${
                      isSelected(file) ? 'bg-gray-700' : 'hover:bg-gray-800'
                    }`}
                  >
                    <FileText size={16} className="mr-2" />
                    {file}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {['About', 'Documents'].map((folder) => (
            <li key={folder} className="mt-2">
              <div
                onClick={() => onSelect(folder)}
                className={`flex items-center px-2 py-2 rounded cursor-pointer ${
                  isSelected(folder) ? 'bg-gray-700' : 'hover:bg-gray-800'
                }`}
              >
                <Folder size={16} className="mr-2" />
                {folder}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
