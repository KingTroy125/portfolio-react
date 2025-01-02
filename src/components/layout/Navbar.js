import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-[#282C33] shadow-md transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-xl font-mono">Tristan</span>
      </div>
      <div className="space-x-8 text-sm">
        <a href="#home" className="hover:text-purple-400 transition-colors">
          #home
        </a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">
          #projects
        </a>
        <a href="#about-me" className="hover:text-purple-400 transition-colors">
          #about-me
        </a>
        <a href="#contacts" className="hover:text-purple-400 transition-colors">
          #contacts
        </a>
        <select className="bg-transparent hover:text-purple-400 transition-colors">
          <option>EN</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
