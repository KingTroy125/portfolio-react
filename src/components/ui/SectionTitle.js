import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-2xl font-medium mb-8">
      <span className="text-purple-400">#</span>{children}
    </h2>
  );
};

export default SectionTitle;