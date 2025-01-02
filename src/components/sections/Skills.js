// src/components/Skills.js
import React from 'react';


const Skills = () => (
  <section className="mb-32">
    <h2 className="text-2xl font-medium mb-8">
      <span className="text-purple-400">#</span>skills
    </h2>

    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1">
        {/* Decorative dots and lines can be added here */}
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        <div className="border border-gray-700 p-4">
          <h3 className="font-medium mb-2">Languages</h3>
          <p className="text-sm text-gray-400">
            TypeScript
            <br />
            Python JavaScript
          </p>
        </div>
        <div className="border border-gray-700 p-4">
          <h3 className="font-medium mb-2">Databases</h3>
          <p className="text-sm text-gray-400">
            SQLite
            <br />
            MySQL
          </p>
        </div>
        <div className="border border-gray-700 p-4">
          <h3 className="font-medium mb-2">Tools</h3>
          <p className="text-sm text-gray-400">
            VSCode Linux
            <br />
            Figma
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
