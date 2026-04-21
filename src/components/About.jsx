import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Heart } from './Icons';

const About = () => {
  const cards = [
    {
      icon: <GraduationCap className="text-accent-blue" size={32} />,
      title: "Academic Excellence",
      subtitle: "BS Computer Science",
      desc: "Currently pursuing BSCS at a top-tier university, maintaining a focus on core engineering principles."
    },
    {
      icon: <Code2 className="text-accent-cyan" size={32} />,
      title: "Full Stack Mastery",
      subtitle: "MERN Specialist",
      desc: "Building end-to-end applications with a focus on clean code, performance, and user-centric design."
    },
    {
      icon: <Rocket className="text-accent-purple" size={32} />,
      title: "Future-Ready Tech",
      subtitle: "AI & Automation",
      desc: "Exploring the frontiers of AI to build smarter, more efficient digital experiences and automated workflows."
    },
    {
      icon: <Heart className="text-accent-pink" size={32} />,
      title: "User Experience",
      subtitle: "UI/UX Designer",
      desc: "A designer's eye combined with a developer's mind. Crafting interfaces that are both beautiful and functional."
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
              Crafting <br />
              <span className="text-gradient">Meaningful Impact</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
              I'm more than just a coder. I'm a digital architect dedicated to turning complex ideas into seamless, high-performance realities.
            </p>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              My journey as a CS student and developer has taught me that the best solutions are born from a blend of technical precision and creative vision.
            </p>
            
            <div className="flex gap-12 pt-6 border-t border-white/5">
              <div className="text-left">
                <div className="text-4xl font-black text-white mb-1">10+</div>
                <div className="text-xs text-slate-500 uppercase font-black tracking-[0.2em]">Projects Built</div>
              </div>
              <div className="w-px h-12 bg-white/10 mt-2"></div>
              <div className="text-left">
                <div className="text-4xl font-black text-white mb-1">BS</div>
                <div className="text-xs text-slate-500 uppercase font-black tracking-[0.2em]">CS Student</div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden relative group glass-morphism border border-white/10"
            >
              <img 
                src="/profile.png" 
                alt="Umar Farooq" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="text-xs font-black text-accent-blue uppercase tracking-[0.2em] mb-2">The Person Behind</div>
                <h3 className="text-3xl font-black tracking-tighter">Umar Farooq</h3>
              </div>
            </motion.div>

            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-10 glass-morphism rounded-[2.5rem] group hover:border-accent-blue/30 transition-all duration-500"
              >
                <div className="mb-8 p-5 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  {card.icon}
                </div>
                <div className="text-xs font-black text-accent-blue uppercase tracking-[0.2em] mb-2 opacity-70">
                  {card.subtitle}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{card.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
