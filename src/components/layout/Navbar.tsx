import React, { useState, useEffect } from "react";
import { MagnifyingGlass, Headphones } from "@phosphor-icons/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = ["Essays", "Interviews", "Releases", "Artists", "Scenes"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold for background change
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine scroll direction for hide/reveal
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past top -> Hide
        setIsVisible(false);
      } else {
        // Scrolling up -> Show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-8 flex items-start justify-between text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#030303]/80 backdrop-blur-xl border-b border-white/10 py-4 md:py-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent mix-blend-difference"
      }`}
    >
      {/* Brand / System ID - Left */}
      <div className="flex-1 flex flex-col gap-1.5 pointer-events-auto group">
        <a
          href="/"
          className="font-sans text-lg md:text-xl font-black tracking-widest uppercase flex items-center gap-3 relative overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            The Harmonic
          </span>
          {/* Hover reveal block */}
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#7b61ff] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </a>
        <span
          className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? "text-[#88888D]" : "text-white/60"}`}
        >
          Vol. IV — Issue 042
        </span>
      </div>

      {/* Primary Nav - Center */}
      <div className="hidden lg:flex flex-1 justify-center items-center pointer-events-auto">
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className={`relative font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 py-2 group flex flex-col items-center ${isScrolled ? "text-[#88888d] hover:text-white" : "text-white/80 hover:text-white"}`}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span>{link}</span>

              {/* Animated dot indicator instead of full underline for a sharper look */}
              <span
                className={`absolute -bottom-1 w-1 h-1 bg-[#7b61ff] rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  hoveredLink === link
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Utilities - Right */}
      <div className="flex-1 flex justify-end items-center pointer-events-auto">
        <div
          className={`flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-[#88888d]" : "text-white/80"}`}
        >
          <button className="flex items-center gap-3 hover:text-white transition-colors group">
            <span className="hidden md:inline relative overflow-hidden">
              Search
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            <MagnifyingGlass
              size={16}
              weight="bold"
              className="text-white group-hover:text-[#7b61ff] group-hover:scale-110 transition-all duration-300"
            />
          </button>

          <div className="w-[1px] h-3 bg-white/20 hidden md:block"></div>

          <button className="hidden md:flex items-center gap-3 hover:text-white transition-colors group">
            <span className="relative overflow-hidden">
              Listen
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            <Headphones
              size={16}
              weight="bold"
              className="text-[#7b61ff] group-hover:text-white group-hover:scale-110 transition-all duration-300"
            />
          </button>

          <button className="lg:hidden text-[#88888d] hover:text-white transition-colors flex items-center gap-2 group">
            <span className="w-4 h-[1px] bg-current group-hover:bg-white relative before:absolute before:w-4 before:h-[1px] before:bg-current before:-top-1.5 before:group-hover:bg-white after:absolute after:w-4 after:h-[1px] after:bg-current after:top-1.5 after:group-hover:bg-white transition-all"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
