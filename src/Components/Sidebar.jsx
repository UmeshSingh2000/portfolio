'use client'
import React from 'react';
import { Folder, FileText, ChevronDown, ChevronRight } from 'lucide-react';

const Sidebar = ({ selectedItem, onSelect }) => {
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

  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-4 overflow-y-auto">
      <div className="text-xl font-bold mb-6 border-b border-gray-600 pb-2">
        Explorer
      </div>

      <ul className="text-sm">
        {/* Project Files Folder */}
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
              {['Potato Trails', 'ERP Portal', 'QR-Based Ordering System'].map((file) => (
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

        {/* Static folders */}
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
  );
};

export default Sidebar;
