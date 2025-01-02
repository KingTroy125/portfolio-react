import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import SectionTitle from '../ui/SectionTitle';

const Projects = () => {
  return (
    <section id="projects" className="mb-32">
      <div className="flex items-center justify-between mb-8">
        <SectionTitle>projects</SectionTitle>
        <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
          View all →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;