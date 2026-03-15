import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NeuroNoise } from "@paper-design/shaders-react";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
    ).fromTo(
      searchRef.current,
      {
        opacity: 0,
        scale: 0.98,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative h-screen w-full bg-[#030303] overflow-hidden flex flex-col justify-center items-center p-8 border-b border-white/5 cursor-crosshair">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <NeuroNoise
          colorFront="#7b61ff"
          colorMid="#111111"
          colorBack="#030303"
          brightness={0.8}
          speed={0.2}
        />
      </div>

      {/* Center - Minimalist Statement */}
      <div className="relative w-full max-w-3xl flex flex-col items-start justify-center z-10">
        <div
          ref={textRef}
          className="w-full mb-16 pointer-events-none drop-shadow-lg"
        >
          <h1 className="font-mono text-2xl md:text-3xl font-normal leading-snug text-[#E4E4E6] tracking-tight mb-4">
            An archive of sonic decay.
          </h1>
          <p className="font-mono text-xs md:text-sm text-[#88888D] tracking-wide leading-relaxed max-w-xl">
            Documenting the structural remnants of experimental electronic
            music. Brutalism, underground subcultures, and the architecture of
            noise.
          </p>
        </div>

        {/* Minimal Search Interface */}
        <div
          ref={searchRef}
          className="w-full relative group pointer-events-auto"
        >
          <div className="flex items-center bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/10 transition-colors duration-300 hover:border-white/30 focus-within:border-white/50 focus-within:bg-[#0d0d12]/90">
            <input
              type="text"
              placeholder="Search index..."
              className="w-full bg-transparent border-none outline-none text-[#E4E4E6] font-mono text-sm px-6 py-5 placeholder:text-[#4a4d58] transition-colors"
            />
            <div className="pr-6 flex items-center gap-2">
              <span className="font-mono text-[9px] text-[#4a4d58] tracking-widest uppercase">
                CTRL+K
              </span>
              <button
                className="w-6 h-6 flex items-center justify-center border border-white/10 hover:border-white/40 hover:text-white text-[#88888D] transition-colors rounded-sm"
                aria-label="Submit Search"
              >
                <svg
                  width="10"
                  height="10"
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
        </div>
      </div>
    </header>
  );
};
