import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import DesktopMockupPreview from "./monitorIframe";

// রাইট সাইডের উইজেটের জন্য এভেলেবিলিটি কাউন্টার
const LiveStatusCounter = ({ TargetNum, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(TargetNum);
    if (start === end) return;
    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [TargetNum, duration]);

  return <span>{count}</span>;
};

const ProjectsSection = () => {
  // ৬টি বাস্তবসম্মত পার্সোনাল প্রজেক্টের ডাটা অ্যারে
  const projects = [
    {
      id: 1,
      tag: "FULL STACK",
      title: "MERN E-Commerce WebApp",
      description:
        "A full-stack store application with secure JWT authentication, dynamic cart calculations, Stripe payment simulation, and an admin panel for product management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      tag: "API INTEGRATION",
      title: "Real-Time Dev Analytics Hub",
      description:
        "Fetches and visualizes GitHub user metrics and repository insights using GitHub REST API. Features chart integration, multi-filtering, and light/dark mode persistence.",
      tech: ["React.js", "Chart.js", "Tailwind CSS", "REST API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      tag: "STATE MANAGEMENT",
      title: "Collaborative Task Matrix",
      description:
        "A kanban-style productivity application focusing on complex local state management, persistent drag-and-drop tasks, and sub-task filtering structures.",
      tech: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      tag: "FRONTEND UI",
      title: "Crypto Portfolio Tracker",
      description:
        "A frontend dashboard that tracks live cryptocurrency exchange rates using WebSocket connections. Implements responsive data tables and smooth motion behaviors.",
      tech: ["React.js", "WebSockets", "Framer Motion", "Tailwind"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      tag: "FIREBASE INTEGRATION",
      title: "Social Chat & Discussion App",
      description:
        "A real-time communication platform utilizing Firebase for live messaging, user profile updates, Google OAuth social login, and image file attachment handling.",
      tech: ["React", "Firebase Auth", "Firestore", "Tailwind"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      tag: "WEB ARCHITECTURE",
      title: "Recipe Finder & Meal Planner",
      description:
        "Queries food databases to filter items by calories and dietary requirements. Built to practice performance optimizations like debouncing and lazy-loading images.",
      tech: ["React.js", "Context API", "Spoonacular API", "CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#050a15] text-white py-24 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Background Tech Network Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambiance Lighting Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

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
              <span className="w-6 h-[1px] bg-orange-500" />
              <span className="text-orange-500 font-mono text-xs tracking-[0.4em] uppercase block">
                MY WORK & CREATIONS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15]"
            >
              Projects built with clean code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400">
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
            <div className="relative group p-5 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl flex items-center gap-5 max-w-sm w-full lg:w-auto">
              <div className="absolute top-0 right-12 w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              <div className="relative w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <FiCheckCircle className="w-5 h-5" />
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
                  Match Score: <LiveStatusCounter TargetNum={100} />% Ready to
                  Deploy
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
                ease: "easeOut",
              }}
              className="group relative bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col h-[460px] transition-all duration-300"
            >
              {/* Project Image Wrapper */}
              <div className="relative h-[325px] overflow-hidden bg-[#0a1120] shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
                {/* absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent z-10 opacity-60 pointer-events-none */}

                {/* iframe কম্পোনেন্ট */}
                <div className="relative z-0 w-full h-full pointer-events-auto">
                  <DesktopMockupPreview
                    liveUrl="https://web.programming-hero.com/"
                    projectTitle="My Portfolio Project"
                  />
                </div>

                <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#050a15]/90 border border-white/5 text-[9px] font-mono tracking-widest text-slate-400">
                  {project.tag}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                {/* <div> */}
                {/* Project Title */}
                <h3 className="text-lg font-bold tracking-tight text-white mb-2.5 group-hover:text-blue-400 transition-colors duration-200 line-clamp-1">
                  {project.title}
                </h3>

                {/* Clean Technical Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 font-light line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Footer Section inside Card */}
              {/* <div> */}
              {/* Tech Badges Used */}
              {/* <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((techItem, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[10px] font-mono tracking-wide bg-white/[0.03] text-slate-300 border border-white/5 px-2 py-0.5 rounded"
                    >
                      {techItem}
                    </span>
                  ))}
                </div> */}

              {/* Code and Live Actions Link mapping */}
              {/* <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto font-mono text-xs">
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
                </div> */}
              {/* </div>

              {/* Laser Hover Light Effect */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-400 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
