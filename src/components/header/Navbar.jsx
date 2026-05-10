import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // আপনার ফাইল স্ট্রাকচার অনুযায়ী মেনু আইটেম
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#what-you-offer' },
    { name: 'Proof', href: '#success-stories' },
    { name: 'The Blueprint', href: '#how-i-work' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? 'bg-[#0A192F]/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl' 
        : 'bg-[#0A192F] py-5' // ডিফল্ট ডার্ক ব্লু ব্যাকগ্রাউন্ড
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo - MJU prefix added as per your style */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black tracking-tight text-white">
              MJU<span className="text-[#FF8C00]">.DEV</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-[#FF8C00] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Sales-focused CTA Button (Orange) */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#FFA500" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF8C00] text-[#0A192F] px-8 py-3 rounded-full font-black flex items-center gap-2 shadow-[0_10px_20px_rgba(255,140,0,0.2)] transition-all"
            >
              FREE AUDIT <Zap size={16} fill="currentColor" />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#FF8C00] p-2 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dark Blue Background) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A192F] border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-white hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#FF8C00] text-[#0A192F] py-4 rounded-2xl font-black text-xl shadow-lg">
                FREE AUDIT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;