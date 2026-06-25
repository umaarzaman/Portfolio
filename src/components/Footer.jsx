import React from 'react';
import { Github, Linkedin, Mail } from './Icons';

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
            <div className="flex gap-10 text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-6 mb-2">
              <a href="https://github.com/umaarzaman" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/umar-farooq-18ab8a34a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:umaarzaman21@gmail.com" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Mail size={20} />
              </a>
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
