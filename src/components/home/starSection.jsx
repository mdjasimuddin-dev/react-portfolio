import { FaBriefcase, FaClock, FaSmile, FaTrophy } from "react-icons/fa";

export const StatsSection = () => {
  const statsData = [
    {
      id: 1,
      icon: <FaSmile size={24} className="text-blue-500" />,
      count: "89+",
      label: "Happy Clients",
    },
    {
      id: 2,
      icon: <FaBriefcase size={22} className="text-blue-500" />,
      count: "250+",
      label: "Projects Completed",
    },
    {
      id: 3,
      icon: <FaClock size={22} className="text-blue-500" />,
      count: "3+",
      label: "Years Experience",
    },
    {
      id: 4,
      icon: <FaTrophy size={22} className="text-blue-500" />,
      count: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-[#000000] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* মূল কার্ড যার ভেতর সব আইটেম থাকবে */}
        <div className="bg-[#0b1323] border border-blue-500/20 rounded-2xl p-8 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-800/80 items-center">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 pt-6 lg:pt-0 lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              {/* গোল নীল বর্ডারযুক্ত আইকন কন্টেইনার */}
              <div className="w-16 h-16 rounded-full border border-blue-500/40 bg-blue-500/10 flex items-center justify-center shrink-0 shadow-inner">
                {item.icon}
              </div>

              {/* সংখ্যা এবং লেবেল */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {item.count}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base font-medium mt-0.5">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
