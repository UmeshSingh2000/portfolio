'use client';
import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => (
  <nav className="bg-gray-800 h-16 text-white px-4 py-3 shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-lg md:text-xl font-bold tracking-wide">
        Umesh Singh Mehta
      </div>
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
      <button
        onClick={toggleSidebar}
        className="md:hidden focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </nav>
);
export default Navbar;
