import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp, FiTerminal, FiGlobe, FiCpu } from 'react-icons/fi';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { id: 1, icon: FiGithub, href: '#', label: 'GitHub', color: 'hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
    { id: 2, icon: FiLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]' },
    { id: 3, icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
  ];

  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-12 overflow-hidden border-t border-slate-900">
      
      {/* Premium Top Gradient Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Cyberpunk Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_100%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Ambient Radial Neon Glows */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[400px] h-[200px] bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[200px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/60">
          
          {/* Column 1: Brand Status */}
          <div className="md:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 font-bold tracking-wider text-xl"
            >
              <div className="relative w-3.5 h-3.5 rounded-sm bg-gradient-to-tr from-cyan-400 to-blue-500 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#020617] rounded-sm" />
              </div>
              <span className="font-mono tracking-tight">PORTFOLIO<span className="text-cyan-400">.</span>MATRIX</span>
            </motion.div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Architecting exceptional digital experiences at the intersection of robust backend logic and elegant user interface design.
            </p>

            {/* Premium Live Node Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm font-mono text-[10px] tracking-wider text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-500">// Engine Status:</span> Ready & Optimized
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4">// Map</span>
              <ul className="space-y-3 text-sm text-slate-400 font-light">
                {['Intro Overview', 'Featured Work', 'Professional Timeline'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().split(' ')[0]}`} 
                      className="relative group transition-colors duration-300 hover:text-white"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4">// Infrastructure</span>
              <ul className="space-y-3 text-sm text-slate-400 font-light">
                <li className="flex items-center gap-2 text-slate-300">
                  <FiTerminal className="w-3.5 h-3.5 text-cyan-400" /> React 18 / Next
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <FiGlobe className="w-3.5 h-3.5 text-blue-400" /> Tailwind CSS v3
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <FiCpu className="w-3.5 h-3.5 text-purple-400" /> Framer Motion
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Actions & Socials */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-8">
            {/* Premium Animated Back to Top Button */}
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative inline-flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-xl font-mono text-[10px] uppercase tracking-widest transition-all duration-300 text-slate-300 hover:text-cyan-400 shadow-lg"
            >
              Ascend to Top 
              <FiArrowUp className="w-3.5 h-3.5 transform group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </motion.button>
            
            {/* Premium Social Matrix */}
            <div className="space-y-3 md:text-right w-full">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">// Network</span>
              <div className="flex gap-3 md:justify-end">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={social.id}
                      href={social.href}
                      whileHover={{ y: -3 }}
                      className={`w-10 h-10 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-center text-slate-400 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Panel */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div className="tracking-wide">
            © {currentYear} All Rights Reserved <span className="mx-1 text-slate-700">•</span> Cryptographic Integrity Maintained
          </div>
          <div className="text-slate-600 sm:text-right">
            Handcrafted with zero bloat <span className="text-cyan-500/40">⚡</span> Built to scale.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;