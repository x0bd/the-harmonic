import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple entry animation
    const tl = gsap.timeline();

    tl.fromTo(textRef.current, {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: "power3.out"
    })
    .fromTo(searchRef.current, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header className="relative h-screen w-full bg-[#030303] overflow-hidden flex flex-col justify-between p-8 md:p-12 border-b border-[#ffffff1a] cursor-crosshair">

      {/* Grid Background overlay for tech feel. Center remains empty for future shader. */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50 z-0"></div>

      {/* Top Bar - Pushed to edges */}
      <div className="relative z-10 w-full flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-[#88888D] tracking-[0.3em] uppercase">SYS.OP</span>
          <span className="font-sans text-sm font-bold tracking-widest text-white">THE HARMONIC</span>
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span className="font-mono text-[10px] text-[#88888D] tracking-[0.3em] uppercase">STATUS</span>
          <span className="font-mono text-[10px] text-[#7b61ff] tracking-[0.2em] font-bold animate-pulse">ONLINE</span>
        </div>
      </div>

      {/* Center - Magazine Manifesto & Shader Space */}
      <div className="flex-grow relative w-full flex flex-col items-center justify-center z-10 pointer-events-none">

        {/* Abstract Shader Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="font-mono text-xs tracking-[0.5em]">[ SHADER_CANVAS_RESERVED ]</div>
        </div>

        <div ref={textRef} className="text-center max-w-4xl px-4 mix-blend-screen drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-auto">
          <h1 className="font-sans text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.9] text-white tracking-tighter uppercase mb-6">
            An Archive of<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4a4d58]">Sonic Decay</span>
          </h1>
          <p className="font-sans font-light text-[#88888D] text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto leading-relaxed">
            Documenting the deeper structures of sound. Exploring experimental electronic music, brutalist aesthetics, and the underground scenes that shape modern sonic culture.
          </p>
        </div>

      </div>

      {/* Bottom Bar - Search Interface */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end pb-8">
        <div ref={searchRef} className="w-full max-w-2xl relative group">
          <div className="absolute inset-0 bg-[#7b61ff] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
          <div className="relative flex items-center border border-[#ffffff33] bg-black/40 backdrop-blur-md transition-colors duration-300 group-hover:border-[#7b61ff]/50">
            <span className="pl-6 text-[#7b61ff] font-mono text-sm">{'>'}</span>
            <input
              type="text"
              placeholder="SEARCH DATABASE (ARTISTS, RELEASES, SCENES)..."
              className="w-full bg-transparent border-none outline-none text-white font-mono text-xs tracking-widest px-4 py-6 placeholder:text-[#4a4d58] placeholder:transition-colors focus:placeholder:text-[#88888D]"
            />
            <div className="pr-6 font-mono text-[10px] text-[#4a4d58] tracking-widest uppercase hidden md:block">
              INDEX: [0-999]
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
