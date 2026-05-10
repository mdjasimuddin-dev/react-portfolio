import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants for the bento cards
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    floating: (delay) => ({
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050a15] overflow-hidden py-20">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Introduction */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-orange-500 font-mono tracking-widest mb-4 uppercase text-sm">
              // Professional Web Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">scalable</span> digital products.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Specialized in Shopify, WordPress, and the MERN stack. I transform complex problems into elegant, premium web experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors"
              >
                View My Projects
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="px-10 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-full transition-all"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Animated Tech Bento Grid */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              
              {/* React Card */}
              <motion.div 
                custom={0}
                variants={cardVariants}
                initial="initial"
                animate={["animate", "floating"]}
                className="bg-[#0f172a] p-6 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center gap-3"
              >
                <div className="w-12 h-12 text-blue-400 animate-spin-slow">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                </div>
                <span className="text-white font-bold">React.js</span>
              </motion.div>

              {/* Stats Card */}
              <motion.div 
                custom={1}
                variants={cardVariants}
                initial="initial"
                animate={["animate", "floating"]}
                className="bg-[#0f172a] p-6 rounded-3xl border border-slate-800 shadow-2xl mt-12"
              >
                <p className="text-orange-500 text-3xl font-black">100+</p>
                <p className="text-slate-400 text-sm">Projects Delivered</p>
              </motion.div>

              {/* Shopify/MERN Card */}
              <motion.div 
                custom={0.5}
                variants={cardVariants}
                initial="initial"
                animate={["animate", "floating"]}
                className="col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-white font-bold">Full-Stack Solutions</h3>
                  <p className="text-slate-400 text-sm">Shopify • MERN • WordPress</p>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900" />
                  ))}
                </div>
              </motion.div>

              {/* Code Snippet Card */}
              <motion.div 
                custom={1.5}
                variants={cardVariants}
                initial="initial"
                animate={["animate", "floating"]}
                className="bg-[#0f172a] p-5 rounded-3xl border border-slate-800 shadow-2xl col-span-2 overflow-hidden"
              >
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <code className="text-blue-400 text-xs block">
                  const <span className="text-orange-400">developer</span> = &#123; <br />
                  &nbsp;&nbsp;skills: ['Clean Code', 'UI/UX'], <br />
                  &nbsp;&nbsp;passion: 'Performance' <br />
                  &#125;;
                </code>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;