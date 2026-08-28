import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiCheckCircle, FiGithub } from 'react-icons/fi';
import DesktopMockupPreview from './monitorIframe';

// রাইট সাইডের উইজেটের জন্য এভেলেবিলিটি কাউন্টার
// const LiveStatusCounter = ({ TargetNum, duration = 1.5 }) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const end = parseInt(TargetNum);
//     if (start === end) return;
//     let totalMiliseconds = duration * 1000;
//     let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
//     let timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, incrementTime);
//     return () => clearInterval(timer);
//   }, [TargetNum, duration]);

//   return <span>{count}</span>;
// };

const ProjectsSection = () => {
  // ৬টি বাস্তবসম্মত পার্সোনাল প্রজেক্টের ডাটা অ্যারে
  const projects = [
    {
      id: 1,
      tag: 'FULL STACK',
      title: 'MERN E-Commerce WebApp',
      description:
        'A full-stack store application with secure JWT authentication, dynamic cart calculations, Stripe payment simulation, and an admin panel for product management.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      liveLink: 'https://novaryas.com/',
      githubLink: 'https://github.com',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      tag: 'API INTEGRATION',
      title: 'Real-Time Dev Analytics Hub',
      description:
        'Fetches and visualizes GitHub user metrics and repository insights using GitHub REST API. Features chart integration, multi-filtering, and light/dark mode persistence.',
      tech: ['React.js', 'Chart.js', 'Tailwind CSS', 'REST API'],
      liveLink: 'https://stripbearhauling.com/',
      githubLink: 'https://github.com',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      tag: 'STATE MANAGEMENT',
      title: 'Collaborative Task Matrix',
      description:
        'A kanban-style productivity application focusing on complex local state management, persistent drag-and-drop tasks, and sub-task filtering structures.',
      tech: ['Next.js', 'TypeScript', 'Zustand', 'Tailwind'],
      liveLink: 'https://sonofguns.org/',
      githubLink: 'https://github.com',
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      tag: 'FRONTEND UI',
      title: 'Crypto Portfolio Tracker',
      description:
        'A frontend dashboard that tracks live cryptocurrency exchange rates using WebSocket connections. Implements responsive data tables and smooth motion behaviors.',
      tech: ['React.js', 'WebSockets', 'Framer Motion', 'Tailwind'],
      liveLink: 'https://andrew.claystonebd.com/',
      githubLink: 'https://github.com',
      image:
        'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      tag: 'FIREBASE INTEGRATION',
      title: 'Social Chat & Discussion App',
      description:
        'A real-time communication platform utilizing Firebase for live messaging, user profile updates, Google OAuth social login, and image file attachment handling.',
      tech: ['React', 'Firebase Auth', 'Firestore', 'Tailwind'],
      liveLink: 'https://riverview-tires.com/',
      githubLink: 'https://github.com',
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 6,
      tag: 'WEB ARCHITECTURE',
      title: 'Recipe Finder & Meal Planner',
      description:
        'Queries food databases to filter items by calories and dietary requirements. Built to practice performance optimizations like debouncing and lazy-loading images.',
      tech: ['React.js', 'Context API', 'Spoonacular API', 'CSS'],
      liveLink: 'https://beyondwellnesscc.com/',
      githubLink: 'https://github.com',
      image:
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#050a15] text-white py-24 lg:py-28 overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* HEADER AREA: Left Title + Right Personal Profile Status Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 lg:mb-24">
          {/* Header Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-6 h-[2px] bg-blue-500" />
              <span className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase block">
                MY WORK & CREATIONS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
            >
              Projects built with clean code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                and modular architecture.
              </span>
            </motion.h2>
          </div>

          {/* Header Right: Personal Interview/Hiring Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-start lg:justify-end"
          >
            {/* আউটার র‍্যাপার যেখানে হোভার করলে ধূমকেতু বর্ডার চালু হবে */}
            <div className="group relative p-[2px] rounded-2xl overflow-hidden bg-blue-500/20 shadow-[0_10px_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(59,130,246,0.45)] max-w-sm w-full lg:w-auto">
              {/* ধূমকেতুর মতো রোটেশন অ্যানিমেশন (শুধুমাত্র হোভার করলেই দৃশ্যমান হবে) */}
              <div className="absolute -inset-[150%] animate-comet-border bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_220deg,rgba(56,189,248,0.2)_290deg,rgba(96,165,250,0.6)_330deg,#38bdf8_360deg)] opacity-0 opacity-100 transition-opacity duration-300" />

              {/* কার্ডের ভেতরের মূল কন্টেইনার */}
              <div className="relative p-5 bg-[#0b1329]/95 backdrop-blur-xl border border-white/5 rounded-[14px] flex items-center gap-5 w-full">
                <div className="absolute -top-1 right-12 w-16 h-[4px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                <div className="relative w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <FiCheckCircle />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                </div>

                <div className="font-mono">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">
                    HIRING PROFILE STATUS
                  </div>
                  <div className="text-white font-bold text-base tracking-tight">
                    Available for Job / Freelance
                  </div>
                  <div className="text-[10px] text-slate-400/80 mt-0.5">
                    Match Score: <span className="text-emerald-400 font-semibold">100%</span> Ready
                    to Deploy
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-COLUMN PREMIUM RESPONSIVE GRID (Perfect Layout for 6 Projects) */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="group relative rounded-2xl p-[3px] overflow-hidden"
            >
              {/* মুভিং গ্লোয়িং বর্ডার — শুধু হোভার করলেই দেখা যাবে, নাহলে opacity-0 হয়ে লুকানো থাকবে */}
              <div className="absolute -inset-[100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_260deg,rgba(56,189,248,0.55)_300deg,#38bdf8_330deg,rgba(96,165,250,0.7)_345deg,#38bdf8_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* আসল কার্ড কন্টেন্ট — আগের মতোই, শুধু outer wrapper এর ভেতরে বসানো */}
              <div className="relative z-10 bg-[#050a15] bg-gradient-to-b from-white/[0.03] to-transparent border border-cyan-900 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 h-full hover:shadow-[0_0px_90px_rgba(59,130,246,0.45)]">
                {/* Project Image Wrapper */}
                <div className="relative  overflow-hidden bg-[#0a1120] shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent z-10 opacity-60 pointer-events-none" />

                  {/* iframe view by desktop frame feature */}
                  <div className="relative z-0 w-full h-full pointer-events-auto">
                    <DesktopMockupPreview
                      liveUrl={project.liveLink}
                      projectTitle="My Portfolio Project"
                    />
                  </div>

                  {/* project type [example: full stack, api. etc] */}
                  <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#050a15]/90 border border-white/5 text-[9px] font-mono tracking-widest text-slate-400">
                    {project.tag}
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="py-2 px-6 flex flex-col">
                  {/* Project Title */}
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2.5 group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Clean Technical Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 font-light line-clamp-4 flex flex-grow">
                    {project.description.length > 145
                      ? project.description.slice(0, 145) + '...'
                      : project.description}
                  </p>

                  {/* project use Tech Badges  */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((techItem, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] font-mono tracking-wide bg-white/[0.03] text-slate-300 border border-white/5 px-2 py-0.5 rounded"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Code and Live Actions Link mapping */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto pb-5 font-mono text-xs">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-orange-400 group/link transition-colors duration-200"
                    >
                      Live Demo
                      <FiArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <FiGithub className="w-3.5 h-3.5" /> Source Code
                    </a>
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

export default ProjectsSection;
