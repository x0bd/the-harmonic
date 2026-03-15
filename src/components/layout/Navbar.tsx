import React, { useState, useEffect } from 'react';
import { MagnifyingGlass, Headphones, List } from '@phosphor-icons/react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Essays', 'Interviews', 'Releases', 'Artists', 'Scenes'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between px-6 md:px-12 lg:px-16 ${
        scrolled
          ? 'py-4 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-8 bg-transparent border-b border-transparent'
      }`}
    >
      {/* Brand */}
      <div className="flex items-center gap-4">
        <a href="/" className="group flex flex-col text-white no-underline">
          <span className="font-serif text-xl md:text-2xl font-light tracking-[0.1em] uppercase transition-colors group-hover:text-[#e4e4e6]">
            The Harmonic
          </span>
          <span className="font-sans text-[0.55rem] md:text-[0.6rem] tracking-[0.4em] text-[#88888d] mt-1 transition-colors group-hover:text-[#7b61ff]">
            高調波
          </span>
        </a>
      </div>

      {/* Primary Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="relative font-sans text-[11px] uppercase tracking-[0.2em] text-[#88888d] hover:text-white transition-colors duration-400 py-2"
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link}
            <span
              className="absolute bottom-0 left-0 w-full h-[1px] bg-[#7b61ff] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: hoveredLink === link ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </a>
        ))}
      </nav>

      {/* Utility Navigation */}
      <div className="flex items-center gap-6 font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#88888d]">
        <button className="flex items-center gap-2 hover:text-white transition-colors group">
          <MagnifyingGlass size={16} weight="light" className="group-hover:text-[#7b61ff] transition-colors" />
          <span className="hidden md:inline">Search</span>
        </button>

        <button className="hidden md:flex items-center gap-2 text-[#7b61ff] hover:text-white transition-colors group px-3 py-1.5 border border-[#7b61ff]/30 hover:border-[#7b61ff] rounded-full bg-[#7b61ff]/5">
          <Headphones size={16} weight="light" />
          <span>Listening Mode</span>
        </button>

        <button className="lg:hidden flex items-center gap-2 hover:text-white transition-colors">
          <List size={20} weight="light" />
        </button>
      </div>
    </header>
  );
};
