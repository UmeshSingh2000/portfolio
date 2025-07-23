import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Your Name */}
        <div className="text-xl font-bold">
          Umesh Singh Mehta
        </div>
        
        {/* Right side - Navigation Links (optional) */}
        <div className="hidden md:flex space-x-6">
          <a href="https://github.com/UmeshSingh2000" target='_blank' className="hover:text-gray-300"><Github/></a>
          <a href="https://www.linkedin.com/in/umesh-singh-mehta-93819a194/" target='_blank' className="hover:text-gray-300"><Linkedin /></a>
          <a href="mailto:umeshsinghmehta4@gmail.com" target='_blank' className="hover:text-gray-300"><Mail/></a>
        </div>
        
        {/* Mobile Menu Button (optional) */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
