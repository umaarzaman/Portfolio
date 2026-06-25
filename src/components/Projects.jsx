import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Cpu, HeartPulse, Coffee, Monitor, Database, Rocket, Brain, GraduationCap } from './Icons';

// Custom SVG for Music player icon
const MusicIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "JobTailor",
      desc: "Next.js 14 App Router application with JWT authentication, MongoDB, and Claude API integration that dynamically tailors resumes to job descriptions and tracks job applications.",
      tags: ["Next.js 14", "MongoDB", "Claude API", "Tailwind CSS", "JWT Auth"],
      categories: ["Full-Stack", "AI Integration"],
      link: "https://jobtailor-ai.vercel.app",
      github: "https://github.com/umaarzaman/Jobtailor",
      featured: true,
      icon: <Brain className="text-accent-purple" size={40} />
    },
    {
      title: "AI Blood Report Analyzer",
      desc: "Next.js and Claude API application that parses uploaded blood reports using advanced prompt engineering, explaining complex medical jargon in clear, actionable plain language.",
      tags: ["Next.js", "Claude API", "Tailwind CSS", "PDF Parsing", "Prompt Engineering"],
      categories: ["Full-Stack", "AI Integration"],
      link: "https://blood-analyzer-ai.vercel.app",
      github: "https://github.com/umaarzaman/blood-ai-agent",
      featured: true,
      icon: <HeartPulse className="text-red-500" size={40} />
    },
    {
      title: "AI Career Counseling App",
      desc: "Streamlit and Claude API powered career counseling agent featuring a multi-step onboarding flow and conversational follow-up to match users with ideal career paths.",
      tags: ["Streamlit", "Python", "Claude API", "LLM Chains"],
      categories: ["AI Integration"],
      link: "https://career-counsel-ai.streamlit.app",
      github: "https://github.com/umaarzaman/ai-career-counseling",
      icon: <GraduationCap className="text-accent-cyan" size={24} />
    },
    {
      title: "Qahwa Noir",
      desc: "Awwwards-style luxury café web experience featuring single-page React architecture, Three.js WebGL particle systems, smooth GSAP scroll animations, and glassmorphic UI.",
      tags: ["React", "Three.js", "GSAP", "WebGL", "Tailwind CSS", "Framer Motion"],
      categories: ["Creative Frontend"],
      link: "https://qahwa-noir.vercel.app",
      github: "https://github.com/umaarzaman/qahwa-noir",
      icon: <Coffee className="text-amber-500" size={24} />
    },
    {
      title: "3D Room Portfolio",
      desc: "Interactive 3D developer portfolio showcasing personal workspace in a virtual room environment with custom orbit controls and interactive mesh models.",
      tags: ["React.js", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
      categories: ["Creative Frontend"],
      link: "https://umaarfarooq-portfolio.vercel.app/",
      github: "https://github.com/umaarzaman/3d-room-portfolio",
      icon: <Monitor className="text-accent-blue" size={24} />
    },
    {
      title: "Expense Tracker",
      desc: "A comprehensive expense tracking application with category breakdowns, data visualization, and financial health reporting.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      categories: ["Full-Stack"],
      link: "https://expense-track-mern.vercel.app",
      github: "https://github.com/umaarzaman/expense-tracker",
      icon: <Database className="text-accent-cyan" size={24} />
    },
    {
      title: "Spotify Clone",
      desc: "A pixel-perfect clone of the Spotify web player with audio playback controls, responsive playlist rendering, and custom state management.",
      tags: ["React", "Tailwind CSS", "Context API", "Audio API"],
      categories: ["Creative Frontend", "Full-Stack"],
      link: "https://spotify-clone-web.vercel.app",
      github: "https://github.com/umaarzaman/spotify-clone",
      icon: <MusicIcon className="text-green-500" size={24} />
    },
    {
      title: "Career LaunchPad CRUD",
      desc: "Full-stack CRUD application assisting students in organizing job search resources, resumes, and tracking application timelines.",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      categories: ["Full-Stack"],
      link: "https://career-launchpad-crud.vercel.app",
      github: "https://github.com/umaarzaman/career-launchpad",
      icon: <Rocket className="text-accent-pink" size={24} />
    }
  ];

  const filteredProjects = projects.filter(p => 
    activeFilter === 'All' || p.categories.includes(activeFilter)
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-blue/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-purple/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black text-accent-purple uppercase tracking-[0.3em] mb-4 block">03 // Creations</span>
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

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-start gap-2 mb-16 p-1.5 bg-white/5 rounded-[2rem] w-fit border border-white/5 backdrop-blur-md">
          {['All', 'AI Integration', 'Full-Stack', 'Creative Frontend'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${
                activeFilter === tab ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
              {activeFilter === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent-blue rounded-full -z-10 shadow-lg shadow-blue-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Featured Projects Section */}
        <AnimatePresence mode="wait">
          {featuredProjects.length > 0 && (
            <motion.div 
              key={`featured-${activeFilter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 mb-20"
            >
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className="relative group overflow-hidden rounded-[3rem] glass-morphism p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center glow-border-hover-purple"
                >
                  <div className="absolute top-0 right-0 p-12 text-accent-blue/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <Cpu size={300} />
                  </div>
                  
                  <div className="lg:w-1/2 relative z-10">
                    <div className="mb-8 flex flex-wrap items-center gap-4">
                      <div className="p-5 bg-white/5 rounded-2xl w-fit shadow-lg border border-white/5">
                        {project.icon}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-black uppercase tracking-[0.2em]">
                          Flagship Project
                        </span>
                        {project.categories.map(cat => {
                          let badgeClass = "";
                          if (cat === "AI Integration") badgeClass = "bg-accent-purple/10 border-accent-purple/20 text-accent-purple";
                          else if (cat === "Full-Stack") badgeClass = "bg-accent-blue/10 border-accent-blue/20 text-accent-blue";
                          else if (cat === "Creative Frontend") badgeClass = "bg-accent-pink/10 border-accent-pink/20 text-accent-pink";
                          return (
                            <span key={cat} className={`px-4 py-1 rounded-full border text-xs font-black uppercase tracking-[0.1em] ${badgeClass}`}>
                              {cat}
                            </span>
                          );
                        })}
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
                      {project.link && (
                        <motion.a 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary group"
                        >
                          View Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 glass rounded-2xl hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                        >
                          <Github size={24} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-blue/10 rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden group-hover:border-accent-blue/20 transition-all duration-500">
                     {project.title === "JobTailor" ? (
                       <div className="relative w-full h-full p-12 flex flex-col justify-center items-center text-center">
                          <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="p-10 glass-morphism rounded-3xl mb-8 relative border border-white/10"
                          >
                              <Brain className="text-accent-purple" size={80} />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-cyan rounded-full animate-ping opacity-75"></div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-cyan rounded-full"></div>
                          </motion.div>
                          <div className="glass px-8 py-4 rounded-2xl text-sm font-mono text-accent-cyan flex items-center gap-3 shadow-2xl shadow-accent-cyan/10">
                              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse"></div>
                              Tailoring Resume... 94% Match
                          </div>
                       </div>
                     ) : (
                       <div className="relative w-full h-full p-12 flex flex-col justify-center items-center text-center">
                          <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="p-10 glass-morphism rounded-3xl mb-8 relative border border-white/10"
                          >
                              <HeartPulse className="text-red-500" size={80} />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-75"></div>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
                          </motion.div>
                          <div className="glass px-8 py-4 rounded-2xl text-sm font-mono text-accent-cyan flex items-center gap-3 shadow-2xl shadow-accent-cyan/10">
                              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
                              Analyzing report... 85% complete
                          </div>
                       </div>
                     )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project, i) => {
              let glowClass = "glow-border-hover";
              if (project.categories.includes("AI Integration")) glowClass = "glow-border-hover-purple";
              else if (project.categories.includes("Creative Frontend")) glowClass = "glow-border-hover-pink";
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -12 }}
                  className={`p-10 glass rounded-[2.5rem] ${glowClass} transition-all duration-500 group relative overflow-hidden flex flex-col justify-between`}
                >
                <div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-blue/20 transition-all"></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all border border-white/5">
                      {project.icon}
                    </div>
                    <div className="flex gap-4">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-white hover:bg-accent-blue/50 transition-all text-slate-400">
                          <ExternalLink size={22} />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-white hover:bg-accent-blue/50 transition-all text-slate-400">
                          <Github size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map(cat => {
                      let badgeClass = "";
                      if (cat === "AI Integration") badgeClass = "bg-accent-purple/10 border-accent-purple/20 text-accent-purple";
                      else if (cat === "Full-Stack") badgeClass = "bg-accent-blue/10 border-accent-blue/20 text-accent-blue";
                      else if (cat === "Creative Frontend") badgeClass = "bg-accent-pink/10 border-accent-pink/20 text-accent-pink";
                      return (
                        <span key={cat} className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-[0.1em] ${badgeClass}`}>
                          {cat}
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-accent-blue transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-lg mb-8 line-clamp-3 leading-relaxed font-medium">{project.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ); })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
