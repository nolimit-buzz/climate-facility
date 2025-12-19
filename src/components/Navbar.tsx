import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Projects', href: '#projects' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'bg-brand-dark/80 backdrop-blur-xl py-4 border-b border-white/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src={scrolled ? "/logo-colored.svg" : "/logo.svg"}
            alt="Climate Finance Blending Facility"
            className={!scrolled ? "h-12 w-auto transition-all duration-300 group-hover:opacity-90" : "h-10 w-auto transition-all duration-300 group-hover:opacity-90"}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors relative group font-sans"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300">
            <Search size={18} />
          </button>
          <button className="px-5 py-2.5 bg-brand-accent text-brand-dark rounded-full font-semibold text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(72,192,163,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] font-sans">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-brand-dark z-40 flex flex-col pt-24 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                href={link.href}
                className="text-white text-3xl font-light py-4 border-b border-white/10 font-sans"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


