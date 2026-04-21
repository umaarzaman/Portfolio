import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-morphism' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-gradient cursor-pointer tracking-tighter"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          UF<span className="text-accent-blue">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-white/10"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-5"
          >
            <a href="https://github.com/umaarzaman" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/umar-farooq-18ab8a34a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-morphism border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] w-full bg-white/10"></div>
              <div className="flex space-x-8">
                <a href="https://github.com/umaarzaman" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/umar-farooq-18ab8a34a" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
