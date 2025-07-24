// components/DesktopIcon.jsx
import React from 'react';

const DesktopIcon = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex flex-col items-center w-20 m-2 cursor-pointer select-none text-white"
      onClick={onClick}
    >
      <img src={icon} alt={name} className="h-14" />
      <span className="text-xs text-center mt-1">{name}</span>
    </div>
  );
};

export default DesktopIcon;
