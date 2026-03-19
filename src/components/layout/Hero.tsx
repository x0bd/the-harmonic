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
  const searchContainerRef = useRef<HTMLDivElement>(null);
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
      { opacity: 0, y: 40, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power4.out",
      },
    ).fromTo(
      searchContainerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8",
    );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col justify-center items-center p-8 rounded-b-[2rem] md:rounded-b-[4rem] shadow-2xl">
      {/* Animated Shader Background - Faster speed, richer Teenage Engineering colors */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-b-[inherit] overflow-hidden">
        <GrainGradient
          colorBack="#0f0f0f"
          colors={["#181818", "#ff6000", "#4a1c00", "#0a0a0a"]}
          shape="wave"
          softness={0.9}
          intensity={0.6}
          noise={0.75}
          speed={0.25}
          style={{ width: "100%", height: "100%", opacity: 0.9 }}
        />
      </div>

      {/* Fade out bottom so it blends with the page */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none opacity-100 rounded-b-[inherit]"></div>

      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center z-10 px-4 md:px-0 text-center mt-16">
        {/* Typography Section */}
        <div
          ref={textRef}
          className="w-full mb-12 pointer-events-none flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[0.65rem] font-sans font-bold text-foreground/80 mb-8 uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            Issue 042 / Vol IV
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white mb-6 drop-shadow-2xl tracking-tight">
            An archive of <br />
            <span className="text-accent italic font-light pr-2">
              sonic
            </span>{" "}
            decay.
          </h1>

          <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto font-medium">
            Documenting the structural remnants of experimental electronic
            music. Underground subcultures and the architecture of noise.
          </p>
        </div>

        {/* Search Interface */}
        <div
          ref={searchContainerRef}
          className="w-full max-w-2xl relative group pointer-events-auto z-50"
        >
          {/* Floating Pill Input */}
          <div
            className={`relative flex items-center backdrop-blur-2xl transition-all duration-300 ease-out border rounded-full ${
              isFocused
                ? "bg-card/90 border-accent/50 shadow-[0_0_40px_rgba(255,96,0,0.2)] scale-[1.02]"
                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 shadow-xl scale-100"
            }`}
          >
            <div
              className={`pl-6 transition-colors duration-300 ${isFocused ? "text-accent" : "text-foreground/40"}`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search artists, gear, essays..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full bg-transparent border-none outline-none text-foreground font-sans text-lg px-5 py-5 placeholder:text-foreground/40 font-medium"
            />

            <div className="pr-5 flex items-center gap-3">
              <span
                className={`font-sans text-xs font-bold px-2.5 py-1.5 rounded-md border transition-all duration-300 hidden sm:block ${
                  isFocused
                    ? "bg-accent/10 text-accent border-accent/20"
                    : "bg-black/20 text-foreground/40 border-white/5"
                }`}
              >
                ⌘K
              </span>
            </div>
          </div>

          {/* Detached Dropdown Panel (fixes border issues) */}
          <div
            className={`absolute top-[calc(100%+12px)] left-0 w-full bg-card/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 origin-top z-10 ${
              showDropdown
                ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
            }`}
          >
            <div className="p-3 max-h-[350px] overflow-y-auto">
              {results.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {results.map((result) => (
                    <a
                      key={result.id}
                      href={result.link}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex flex-col gap-1.5 text-left">
                        <span className="font-sans font-semibold text-foreground/90 group-hover:text-accent transition-colors">
                          {result.title}
                        </span>
                        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-foreground/40">
                          {result.date}
                        </span>
                      </div>
                      <span className="font-sans text-[0.65rem] font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {result.type}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="w-full py-12 flex flex-col items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground/30 mb-2">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <span className="text-foreground/50 font-sans text-sm font-medium">
                    No transmissions found
                  </span>
                  <span className="text-foreground/30 font-sans text-xs">
                    Try searching for "Boy Harsher" or "MS-20"
                  </span>
                </div>
              )}
            </div>

            {/* Dropdown Footer */}
            {results.length > 0 && (
              <div className="bg-black/20 border-t border-white/5 px-4 py-3 text-left">
                <span className="font-sans text-[0.65rem] uppercase tracking-wider text-foreground/40 font-bold">
                  Press Enter to see all results
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
