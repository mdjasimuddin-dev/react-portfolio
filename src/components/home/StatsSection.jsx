import React from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiPercent, FiTarget, FiBarChart2 } from 'react-icons/fi';

const StatsSection = () => {
  const stats = [
    { id: 1, label: 'Revenue Generated', value: '$500K+', color: 'text-blue-400', icon: FiDollarSign },
    { id: 2, label: 'Conversion Rate', value: '12.5%', color: 'text-orange-500', icon: FiPercent },
    { id: 3, label: 'Leads Managed', value: '10,000+', color: 'text-indigo-400', icon: FiTarget },
    { id: 4, label: 'ROI Average', value: '4.5x', color: 'text-emerald-400', icon: FiBarChart2 },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#050a15] overflow-hidden border-t border-white/5">
      
      {/* Right-Side Video Overlay */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-80">
        {/* Gradient Overlay */}
        <div className="absolute inset-0  z-10" />
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/33187885/" type="video/mp4" />
        </video>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Part - Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">
              // Scalable Performance
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.15] mb-8 tracking-tighter">
              Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Impact</span> <br />
              <span className="text-slate-500">for Modern Enterprises.</span>
            </h2>
            
            {/* Minimalist Stats List - Cards & Animations */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white/5 border border-white/5 hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 ${stat.color} mb-5 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-500 text-[11px] uppercase tracking-widest mb-1 block group-hover:text-orange-500 transition-colors">
                    {stat.label}
                  </span>
                  <span className={`text-2xl md:text-3xl font-black text-white tracking-tight`}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Trust Badge */}
          <div className="hidden lg:flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-1 border border-white/10 rounded-full backdrop-blur-sm bg-white/5"
            >
              <div className="px-6 py-2 rounded-full border border-white/5 text-[10px] text-slate-400 uppercase tracking-widest">
                Data Verified • 2026
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;