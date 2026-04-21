import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "Next.js (Learning)"],
      color: "from-accent-blue/20 to-accent-cyan/20"
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "System Design", "Microservices"],
      color: "from-accent-purple/20 to-accent-pink/20"
    },
    {
      title: "Data Management",
      skills: ["MongoDB", "Mongoose", "PostgreSQL (Basic)", "Firebase", "Redis (Basic)"],
      color: "from-accent-cyan/20 to-accent-blue/20"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "Docker (Basic)", "Vite / Webpack", "Postman", "CI/CD", "AWS (Basic)"],
      color: "from-accent-pink/20 to-accent-purple/20"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Technical <span className="text-gradient">Powerhouse</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
              A comprehensive suite of technologies I've mastered to build modern, scalable, and high-performance digital products.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-10 glass-morphism rounded-[2.5rem] border border-white/5 relative group overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-8 tracking-tight flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-accent-blue group-hover:w-12 transition-all"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-slate-300 group-hover:bg-white/10 group-hover:border-white/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
