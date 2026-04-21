import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageSquare } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
              Ready to bring your vision to life? Drop me a message and let's start a conversation about your next project.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-20 max-w-7xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-black mb-10 tracking-tight">Connect with me</h3>
            
            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="p-5 glass-morphism rounded-2xl text-accent-blue group-hover:bg-accent-blue/10 group-hover:scale-110 transition-all duration-500">
                  <Mail size={32} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Email Me</div>
                  <a href="mailto:umaarzaman21@gmail.com" className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">umaarzaman21@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="p-5 glass-morphism rounded-2xl text-accent-cyan group-hover:bg-accent-cyan/10 group-hover:scale-110 transition-all duration-500">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-1">WhatsApp / Call</div>
                  <div className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">03419565290</div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5">
              <div className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-6">Follow my journey</div>
              <div className="flex gap-6">
                 <motion.a 
                   whileHover={{ y: -5, scale: 1.1 }}
                   href="https://github.com/umaarzaman" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="p-5 glass-morphism rounded-2xl hover:text-white transition-all text-slate-400"
                 >
                   <Github size={32} />
                 </motion.a>
                 <motion.a 
                   whileHover={{ y: -5, scale: 1.1 }}
                   href="https://www.linkedin.com/in/umar-farooq-18ab8a34a" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="p-5 glass-morphism rounded-2xl hover:text-white transition-all text-slate-400"
                 >
                   <Linkedin size={32} />
                 </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 md:p-16 glass-morphism rounded-[3rem] border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry" 
                  className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6" 
                  placeholder="Hi Umar, I'd like to talk about..." 
                  className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className={`w-full py-6 bg-accent-blue hover:bg-blue-600 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-blue-500/20 group ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
