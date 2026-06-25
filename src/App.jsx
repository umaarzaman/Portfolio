import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div className="min-h-screen bg-primary relative">
      <Spotlight />
      
      {/* Left & Right HUD Borders */}
      <div className="fixed top-0 left-0 bottom-0 w-px bg-white/[0.03] z-40 hidden xl:block pointer-events-none"></div>
      <div className="fixed top-0 right-0 bottom-0 w-px bg-white/[0.03] z-40 hidden xl:block pointer-events-none"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
