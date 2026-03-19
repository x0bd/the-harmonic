import React, { useState, useEffect } from "react";
import { MagnifyingGlass, User } from "@phosphor-icons/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = ["Essays", "Interviews", "Releases", "Hardware", "Archive"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center p-2 rounded-[2rem] border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
      } ${
        isScrolled
          ? "top-6 bg-[#0a0a0c]/85 backdrop-blur-2xl w-[95%] md:w-auto scale-100"
          : "top-8 bg-[#0a0a0c]/60 backdrop-blur-xl w-[95%] md:w-[85%] lg:w-[1200px] scale-[1.01]"
      }`}
    >
      {/* Brand */}
      <a
        href="/"
        className="flex items-center gap-3 pl-4 md:pl-6 pr-4 py-2 group mr-auto md:mr-0"
      >
        <div className="relative flex items-center justify-center w-4 h-4">
          <div className="absolute inset-0 bg-accent rounded-sm opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
          <div className="w-2.5 h-2.5 bg-accent rounded-sm shadow-[0_0_12px_#ff6000] rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500"></div>
        </div>
        <span className="font-serif text-2xl text-white tracking-tight leading-none mt-1 group-hover:text-accent transition-colors duration-300 hidden sm:block">
          Harmonic
        </span>
        <span className="font-mono text-[9px] text-foreground/40 uppercase tracking-[0.3em] font-bold ml-2 hidden lg:block translate-y-0.5">
          [SYS.OP]
        </span>
      </a>

      {/* Recessed Hardware Track for Links */}
      <div className="hidden md:flex items-center gap-1 bg-[#030303] rounded-full p-1.5 border border-white/[0.04] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] mx-4 lg:mx-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="relative px-5 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 hover:text-white hover:bg-white/10 hover:shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-300 group/link"
          >
            {link}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#ff6000]"></div>
          </a>
        ))}
      </div>

      {/* Utilities */}
      <div className="flex items-center gap-2 pr-2">
        <div className="hidden md:block w-[1px] h-6 bg-white/10 mr-2"></div>

        {/* Terminal Sync Status */}
        <div className="hidden lg:flex flex-col items-end mr-4">
          <span className="font-mono text-[8px] text-accent uppercase tracking-[0.3em] font-bold">
            Sync
          </span>
          <span className="font-mono text-[8px] text-foreground/40 uppercase tracking-[0.2em]">
            Active
          </span>
        </div>

        <button className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] group/btn">
          <MagnifyingGlass
            size={18}
            weight="bold"
            className="group-hover/btn:scale-110 transition-transform duration-300"
          />
        </button>
        <button className="hidden md:flex w-10 h-10 rounded-full bg-[#111] border border-white/5 items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] group/btn">
          <User
            size={18}
            weight="bold"
            className="group-hover/btn:scale-110 transition-transform duration-300"
          />
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};
