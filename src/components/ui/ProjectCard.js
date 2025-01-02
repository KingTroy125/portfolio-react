import React from 'react';

const ProjectCard = ({ title, description, tech, links }) => {
  return (
    <div className="bg-[#1E1E1E] border border-gray-700 group transition-all duration-300 hover:-translate-y-1">
      <div className="h-40 bg-[#282828]"></div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-2">{tech}</p>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          {links.live && (
            <a href={links.live} className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400/10">
              Live →
            </a>
          )}
          {links.cache && (
            <a href={links.cache} className="border border-purple-400 text-purple-400 px-4 py-1 text-sm hover:bg-purple-400/10">
              Cached →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;