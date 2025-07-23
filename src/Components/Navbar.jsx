import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left side - Your Name */}
        <div className="text-xl font-bold tracking-wide">
          Umesh Singh Mehta
        </div>
        
        {/* Right side - Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          <a 
            href="https://github.com/UmeshSingh2000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a 
            href="https://www.linkedin.com/in/umesh-singh-mehta-93819a194/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a 
            href="mailto:umeshsinghmehta4@gmail.com" 
            className="hover:text-gray-300 transition-colors"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>
        
        {/* Mobile Menu Icon (can be expanded later) */}
        <button className="md:hidden focus:outline-none" aria-label="Menu">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
