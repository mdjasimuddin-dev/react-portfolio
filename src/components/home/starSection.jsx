import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Inline SVG Icons
const SmileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-400"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-400"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const ClockIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-400"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const TrophyIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-400"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
  </svg>
);

// কাউন্টার কম্পোনেন্ট (স্টেট বেইজড যাতে নিশ্চিতভাবে জিরো থেকে কাউন্ট হয়)
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 2000; // ২ সেকেন্ডে কাউন্ট শেষ হবে

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // ইজ-আউট ইফেক্ট (ধীরে ধীরে শেষ হওয়া)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (percentage < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

export const StatsSection = () => {
  const statsData = [
    {
      id: 1,
      icon: <SmileIcon />,
      count: 89,
      suffix: '+',
      label: 'Happy Clients',
    },
    {
      id: 2,
      icon: <BriefcaseIcon />,
      count: 250,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      id: 3,
      icon: <ClockIcon />,
      count: 3,
      suffix: '+',
      label: 'Years Experience',
    },
    {
      id: 4,
      icon: <TrophyIcon />,
      count: 100,
      suffix: '%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section className="bg-[#000000] py-20 px-6 lg:px-20 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট ব্লার */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* মেইন আউটার র‍্যাপার (স্থায়ী উজ্জ্বল গ্লোয়িং বর্ডার সহ, কোনো মুভিং অ্যানিমেশন নেই) */}
        <div className="relative rounded-[32px] p-[2px] bg-gradient-to-r from-blue-500/40 via-cyan-400/50  hover:via-cyan-400 to-blue-600/40  shrink-0 shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:border-cyan-600 hover:shadow-[0_0_90px_rgba(56,189,248,0.3)] transition-all duration-300 hover:-translate-y-1.5">
          {/* কার্ডের ভেতরের মূল ডার্ক কন্টেইনার */}
          <div className="relative group bg-[#070e1b]/95 backdrop-blur-2xl rounded-[30px] p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-blue-500/10 items-center">
            {statsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group/item flex items-center gap-5 pt-6 lg:pt-0 lg:px-6 first:lg:pl-0 last:lg:pr-0 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* গ্লোয়িং আইকন কন্টেইনার */}
                <div className="relative w-16 h-16 rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-500/25 via-blue-500/5 to-transparent flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300">
                  {item.icon}
                </div>

                {/* সংখ্যা এবং লেবেল */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-blue-200 tracking-tight flex items-center">
                    <Counter target={item.count} />
                    <span className="text-blue-400 ml-0.5">{item.suffix}</span>
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base font-medium mt-1 group-hover/item:text-gray-200 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
