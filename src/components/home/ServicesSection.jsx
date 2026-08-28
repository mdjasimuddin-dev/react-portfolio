import { motion } from 'framer-motion';

// Inline SVG Icons to ensure zero missing dependency errors
const FiLayoutIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const WordpressIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    <path d="M2.19 10.5h19.62"></path>
  </svg>
);

const FiServerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const FiSmartphoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description:
        'Building responsive, high-performance, and visually stunning web applications using React, Next.js, and Tailwind CSS.',
      icon: <FiLayoutIcon />,
      iconBg: 'bg-cyan-500/10 text-cyan-400',
    },
    {
      id: 2,
      title: 'Wordpress Expert',
      description:
        'Ensuring seamless cross-browser compatibility and ultra-fast mobile performance with a mobile-first design approach for wordpress website using elementor expart.',
      icon: <WordpressIcon />,
      iconBg: 'bg-indigo-500/10 text-indigo-400',
    },
    {
      id: 3,
      title: 'Backend & APIs',
      description:
        'Developing robust server-side logic, secure RESTful APIs, and database architectures using Node.js and Express.',
      icon: <FiServerIcon />,
      iconBg: 'bg-blue-500/10 text-blue-400',
    },
    {
      id: 4,
      title: 'Mobile Optimization',
      description:
        'Ensuring seamless cross-browser compatibility and ultra-fast mobile performance with a mobile-first design approach.',
      icon: <FiSmartphoneIcon />,
      iconBg: 'bg-indigo-500/10 text-indigo-400',
    },
  ];

  return (
    <section className="relative bg-[#030712] py-16 px-6 md:px-12 overflow-hidden">
      {/* CSS স্টাইল রোটেশন এবং ধূমকেতু ইফেক্টের জন্য */}
      <style>{`
        @keyframes rotateComet {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-comet-border {
          animation: rotateComet 3.5s linear infinite;
        }
      `}</style>

      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট ব্লার */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* সেকশন হেডার */}
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-blue-500 tracking-wider uppercase mb-3">
            What I Do
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Core Expertise & Services
          </p>
          <div className="w-12 h-1 bg-gradient-to-r md:mx-auto from-blue-500 to-blue-800 mt-4 rounded-full" />
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl p-[3px] overflow-hidden bg-blue-500/20 transition-all duration-300 shadow-[0_0_90px_rgba(56,189,248,0.2)] border-cyan-600 hover:-translate-y-2 hover:shadow-[0_0_90px_rgba(56,189,248,0.2)]"
              >
                {/* ধূমকেতুর মতো রোটেশন অ্যানিমেশন (শর্ত: শুধুমাত্র হোভার করলে opacity-100 হবে) */}
                <div className="absolute -inset-[150%] animate-comet-border bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_220deg,rgba(56,189,248,0.2)_290deg,rgba(96,165,250,0.6)_330deg,#38bdf8_360deg)] opacity-0  hover:border-cyan-400 group-hover:opacity-100 transition-opacity duration-300" />

                {/* কার্ডের ভেতরের মূল কন্টেইনার */}
                <div className="relative h-full group flex flex-col justify-between p-8 rounded-[15px] bg-[#0b1329]/95 backdrop-blur-xl">
                  <div className="py-2">
                    {/* আইকন বক্স */}
                    <div
                      className={`relative w-16 h-16 rounded-2xl border border-blue-500/40 group-hover:border-cyan-400 from-blue-500/25 via-blue-500/5 to-transparent flex items-center justify-center shrink-0  group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300 ${service.iconBg}`}
                    >
                      {service.icon}
                    </div>

                    {/* টাইটেল */}
                    <h3 className="text-xl mt-3 font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* বিবরণ */}
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* নিচের লিংক/ডেকোরেশন */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
                    LEARN MORE{' '}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
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
