import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle formal message submission logic here
    console.log('Message Dispatched:', formState);
  };

  return (
    <section className="relative min-h-screen bg-[#050a15] text-white py-24 lg:py-36 overflow-hidden border-t border-white/5">
      
      {/* High-End Technical Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Synchronized Ambient Lighting Fields */}
      <div className="absolute top-1/3 right-[-10%] w-[550px] h-[550px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Architectural Text & Direct Channels */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-orange-500" />
              <span className="text-orange-500 font-mono text-xs tracking-[0.5em] uppercase block">
                NEXT STEPS
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-8"
            >
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400">
                extraordinary together.
              </span>
            </motion.h2>

            <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-12 font-light max-w-md">
              Have an upcoming project, a complex problem to solve, or just want to discuss technical architecture? Drop a message.
            </p>

            {/* Direct Communication Hub */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Direct Dispatch</div>
                  <a href="mailto:hello@yourdomain.com" className="text-sm font-semibold hover:text-blue-400 transition-colors">hello@yourdomain.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">HQ Location</div>
                  <div className="text-sm font-semibold text-slate-300">Dhaka, Bangladesh // Available Worldwide</div>
                </div>
              </div>
            </div>

            {/* Premium Social Links Bar */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <FiGithub className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-End Interactive Matrix Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <form onSubmit={handleSubmit} className="relative group p-8 lg:p-12 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 rounded-3xl backdrop-blur-md transition-all duration-500">
              
              {/* Laser Line Hover Effect */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500/40 transition-all duration-700" />
              
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2">Identification // Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2">Communication Channel // Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2">Project Brief // Message Matrix</label>
                  <textarea 
                    rows="5"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.04] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your architectural needs or project vision..."
                  />
                </div>

                {/* High-End Interactive Submit Button */}
                <button 
                  type="submit"
                  className="w-full group/btn relative mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-xl font-mono text-xs font-bold tracking-[0.2em] uppercase overflow-hidden hover:bg-white/10 hover:border-orange-500/40 transition-all duration-300"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                  Transmit Message <FiSend className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;