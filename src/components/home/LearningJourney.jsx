import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiTerminal, FiAward, FiCheckCircle } from 'react-icons/fi';

const LearningJourney = () => {
  // আপনার স্কুল, কলেজ, ট্রেনিং এবং অনলাইন কোর্সের বাস্তব ডাটা স্ট্রাকচার
  const journey = [
    {
      id: 1,
      type: 'ONLINE PROFESSIONAL COURSE',
      title: 'Full-Stack Web Development',
      institution: 'Interactive Online Platform / Bootcamp',
      location: 'Remote (Self-Paced)',
      duration: '2024 - Present',
      description: 'Extensively studying modern frontend and backend architectures. Building deep expertise in component lifestyle, responsive grid designs, secure state operations, and writing highly modular, clean React code.',
      skills: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
    },
    {
      id: 2,
      type: 'PROFESSIONAL TRAINING',
      title: 'Responsive Web Design & JavaScript Fundamentals',
      institution: 'Tech Academy / Training Center',
      location: 'Dhaka, Bangladesh',
      duration: '2023 - 2024',
      description: 'Completed a structured training program focusing on semantic HTML5, advanced CSS layouts (Flexbox/Grid), asynchronous JavaScript (ES6+), and version control management with Git/GitHub.',
      skills: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Git / GitHub', 'Bootstrap']
    },
    {
      id: 3,
      type: 'Diploma In Engineering',
      title: 'Computer Science and Engineering',
      institution: 'Chapainawabganj Polytechnic Institute',
      location: 'Chapainawabganj, Rajshahi, Bangladesh',
      duration: '2019 - 2023',
      description: 'Completed a Diploma in Computer Science and Engineering with a strong foundation in programming, computer systems, database concepts, and web technologies. Developed practical problem-solving, analytical, and teamwork skills through academic projects and technical activities.',
      skills: ['Programming', 'Computer Fundamentals', 'Web Development', 'Database Management', 'Problem Solving', 'Team Collaboration']
    },
    {
      id: 4,
      type: 'SECONDARY SCHOOL EDUCATION',
      title: 'Secondary School Certificate (SSC)',
      institution: 'Verendi High School',
      location: 'Nachole, Chapainawabganj, Rajshahi, Bangladesh',
      duration: '2014 - 2018',
      description: 'Completed SSC from Verendi High School, Nachole, Chapainawabganj. Built a strong academic foundation and developed basic computer, communication, teamwork, and time-management skills through academic and co-curricular activities.',
      skills: ['Basic Computing', 'acadymic certificate', 'team work']
    }
  ];

  return (
    <section className="relative bg-[#050a15] text-white py-24 lg:py-10 overflow-hidden border-t border-white/5">

      {/* High-End Tech Mesh Overlay Base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Cinematic Ambient Glow Maps */}
      <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-5xl px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-4 h-[1px] bg-orange-500" />
            <span className="text-orange-500 font-mono text-xs tracking-[0.4em] uppercase">
              EDUCATION & KNOWLEDGE ROADMAP
            </span>
            <span className="w-4 h-[1px] bg-orange-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.2]"
          >
            My Academic &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400">
              Learning Journey.
            </span>
          </motion.h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-white/10 ml-2 md:ml-32 space-y-12">

          {journey.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              className="relative pl-6 md:pl-12 group"
            >

              {/* Timeline Node Point (Glow Effect on Hover) */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-[#050a15] border-2 border-slate-700 group-hover:border-orange-500 group-hover:bg-orange-500/20 transition-all duration-300 z-20">
                <span className="absolute inset-0 rounded-full bg-orange-500 animate-[ping_2s_linear_infinite] opacity-0 group-hover:opacity-100" />
              </div>

              {/* Desktop Only Left Side Floating Date Indicator */}
              <div className="hidden md:block absolute left-[-150px] top-2 text-right w-28 font-mono text-xs tracking-wider text-slate-500 group-hover:text-orange-400 transition-colors duration-300">
                {item.duration}
              </div>

              {/* Experience Premium Card */}
              <div className="relative p-6 lg:p-8 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-blue-500/20 rounded-2xl backdrop-blur-md transition-all duration-300">

                {/* Category Badge (SCHOOL, COLLEGE, COURSE, etc.) */}
                <div className="text-[9px] font-mono tracking-widest text-orange-500 mb-2 uppercase block">
                  {item.type}
                </div>

                {/* Top Meta Information Group */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    {/* Degree / Course Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                      <FiBookOpen className="w-4 h-4 text-indigo-400" /> {item.title}
                    </h3>

                    {/* Institution Name and Location Meta */}
                    <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1 flex items-center gap-3 flex-wrap">
                      <span className="text-slate-300 font-semibold">{item.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
                      <span className="flex items-center gap-1 text-slate-500 text-xs">
                        <FiMapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Mobile & Tablet Only Duration Badge */}
                  <div className="md:hidden inline-flex items-center gap-1.5 font-mono text-[11px] text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md w-fit">
                    <FiCalendar className="w-3 h-3" /> {item.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 font-light">
                  {item.description}
                </p>

                {/* Key Skills / Focus Areas Footer */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  <div className="text-slate-500 text-[11px] font-mono flex items-center gap-1 mr-1.5 self-center">
                    <FiTerminal className="w-3 h-3" /> key_learnings:
                  </div>
                  {item.skills?.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5 px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Border Glow Trace */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500/30 transition-all duration-500" />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LearningJourney;