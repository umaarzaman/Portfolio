import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database, Code } from './Icons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-accent-blue/30 rounded-full blur-2xl animate-pulse"></div>
            <img 
              src="/profile.png" 
              alt="Umar Farooq" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 glass object-cover"
            />
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-sm font-bold mb-8 block w-fit mx-auto backdrop-blur-md"
          >
            🚀 Open for freelance opportunities
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
            Engineering <br />
            <span className="text-gradient">Digital Futures</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            I'm <span className="text-white font-bold">Umar Farooq</span>. I craft high-performance web applications, 
            intelligent AI systems, and scalable digital solutions with a focus on impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary group"
            >
              Explore My Work 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Interactive Elements */}
        <div className="hidden lg:block">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 15, 12]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] p-5 glass-morphism rounded-3xl"
          >
            <Code className="text-accent-blue" size={38} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 25, 0],
              rotate: [-12, -8, -12]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-[15%] p-5 glass-morphism rounded-3xl"
          >
            <Database className="text-accent-cyan" size={38} />
          </motion.div>
          <motion.div
            animate={{ 
              y: [20, -10, 20],
              rotate: [-6, 2, -6]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[10%] p-5 glass-morphism rounded-3xl"
          >
            <Terminal className="text-accent-purple" size={38} />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm"
        >
          <div className="w-1.5 h-1.5 bg-accent-blue rounded-full shadow-[0_0_10px_#3b82f6]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
