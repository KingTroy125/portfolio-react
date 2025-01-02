import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Quote from './components/sections/Quote';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contacts';


function App() {
  return (
    <div className="min-h-screen p-6 bg-[#282C33]">
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;