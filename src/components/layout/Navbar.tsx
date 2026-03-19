import React, { useState, useEffect } from "react";
import { MagnifyingGlass, User } from "@phosphor-icons/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = ["Essays", "Interviews", "Releases", "Artists", "Scenes"];

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
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-4 md:px-8 flex items-center justify-between text-foreground transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      {/* Brand */}
      <div className="flex-1 flex items-center">
        <a
          href="/"
          className="font-sans text-xl font-bold tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-4 h-4 bg-accent rounded-full"></div>
          The Harmonic
        </a>
      </div>

      {/* Primary Nav */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="flex gap-2 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="relative font-sans text-sm font-medium px-4 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Utilities */}
      <div className="flex-1 flex justify-end items-center">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-white transition-colors group">
            <MagnifyingGlass
              size={18}
              weight="bold"
              className="text-foreground group-hover:text-white transition-colors"
            />
          </button>
          <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
            <User
              size={18}
              weight="bold"
              className="text-foreground transition-colors"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
