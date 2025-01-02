import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-700">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-mono">Tristan</span>
            <span className="text-gray-400">tristan@gmail.com</span>
          </div>
          <p className="text-gray-400 text-sm">
            Web designer and front-end developer
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-4">Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-8">
        © Copyright 2024. Made by Tristan
      </p>
    </footer>
  );
};

export default Footer;