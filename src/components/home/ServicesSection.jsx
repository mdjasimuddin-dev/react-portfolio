import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiSmartphone } from 'react-icons/fi';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Building responsive, high-performance, and visually stunning web applications using React, Next.js, and Tailwind CSS.',
      icon: FiLayout,
      glowColor: 'group-hover:border-cyan-500/50 shadow-cyan-500/10',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
    },
    {
      id: 2,
      title: 'Backend & APIs',
      description: 'Developing robust server-side logic, secure RESTful APIs, and database architectures using Node.js and Express.',
      icon: FiServer,
      glowColor: 'group-hover:border-blue-500/50 shadow-blue-500/10',
      iconBg: 'bg-blue-500/10 text-blue-400',
    },
    {
      id: 3,
      title: 'Mobile Optimization',
      description: 'Ensuring seamless cross-browser compatibility and ultra-fast mobile performance with a mobile-first design approach.',
      icon: FiSmartphone,
      glowColor: 'group-hover:border-indigo-500/50 shadow-indigo-500/10',
      iconBg: 'bg-indigo-500/10 text-indigo-400',
    },
  ];

  return (
    <section className="relative bg-[#030712] py-10 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            What I Do
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Core Expertise & Services
          </p>
          <div className="w-12 h-1 bg-gradient-to-r md:mx-auto from-cyan-500 to-blue-500 mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-[#0b1329]/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.glowColor}`}
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Bottom Link/Decoration */}
                <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                  LEARN MORE <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;