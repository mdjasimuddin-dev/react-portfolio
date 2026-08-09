import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCpu } from 'react-icons/fi';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      step: '01',
      role: 'Frontend Developer',
      company: 'TechVerse Solutions BD',
      location: 'Dhaka, Bangladesh',
      duration: '2024 - Present',
      coverImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      logoImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80',
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
    },
    {
      id: 2,
      step: '02',
      role: 'Junior Web Developer',
      company: 'InnoCircle Studio',
      location: 'Chittagong, BD',
      duration: '2023 - 2024',
      coverImg: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      logoImg: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80',
      techStack: ['JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      step: '03',
      role: 'Software Engineer Intern',
      company: 'Quantum IT Solutions',
      location: 'Remote / Dhaka',
      duration: '2022 - 2023',
      coverImg: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
      logoImg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=150&q=80',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#050a15] text-white py-24 lg:py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Grids & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-4 h-[1px] bg-orange-500 hidden lg:block" />
            <span className="text-orange-400 font-mono text-xs tracking-[0.4em] uppercase">
              WORK HISTORY
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400">Experience Journey.</span>
          </motion.h2>
        </div>

        {/* 3-Column Equal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-blue-500/20 rounded-3xl backdrop-blur-md overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Co-workers Team Photo Cover Area */}
              <div className="h-48 w-full relative overflow-hidden bg-slate-900 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] to-transparent z-10" />
                <img 
                  src={exp.coverImg} 
                  alt={`${exp.company} Team`}
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Step / Number Badge */}
                <div className="absolute top-4 right-6 z-20 font-mono font-black text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-400/20 via-blue-500/5 to-transparent tracking-tighter">
                  STEP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{exp.step}</span>
                </div>
              </div>

              {/* Identity & Core Details Area */}
              {/* flex-grow এবং flex flex-col নিশ্চিত করবে সব কার্ডের হাইট সমান হবে */}
              <div className="p-6 relative -mt-10 z-20 flex flex-col justify-between flex-grow bg-[#050a15]/80 backdrop-blur-sm rounded-t-3xl">
                <div>
                  
                  {/* PROFILE IMAGE, COMPANY NAME & LOCATION */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* লোগোর চারদিকে একটি সলিড ব্যাকগ্রাউন্ড বর্ডার দেওয়া হয়েছে যেন কভারের সাথে মিশে না যায় */}
                    <div className="w-14 h-14 rounded-xl border border-white/15 bg-[#0b1329] overflow-hidden shadow-xl p-1 shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <img src={exp.logoImg} alt="Company Logo" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="min-w-0 flex flex-col gap-0.5">
                      <p className="text-sm md:text-base text-slate-200 font-bold uppercase tracking-wider truncate">
                        {exp.company}
                      </p>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400 truncate">
                        <FiMapPin className="w-3 h-3 text-slate-500 shrink-0" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* DESIGNATION / ROLE */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 mb-5 group-hover:border-blue-500/10 transition-colors">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-0.5">POSITION / ROLE</span>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                      <FiBriefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="truncate">{exp.role}</span>
                    </h3>
                  </div>

                  {/* TECH STACK SECTION */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-2 flex items-center gap-1">
                      <FiCpu className="w-3 h-3 text-blue-400" /> Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-slate-300 group-hover:border-blue-500/10 group-hover:text-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>

                {/* Duration Widget Badge at Bottom-Right */}
                <div className="flex justify-end mt-6 pt-4 border-t border-white/5">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-xl shadow-md">
                    <FiCalendar className="w-3.5 h-3.5" /> <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;