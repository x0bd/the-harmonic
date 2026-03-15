import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GrainGradient } from "@paper-design/shaders-react";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      },
    ).fromTo(
      searchRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
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
          speed={2.0}
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

        {/* Minimal Search Interface */}
        <div
          ref={searchRef}
          className="w-full relative group pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center bg-[#050505]/70 backdrop-blur-md border border-white/10 transition-all duration-400 hover:border-white/30 focus-within:border-[#7b61ff]/60 focus-within:bg-[#0a0a0a]/90 focus-within:shadow-[0_0_30px_rgba(123,97,255,0.15)]">
            <input
              type="text"
              placeholder="Search index..."
              className="w-full bg-transparent border-none outline-none text-[#ffffff] font-mono text-sm px-6 py-5 placeholder:text-[#88888D] transition-colors"
            />
            <div className="pr-6 flex items-center gap-4">
              <span className="font-mono text-[9px] text-[#88888D] tracking-widest uppercase hidden sm:block">
                CTRL+K
              </span>
              <button
                className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-[#7b61ff] hover:text-[#7b61ff] text-[#88888D] transition-colors rounded-sm bg-black/20"
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
        </div>
      </div>
    </header>
  );
};
