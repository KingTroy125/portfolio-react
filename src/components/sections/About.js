// src/components/About.js
import React from 'react';
import FadeInSection from '../../data/FadeInSection.js'

const About = () => (
  <section id="about-me" className="mb-32">
    <h2 className="text-2xl font-medium mb-8">
      <span className="text-purple-400">#</span>about-me
    </h2>

    <div className="grid grid-cols-2 gap-12">
      <div className="text-gray-400 space-y-4">
        <p>Hello, I'm Tristan!</p>
        <p>
          I'm a self-taught front-end developer based in South Africa,
          . I can develop responsive websites from scratch and
          raise them into modern user-friendly web experiences.
        </p>
        <p>
          Transforming my creativity and knowledge into a websites has been
          my passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        <button className="border border-purple-400 text-purple-400 px-4 py-2 mt-4 hover:bg-purple-400/10 transition-colors">
          Read more →
        </button>
      </div>
    </div>
  </section>
);

export default About;
