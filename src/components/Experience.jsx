import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Palette, Globe } from 'lucide-react';

const Experience = () => {
  const items = [
    {
      title: "Web Development Practice",
      company: "Self-driven Projects",
      period: "2023 - Present",
      desc: "Built multiple production-ready landing pages and web applications for various industries including F&B and Fashion.",
      icon: <Globe className="text-accent-blue" size={24} />
    },
    {
      title: "Freelance Website Building",
      company: "Upwork / Fiverr",
      period: "2023 - Present",
      desc: "Collaborated with clients to deliver custom-coded websites, focusing on responsiveness and modern UI/UX principles.",
      icon: <Briefcase className="text-accent-cyan" size={24} />
    },
    {
      title: "UI/UX Design Focus",
      company: "Design Systems",
      period: "Continuous",
      desc: "Implementing modern design trends such as Glassmorphism and dark mode aesthetics into every project.",
      icon: <Palette className="text-accent-purple" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <p className="text-slate-400">Professional experience and key milestones.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 glass rounded-3xl flex flex-col md:flex-row gap-8 items-start hover:border-white/20 transition-all"
            >
              <div className="p-4 bg-white/5 rounded-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="px-4 py-1 bg-accent-blue/10 text-accent-blue text-xs font-bold rounded-full uppercase tracking-widest">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-accent-cyan font-medium mb-4">{item.company}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
