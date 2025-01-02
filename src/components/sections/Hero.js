import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 grid grid-cols-2 gap-12 mb-32">
      <div className="space-y-4">
        <h1 className="text-4xl font-medium">
          Tristan is a <span className="text-purple-400">web designer</span> ,
          <br />
          <span className="text-purple-400">front-end developer</span> and
          <br />
          <span className="text-purple-400">Software developer</span>
        </h1>
        <p className="text-gray-400 text-sm">
          He crafts responsive websites where technologies
          <br />
          meet creativity
        </p>
        <button className="border border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-400/10 transition-colors">
          Contact me !!
        </button>
      </div>
      <div className="relative">
        <div className="absolute right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
