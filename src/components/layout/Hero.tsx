import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GrainGradient } from "@paper-design/shaders-react";

// Mock Database for Search
const searchIndex = [
  {
    id: "001",
    type: "ESSAY",
    title: "The Architecture of Brutalism",
    link: "/essays/architecture-of-brutalism",
    date: "2024.10.12",
  },
  {
    id: "002",
    type: "PROFILE",
    title: "Boy Harsher: Weaponized Synthesis",
    link: "#",
    date: "2024.11.05",
  },
  {
    id: "003",
    type: "HARDWARE",
    title: "Korg MS-20: The Screaming Filter",
    link: "#",
    date: "2024.08.15",
  },
  {
    id: "004",
    type: "SCENE",
    title: "Tresor: The Vault",
    link: "#",
    date: "2024.07.03",
  },
];

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Compute results synchronously for immediate, snappy feedback
  const results =
    query.trim().length > 0
      ? searchIndex.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  const showDropdown = isFocused && query.trim().length > 0;

  // Initial Hero Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
    ).fromTo(
      searchRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative h-screen w-full bg-[#030303] overflow-hidden flex flex-col justify-center items-center p-8 border-b border-white/5 cursor-crosshair">
      {/* Shader Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GrainGradient
          colorBack="#000000"
          colors={["#0a0a0c", "#1a1a24", "#7b61ff", "#2b1a4a"]}
          shape="wave"
          softness={0.7}
          intensity={0.6}
          noise={0.6}
          speed={0}
          animate={false}
          style={{ width: "100%", height: "100%", opacity: 0.8 }}
        />
      </div>

      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none opacity-90"></div>
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-[#030303] via-transparent to-transparent pointer-events-none opacity-50"></div>

      {/* Center - Minimalist Statement */}
      <div className="relative w-full max-w-3xl flex flex-col items-start justify-center z-10 px-4 md:px-0">
        <div
          ref={textRef}
          className="w-full mb-16 pointer-events-none"
          style={{ textShadow: "0px 4px 24px rgba(0,0,0,0.8)" }}
        >
          <h1 className="font-mono text-3xl md:text-5xl font-normal leading-tight text-[#ffffff] tracking-tight mb-6">
            An archive of sonic decay.
          </h1>
          <p className="font-mono text-sm md:text-base text-[#e4e4e6] tracking-wide leading-relaxed max-w-xl opacity-90">
            Documenting the structural remnants of experimental electronic
            music. Brutalism, underground subcultures, and the architecture of
            noise.
          </p>
        </div>

        {/* Snappy Search Interface */}
        <div
          ref={searchRef}
          className="w-full relative group pointer-events-auto z-50"
        >
          {/* Input Bar */}
          <div
            className={`relative flex items-center backdrop-blur-md border transition-colors duration-200 z-20 ${
              isFocused || query.length > 0
                ? "bg-[#0a0a0a]/95 border-[#7b61ff]/60 shadow-[0_0_40px_rgba(123,97,255,0.1)] rounded-t-md"
                : "bg-[#050505]/70 border-white/10 hover:border-white/30 rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            }`}
          >
            <input
              type="text"
              placeholder="Search index..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full bg-transparent border-none outline-none text-[#ffffff] font-mono text-sm px-6 py-5 placeholder:text-[#88888D]"
            />

            <div className="pr-6 flex items-center gap-4">
              <span
                className={`font-mono text-[9px] tracking-widest uppercase transition-colors hidden sm:block ${isFocused ? "text-[#7b61ff]" : "text-[#88888D]"}`}
              >
                CTRL+K
              </span>
              <button
                className={`w-8 h-8 flex items-center justify-center border transition-colors rounded-sm ${
                  isFocused || query.length > 0
                    ? "border-[#7b61ff] text-[#7b61ff] bg-[#7b61ff]/10"
                    : "border-white/10 hover:border-[#7b61ff] hover:text-[#7b61ff] text-[#88888D] bg-black/20"
                }`}
                aria-label="Submit Search"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Instant CSS Dropdown (No dramatic GSAP delay) */}
          <div
            className={`absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-x border-b border-[#7b61ff]/40 rounded-b-md shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-200 origin-top z-10 ${
              showDropdown
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            <div className="p-4 max-h-[300px] overflow-y-auto custom-scrollbar">
              {results.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {results.map((result) => (
                    <a
                      key={result.id}
                      href={result.link}
                      className="group flex flex-col md:flex-row md:items-center justify-between p-3 hover:bg-white/5 transition-colors duration-150"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-medium text-white group-hover:text-[#7b61ff] transition-colors">
                          {result.title}
                        </span>
                        <span className="font-mono text-[10px] text-[#88888D]">
                          {result.date}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-[#88888D] border border-white/10 px-2 py-1 mt-2 md:mt-0 self-start md:self-auto uppercase">
                        {result.type}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="w-full py-8 flex items-center justify-center text-[#88888D] font-mono text-xs uppercase tracking-widest">
                  No results found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
