import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Cpu, HeartPulse, Coffee, Watch, Scissors } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: "AI Blood Report Analyzer",
      desc: "Advanced AI system that analyzes blood reports to provide health insights, risk detection, and trend analysis using machine learning concepts.",
      tags: ["AI/ML", "React", "Node.js", "MongoDB"],
      link: "#",
      featured: true,
      icon: <HeartPulse className="text-red-500" size={40} />
    },
    {
      title: "Chronos Watch Website",
      desc: "A luxury timepiece showcase with high-end animations and premium UI/UX design for a watch brand.",
      tags: ["HTML", "CSS", "JS", "Animations"],
      link: "https://umaarzaman.github.io/chronos-watch-website-/",
      icon: <Watch className="text-accent-blue" size={24} />
    },
    {
      title: "Café Website",
      desc: "Modern and elegant café landing page with responsive menus and integrated Google Maps.",
      tags: ["HTML", "CSS", "JS"],
      link: "https://umaarzaman.github.io/cafe-website/",
      icon: <Coffee className="text-amber-500" size={24} />
    },
    {
      title: "Saloon Website",
      desc: "A booking-oriented salon website with service showcases and professional aesthetic.",
      tags: ["Responsive Design", "UI/UX", "Interactive"],
      link: "https://umaarzaman.github.io/saloon/",
      icon: <Scissors className="text-purple-400" size={24} />
    },
    {
      title: "Orto Café Website",
      desc: "A sophisticated restaurant/café layout focusing on high-quality visuals and user engagement.",
      tags: ["Branding", "CSS3", "Design"],
      link: "https://umaarzaman.github.io/orto-cafe/",
      icon: <Coffee className="text-green-500" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-blue/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-purple/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              Crafting <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">A showcase of technical innovation and creative problem solving across different domains.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/umaarzaman" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 text-white font-bold px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            Explore All Repos <Github size={20} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-[3rem] glass-morphism p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center"
            >
              <div className="absolute top-0 right-0 p-12 text-accent-blue/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Cpu size={300} />
              </div>
              
              <div className="lg:w-1/2 relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="p-5 bg-red-500/10 rounded-2xl w-fit shadow-lg shadow-red-500/5">
                    {project.icon}
                  </div>
                  <div className="px-4 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-black uppercase tracking-[0.2em]">
                    Flagship Project
                  </div>
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">{project.title}</h3>
                <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 bg-white/5 text-slate-300 rounded-xl text-sm font-bold border border-white/5 group-hover:border-accent-blue/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="btn-primary group"
                  >
                    View Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-blue/10 rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-accent-blue/30 transition-all duration-500">
                 <div className="relative w-full h-full p-12 flex flex-col justify-center items-center text-center">
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="p-10 glass-morphism rounded-3xl mb-8 relative"
                    >
                        <HeartPulse className="text-red-500" size={80} />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
                    </motion.div>
                    <div className="glass px-8 py-4 rounded-2xl text-sm font-mono text-accent-cyan flex items-center gap-3 shadow-2xl shadow-accent-cyan/10">
                        <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
                        Analyzing blood report... 85%
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="p-10 glass rounded-[2.5rem] hover:border-accent-blue/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-blue/20 transition-all"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-white hover:bg-accent-blue/50 transition-all text-slate-400">
                    <ExternalLink size={22} />
                  </a>
                  <a href="#" className="p-3 glass rounded-xl hover:text-white hover:bg-accent-blue/50 transition-all text-slate-400">
                    <Github size={22} />
                  </a>
                </div>
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-accent-blue transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-lg mb-8 line-clamp-3 leading-relaxed font-medium">{project.desc}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
