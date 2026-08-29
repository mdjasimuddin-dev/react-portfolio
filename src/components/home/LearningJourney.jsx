import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiCode,
  FiFileText,
  FiGithub,
  FiMonitor,
  FiGlobe,
  FiDatabase,
  FiHelpCircle,
  FiUsers,
  FiAward,
} from 'react-icons/fi';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
// 👉 নিজের অ্যারো ইমেজটা এখানে ইম্পোর্ট করো (public/ বা src/assets/ যেখানে রাখবে সেই path অনুযায়ী)
import arrowIcon from './../../assets/arrow-icon.png';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
} from 'react-icons/si';

// ---------------------------------------------------------------
// প্রতিটা স্কিলের পাশে ছোট্ট আইকন দেখানোর জন্য ম্যাপিং।
// লিস্টে না থাকা স্কিলের জন্য ডিফল্ট কোড আইকন ব্যবহার হবে।
// ---------------------------------------------------------------
const skillIconMap = {
  'React.js': <SiReact className="text-cyan-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Node.js': <SiNodedotjs className="text-emerald-400" />,
  MongoDB: <SiMongodb className="text-emerald-500" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'JavaScript (ES6+)': <SiJavascript className="text-yellow-400" />,
  'HTML5 & CSS3': <SiHtml5 className="text-orange-400" />,
  'Git / GitHub': <FiGithub className="text-slate-300" />,
  Bootstrap: <SiBootstrap className="text-purple-400" />,
  Programming: <FiCode className="text-blue-400" />,
  'Computer Fundamentals': <FiMonitor className="text-slate-300" />,
  'Web Development': <FiGlobe className="text-blue-400" />,
  'Database Management': <FiDatabase className="text-slate-300" />,
  'Problem Solving': <FiHelpCircle className="text-slate-300" />,
  'Team Collaboration': <FiUsers className="text-slate-300" />,
  'Basic Computing': <FiMonitor className="text-slate-300" />,
  'Academic Certificate': <FiAward className="text-blue-400" />,
  'Team Work': <FiUsers className="text-slate-300" />,
};

// ---------------------------------------------------------------
// টাইমলাইনের প্রতিটা নোডের গ্লোয়িং আইকন / ইলাস্ট্রেশন
// ---------------------------------------------------------------
const LaptopIllustration = () => (
  <svg viewBox="0 0 220 160" className="w-full h-full">
    <defs>
      <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#134e4a" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    <rect
      x="35"
      y="18"
      width="150"
      height="96"
      rx="8"
      fill="#0b1220"
      stroke="#1e293b"
      strokeWidth="2"
    />
    <rect x="42" y="25" width="136" height="82" rx="3" fill="url(#screenGlow)" />
    <rect x="52" y="36" width="60" height="4" rx="2" fill="#34d399" opacity="0.8" />
    <rect x="52" y="46" width="90" height="3" rx="1.5" fill="#38bdf8" opacity="0.6" />
    <rect x="52" y="54" width="70" height="3" rx="1.5" fill="#64748b" opacity="0.7" />
    <rect x="52" y="64" width="100" height="3" rx="1.5" fill="#64748b" opacity="0.5" />
    <rect x="52" y="72" width="55" height="3" rx="1.5" fill="#34d399" opacity="0.6" />
    <rect x="52" y="82" width="80" height="3" rx="1.5" fill="#64748b" opacity="0.5" />
    <path
      d="M15 118 L205 118 L190 140 L30 140 Z"
      fill="#111827"
      stroke="#1e293b"
      strokeWidth="1.5"
    />
    <rect x="95" y="118" width="30" height="4" rx="2" fill="#1e293b" />
  </svg>
);

const BrowserIllustration = () => (
  <svg viewBox="0 0 220 160" className="w-full h-full">
    <rect
      x="20"
      y="20"
      width="180"
      height="120"
      rx="10"
      fill="#0b1220"
      stroke="#1e293b"
      strokeWidth="2"
    />
    <rect x="20" y="20" width="180" height="22" rx="10" fill="#111a2c" />
    <circle cx="34" cy="31" r="3" fill="#f87171" />
    <circle cx="46" cy="31" r="3" fill="#fbbf24" />
    <circle cx="58" cy="31" r="3" fill="#34d399" />
    <rect x="34" y="54" width="54" height="42" rx="6" fill="#134e4a" stroke="#1f6d63" />
    <circle cx="52" cy="70" r="6" fill="#38bdf8" opacity="0.8" />
    <path
      d="M40 90 L54 76 L64 86 L82 68"
      stroke="#34d399"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <rect x="98" y="54" width="88" height="8" rx="3" fill="#334155" />
    <rect x="98" y="66" width="70" height="6" rx="3" fill="#1e293b" />
    <rect x="98" y="76" width="80" height="6" rx="3" fill="#1e293b" />
    <rect x="34" y="104" width="60" height="24" rx="5" fill="#0f2a26" stroke="#1f6d63" />
    <rect x="102" y="104" width="84" height="24" rx="5" fill="#0f172a" stroke="#1e293b" />
  </svg>
);

const GraduationIllustration = () => (
  <svg viewBox="0 0 220 160" className="w-full h-full">
    <rect x="55" y="96" width="90" height="34" rx="3" fill="#e2e8f0" stroke="#94a3b8" />
    <rect x="55" y="108" width="90" height="4" fill="#cbd5e1" />
    <rect x="60" y="80" width="80" height="20" rx="3" fill="#34d399" stroke="#0f766e" />
    <path d="M45 62 L110 40 L175 62 L110 84 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
    <path d="M75 68 L75 90 Q110 102 145 90 L145 68" fill="none" stroke="#1e293b" strokeWidth="4" />
    <circle cx="175" cy="62" r="3" fill="#facc15" />
    <path d="M175 62 L178 92" stroke="#facc15" strokeWidth="2" />
    <path d="M178 92 L172 100 L184 100 Z" fill="#22c55e" />
  </svg>
);

const DiplomaIllustration = () => (
  <svg viewBox="0 0 220 160" className="w-full h-full">
    <g transform="rotate(-8 110 80)">
      <rect x="45" y="55" width="130" height="50" rx="10" fill="#e2e8f0" stroke="#94a3b8" />
      <ellipse cx="45" cy="80" rx="10" ry="25" fill="#cbd5e1" stroke="#94a3b8" />
      <ellipse cx="175" cy="80" rx="10" ry="25" fill="#cbd5e1" stroke="#94a3b8" />
      <rect x="90" y="68" width="14" height="26" fill="#22c55e" />
      <rect x="106" y="68" width="14" height="26" fill="#16a34a" />
      <path d="M90 94 L97 106 L104 94" fill="#16a34a" />
      <path d="M106 94 L113 106 L120 94" fill="#15803d" />
      <rect x="60" y="70" width="20" height="3" fill="#94a3b8" opacity="0.6" />
      <rect x="60" y="78" width="24" height="3" fill="#94a3b8" opacity="0.5" />
      <rect x="140" y="70" width="20" height="3" fill="#94a3b8" opacity="0.6" />
      <rect x="140" y="78" width="24" height="3" fill="#94a3b8" opacity="0.5" />
    </g>
  </svg>
);

// ---------------------------------------------------------------
// একটা একক টাইমলাইন আইটেম (মার্কার আইকন + কার্ড) — এখানেই স্ক্রল
// প্রোগ্রেস অনুযায়ী আইকনটা "সক্রিয়" হয়ে গ্লো করে ওঠে।
// আলাদা কম্পোনেন্ট হিসেবে রাখা হয়েছে যাতে প্রতিটা আইটেম নিজের
// useTransform হুকগুলো ঠিকভাবে চালাতে পারে (hooks rules মেনে)।
// ---------------------------------------------------------------
const TimelineItem = ({ item, index, total, frac, scrollYProgress, markerRef }) => {
  const segment = 1 / Math.max(1, total - 1);
  const influence = segment * 0.42; // মার্কারের চারপাশে কতটুকু জোন জুড়ে গ্লো ইফেক্ট কাজ করবে

  // arrow ঠিক এই আইকনের কতটা কাছে আছে, তার measure (0 = দূরে, 1 = ঠিক আইকনের উপর)
  const highlight = useTransform(
    scrollYProgress,
    [Math.max(0, frac - influence), frac, Math.min(1, frac + influence)],
    [0, 1, 0]
  );

  const markerBg = useTransform(highlight, [0, 1], ['rgba(15,23,42,0.9)', 'rgba(56,189,248,1)']);
  const markerBorderColor = useTransform(
    highlight,
    [0, 1],
    ['rgba(59,130,246,0.5)', 'rgba(224,242,254,0.9)']
  );
  const markerIconColor = useTransform(highlight, [0, 1], ['#60a5fa', '#050a15']);
  const markerScale = useTransform(highlight, [0, 1], [1, 1.16]);
  const markerShadow = useTransform(
    highlight,
    [0, 1],
    ['0 0 16px rgba(59,130,246,0.25)', '0 0 34px rgba(34,211,238,0.85)']
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="relative pl-10 md:pl-14 group"
    >
      {/* Timeline Node Icon — স্ক্রল করে arrow কাছে এলে এই আইকনটা জ্বলে ওঠে (glowing background) */}
      <motion.div
        ref={markerRef}
        style={{
          backgroundColor: markerBg,
          borderColor: markerBorderColor,
          color: markerIconColor,
          scale: markerScale,
          boxShadow: markerShadow,
        }}
        className="absolute -left-[26px] md:-left-[30px] top-6 w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg z-20"
      >
        {item.markerIcon}
      </motion.div>

      {/* Experience Premium Card — বাইরের পাতলা p-[1.5px] ফ্রেমটাই হোভার করলে ঘূর্ণায়মান গ্লোয়িং বর্ডার দেখাবে */}
      <div className="relative rounded-2xl p-[1.5px] overflow-hidden">
        <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_260deg,rgba(59,130,246,0.6)_300deg,#22d3ee_330deg,rgba(96,165,250,0.75)_345deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 p-6 lg:p-8 bg-[#050a15] bg-gradient-to-b from-white/[0.03] to-transparent border border-blue-500/15 group-hover:border-transparent rounded-2xl backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(56,189,248,0.15)] overflow-hidden h-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Left: text content */}
            <div className="flex-1 min-w-0">
              {/* Top row: number badge + category + date */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-9 h-7 rounded-md border border-white/15 text-sm font-bold text-white font-mono">
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 rounded-md">
                    {item.type}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  {item.duration}
                </div>
              </div>

              {/* Degree / Course Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2">
                <FiBookOpen className="w-4 h-4 text-blue-400 shrink-0" /> {item.title}
              </h3>

              {/* Institution Name and Location Meta */}
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-2 flex items-center gap-3 flex-wrap">
                <span className="text-slate-300 font-semibold">{item.institution}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
                <span className="flex items-center gap-1 text-slate-500 text-xs">
                  <FiMapPin className="w-3 h-3" /> {item.location}
                </span>
              </div>

              {/* Mobile Only Duration Badge */}
              <div className="sm:hidden inline-flex items-center gap-1.5 font-mono text-[11px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md w-fit mt-3">
                <FiCalendar className="w-3 h-3" /> {item.duration}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed my-4 font-light">
                {item.description}
              </p>

              {/* Key Skills / Focus Areas Footer */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {item.skills?.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5 px-2.5 py-1 rounded"
                  >
                    <span className="text-[11px] leading-none">
                      {skillIconMap[skill] || <FiCode className="text-blue-400" />}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: illustration (desktop only) */}
            <div className="hidden lg:block w-44 h-32 shrink-0 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
              <div className="relative w-full h-full drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                {item.illustration}
              </div>
            </div>
          </div>

          {/* Bottom Border Glow Trace */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

const LearningJourney = () => {
  // টাইমলাইন কন্টেইনারের সাথে সংযুক্ত ref — স্ক্রল প্রোগ্রেস বের করতে ব্যবহৃত
  const timelineRef = useRef(null);

  // আপনার স্কুল, কলেজ, ট্রেনিং এবং অনলাইন কোর্সের বাস্তব ডাটা স্ট্রাকচার
  const journey = [
    {
      id: 1,
      type: 'CURRENTLY LEARNING',
      title: 'Full-Stack Web Development',
      institution: 'Interactive Online Platform / Bootcamp',
      location: 'Remote (Self-Paced)',
      duration: '2024 — Present',
      description:
        'Extensively studying modern frontend and backend architectures. Building deep expertise in component lifecycle, responsive grid designs, secure state operations, and writing highly modular, clean and production ready code.',
      skills: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      markerIcon: <FaGraduationCap />,
      illustration: <LaptopIllustration />,
    },
    {
      id: 2,
      type: 'PROFESSIONAL TRAINING',
      title: 'Responsive Web Design & JavaScript Fundamentals',
      institution: 'Tech Academy / Training Center',
      location: 'Dhaka, Bangladesh',
      duration: '2023 — 2024',
      description:
        'Completed a structured training program focusing on semantic HTML5, advanced CSS layouts (Flexbox/Grid), asynchronous JavaScript (ES6+), and version control management with Git/GitHub.',
      skills: ['JavaScript (ES6+)', 'HTML5 & CSS3', 'Git / GitHub', 'Bootstrap'],
      markerIcon: <FiCode />,
      illustration: <BrowserIllustration />,
    },
    {
      id: 3,
      type: 'DIPLOMA IN ENGINEERING',
      title: 'Computer Science and Engineering',
      institution: 'Chapainawabganj Polytechnic Institute',
      location: 'Chapainawabganj, Rajshahi, Bangladesh',
      duration: '2019 — 2023',
      description:
        'Completed a Diploma in Computer Science and Engineering with a strong foundation in programming, computer systems, database concepts, and web technologies. Developed practical problem-solving, analytical, and teamwork skills through academic projects and technical activities.',
      skills: [
        'Programming',
        'Computer Fundamentals',
        'Web Development',
        'Database Management',
        'Problem Solving',
        'Team Collaboration',
      ],
      markerIcon: <FaUniversity />,
      illustration: <GraduationIllustration />,
    },
    {
      id: 4,
      type: 'SECONDARY SCHOOL EDUCATION',
      title: 'Secondary School Certificate (SSC)',
      institution: 'Verendi High School',
      location: 'Nachole, Chapainawabganj, Rajshahi, Bangladesh',
      duration: '2014 — 2018',
      description:
        'Completed SSC from Verendi High School, Nachole, Chapainawabganj. Built a strong academic foundation and developed basic computer, communication, teamwork, and time-management skills through academic and co-curricular activities.',
      skills: ['Basic Computing', 'Academic Certificate', 'Team Work'],
      markerIcon: <FiFileText />,
      illustration: <DiplomaIllustration />,
    },
  ];

  const total = journey.length;
  const segment = 1 / Math.max(1, total - 1);
  const influence = segment * 0.42;

  // প্রতিটা আইকনের আসল (real) পজিশন রাখার জন্য — শুরুতে সমান-দূরত্বের অনুমান দিয়ে শুরু,
  // পরে DOM মেপে আসল মান বসিয়ে দেওয়া হবে
  const [markerFracs, setMarkerFracs] = useState(() => journey.map((_, i) => i * segment));
  const markerElRefs = useRef([]);

  // কার্ডের height ভিন্ন ভিন্ন হওয়ায় আইকনগুলো সমান দূরত্বে থাকে না —
  // তাই assume না করে সত্যিকারের পজিশন মেপে নেওয়া হচ্ছে
  useLayoutEffect(() => {
    const measure = () => {
      const container = timelineRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      if (!containerHeight) return;

      const fracs = markerElRefs.current.map((el) => {
        if (!el) return null;
        const elRect = el.getBoundingClientRect();
        const centerY = elRect.top + elRect.height / 2;
        return (centerY - containerRect.top) / containerHeight;
      });

      if (fracs.every((f) => typeof f === 'number' && Number.isFinite(f))) {
        setMarkerFracs(fracs);
      }
    };

    measure();
    // ফন্ট লোড, রেসপন্সিভ রিসাইজ ইত্যাদির পরও যেন পজিশন ঠিক থাকে
    window.addEventListener('resize', measure);
    const timeout = setTimeout(measure, 300);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timeout);
    };
  }, [total]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  // স্মুথ ট্রেইলিং মুভমেন্টের জন্য স্প্রিং দিয়ে ভ্যালুটা নরম করা হয়েছে
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.5,
  });

  const arrowTop = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // arrow এর opacity/scale — প্রতিটা মার্কারের কাছাকাছি এলে ধীরে ধীরে মিলিয়ে
  // (fade out) আইকনের ভিতরে "ঢুকে" যাবে, তারপর পরের কার্ডের দিকে স্ক্রল করলে
  // আবার আইকনের ভিতর থেকে বেরিয়ে (fade in) এগিয়ে যাবে।
  const arrowOpacity = useTransform(smoothProgress, (p) => {
    let maxHighlight = 0;
    for (let i = 0; i < total; i++) {
      const frac = markerFracs[i] ?? i * segment;
      const h = Math.max(0, 1 - Math.abs(p - frac) / influence);
      if (h > maxHighlight) maxHighlight = h;
    }
    return 1 - maxHighlight;
  });
  const arrowScale = useTransform(arrowOpacity, [0, 1], [0.35, 1]);

  return (
    <section className="relative bg-[#050a15] text-white py-16 lg:py-20 overflow-hidden border-t border-white/5">
      {/* High-End Tech Mesh Overlay Base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Cinematic Ambient Glow Maps */}
      <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5"
          >
            <FiAward className="text-blue-400 w-3.5 h-3.5" />
            <span className="text-blue-400 font-mono text-[11px] tracking-[0.3em] uppercase">
              Education & Knowledge Roadmap
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.2]"
          >
            My Academic &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 underline decoration-blue-500/40 underline-offset-8">
              Learning Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm md:text-base mt-4 max-w-xl mx-auto"
          >
            From foundational education to full-stack development — continuously learning, building
            and evolving.
          </motion.p>
        </div>

        {/* Vertical Timeline Structure */}
        <div
          ref={timelineRef}
          className="relative border-l border-dashed border-blue-500/20 ml-6 md:ml-8 space-y-10"
        >
          {/* স্ক্রল-চালিত অ্যারো — প্রতিটা আইকনের কাছে এসে মিলিয়ে যাবে, পরের কার্ডের দিকে
              এগোতে থাকলে আবার আইকনের ভেতর থেকে বেরিয়ে আসবে */}
          <motion.div
            style={{ top: arrowTop, opacity: arrowOpacity, scale: arrowScale }}
            className="absolute left-0 -translate-x-1/2 -translate-y-1/2 z-30 w-15 h-15 flex items-center justify-center"
          >
            <motion.span
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center justify-center"
            >
              {/* এখানে আইকনের বদলে ইমেজ বসানো হলো — সাইজ w-4 h-4 বদলে নিজের মতো ছোট/বড় করে নাও */}
              <img
                src={arrowIcon}
                alt="scroll arrow"
                className="w-15 h-15 object-contain"
                draggable={false}
              />
            </motion.span>
          </motion.div>

          {journey.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              total={total}
              frac={markerFracs[index] ?? index * segment}
              scrollYProgress={smoothProgress}
              markerRef={(el) => (markerElRefs.current[index] = el)}
            />
          ))}
        </div>

        {/* Footer Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16 font-mono text-sm text-slate-400"
        >
          🚀 Keep Learning. Keep Building.{' '}
          <span className="text-blue-400 font-semibold">"Keep Growing."</span>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningJourney;
