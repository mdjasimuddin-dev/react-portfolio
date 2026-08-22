import {
  FaArrowRight,
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
} from "react-icons/fa";
import myPic from "../../assets/jasim.png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#000000] text-white top-20 flex items-center overflow-hidden px-6 lg:px-20 py-16">
      {/* ব্যাকগ্রাউন্ড গ্লো এবং ডিজাইন ইফেক্ট */}
      <div className="absolute top-1/4 right-5 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* বাম পাশের টেক্সট, ইন্ট্রো এবং বাটনসমূহ */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block">
            <span className="text-blue-500 font-medium text-lg tracking-wide bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
              Hello, I'm
            </span>
          </div>

          <h1 className="text-6xl sm:text-6xl font-bold tracking-tight text-gray-100 leading-tight">
            Md <span className="text-blue-500">Jasim Uddin</span>
          </h1>

          <div className="text-xl sm:text-2xl font-semibold text-gray-300 flex items-center gap-2 flex-wrap">
            <span className="text-white">MERN Stact Developer</span>
            <span className="text-blue-500">&</span>
            <span className="text-gray-300">Wordpress Expart</span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I’m a Full-Stack Web Developer specializing in MERN Stack,
            WordPress, and Shopify. I build modern, responsive, and
            high-performing websites and web applications that help businesses
            grow online.
          </p>

          {/* কল-টু-অ্যাকশন বাটন */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              View My Work <FaArrowRight className="text-sm" />
            </a>

            <a
              href="#cv"
              className="border border-gray-700 hover:border-blue-500 bg-gray-900/40 hover:bg-blue-500/10 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
            >
              Download CV <FaDownload className="text-sm text-blue-500" />
            </a>
          </div>

          {/* সোশ্যাল মিডিয়া লিংকস */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              className="w-11 h-11 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-300"
            >
              <FaGlobe size={16} />
            </a>
          </div>
        </div>

        {/* ডান পাশের ইমেজ এবং গ্রাফিক্স ডিজাইন */}
        <div className="lg:col-span-5 flex justify-end bottom-0 relative">
          <div className="relative w-full sm:h-[450px] flex items-center justify-center">
            {/* আপনার ছবির অংশ */}
            <img
              src={myPic}
              alt="Md Jasim Uddin"
              className="relative z-10 w-full h-full object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
