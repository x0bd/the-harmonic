import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GrainGradient } from "@paper-design/shaders-react";

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
];

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results =
    query.trim().length > 0
      ? searchIndex.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.type.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  const showDropdown = isFocused && query.trim().length > 0;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    ).fromTo(
      searchRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6",
    );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative h-[90vh] w-full bg-background overflow-hidden flex flex-col justify-center items-center p-8 rounded-b-3xl md:rounded-b-[3rem] shadow-xl">
      {/* Shader Background using TE Orange / dark tones */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-b-[inherit] overflow-hidden">
        <GrainGradient
          colorBack="#0f0f0f"
          colors={["#1a1a1a", "#ff6000", "#331300", "#0f0f0f"]}
          shape="wave"
          softness={0.8}
          intensity={0.5}
          noise={0.7}
          speed={0.1}
          style={{ width: "100%", height: "100%", opacity: 0.8 }}
        />
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none opacity-90 rounded-b-[inherit]"></div>

      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center z-10 px-4 md:px-0 text-center mt-12">
        <div ref={textRef} className="w-full mb-12 pointer-events-none">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-sans font-medium text-foreground/80 mb-6 uppercase tracking-widest backdrop-blur-md">
            Issue 042 / Vol IV
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-6 drop-shadow-lg">
            An archive of <span className="text-accent italic">sonic</span>{" "}
            decay.
          </h1>
          <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Documenting the structural remnants of experimental electronic
            music. Underground subcultures and the architecture of noise.
          </p>
        </div>

        {/* Search Interface */}
        <div
          ref={searchRef}
          className="w-full max-w-xl relative group pointer-events-auto z-50"
        >
          <div
            className={`relative flex items-center backdrop-blur-xl border transition-all duration-300 ${
              isFocused || query.length > 0
                ? "bg-card/90 border-accent/60 shadow-[0_0_30px_rgba(255,96,0,0.15)] rounded-3xl rounded-b-none"
                : "bg-card/50 border-white/10 hover:border-white/20 rounded-full shadow-lg"
            }`}
          >
            <div className="pl-6 text-foreground/50">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search artists, essays, gear..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full bg-transparent border-none outline-none text-foreground font-sans text-base px-4 py-5 placeholder:text-foreground/40"
            />
            <div className="pr-4 flex items-center gap-3">
              <span
                className={`font-sans text-xs font-semibold px-2 py-1 rounded bg-white/5 border border-white/10 transition-colors hidden sm:block ${isFocused ? "text-accent border-accent/30" : "text-foreground/40"}`}
              >
                ⌘K
              </span>
            </div>
          </div>

          <div
            className={`absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-x border-b border-accent/40 rounded-b-3xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-10 ${
              showDropdown
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            <div className="p-2 max-h-[300px] overflow-y-auto">
              {results.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {results.map((result) => (
                    <a
                      key={result.id}
                      href={result.link}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors"
                    >
                      <div className="flex flex-col gap-1 text-left">
                        <span className="font-sans font-medium text-foreground group-hover:text-accent transition-colors">
                          {result.title}
                        </span>
                        <span className="font-sans text-xs text-foreground/50">
                          {result.date}
                        </span>
                      </div>
                      <span className="font-sans text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase">
                        {result.type}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="w-full py-8 flex items-center justify-center text-foreground/50 font-sans text-sm">
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
