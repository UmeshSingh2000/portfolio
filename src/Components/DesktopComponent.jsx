'use client'
import React from 'react';
import DesktopIcon from './DesktopIcon';
import { files } from '../data/files';

const Desktop = () => {
  const handleOpen = (file) => {
    if (file.type === 'link') {
      window.open(file.href, '_blank');
    } else if (file.type === 'file') {
      // open PDF or modal
      window.open(file.href, '_blank');
    }
  };

  return (
    <div className="w-full flex gap-4 content-start">
      {files.map((file) => (
        <DesktopIcon
          key={file.id}
          name={file.name}
          icon={file.icon}
          onClick={() => handleOpen(file)}
        />
      ))}
    </div>
  );
};

export default Desktop;
