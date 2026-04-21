import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black text-gradient mb-4 tracking-tighter">UF<span className="text-accent-blue">.</span></div>
            <p className="text-slate-500 max-w-sm">
              Building the next generation of web applications and AI solutions with passion and precision.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-10 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-slate-600 text-sm font-medium">
              © {new Date().getFullYear()} Umar Farooq. Designed with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
