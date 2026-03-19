import React, { useState, useEffect, useRef } from "react";

export const WaveformSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0);
  const requestRef = useRef<number>(0);

  const animate = () => {
    setTime((prevTime) => prevTime + 0.05);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying]);

  const generatePath = (isGlow: boolean) => {
    let path = "M0,50 ";
    const segments = 40;
    const width = 1000;
    const segmentWidth = width / segments;

    const effectiveTime = isGlow ? time - 0.4 : time;

    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;

      let yOffset = Math.sin(effectiveTime * 1.5 + i * 0.3) * 12;
      yOffset += Math.cos(effectiveTime * 2.2 + i * 0.8) * 8;

      if (i % 2 === 0) yOffset += Math.sin(effectiveTime * 4) * 10;
      if (i % 5 === 0) yOffset -= Math.cos(effectiveTime * 5) * 15;

      if (i < 4 || i > segments - 4) yOffset *= 0.1;

      if (isGlow) {
        yOffset *= 1.4;
      }

      const y = 50 + yOffset;
      const prevX = (i - 1) * segmentWidth;
      const cpX = prevX + segmentWidth / 2;

      path += `S ${cpX},${y} ${x},${y} `;
    }
    return path;
  };

  return (
    <footer className="relative w-full z-20 px-4 md:px-8 pb-8 mt-16 group/footer">
      {/* Decorative Top Connection */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-[1px] h-16 bg-gradient-to-t from-accent to-transparent opacity-50"></div>

      <div className="w-full max-w-[1600px] mx-auto bg-[#0a0a0c] rounded-[2rem] overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative border border-white/[0.08] transition-colors duration-700 hover:border-accent/30">
        {/* Subtle Inner Hardware Glow */}
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none z-30"></div>

        {/* Top Section: Info & Waveform */}
        <div className="flex flex-col lg:flex-row relative z-10">
          {/* Brand & Mini Directory */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between gap-12 bg-card relative overflow-hidden">
            {/* Dynamic Accent Glow */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-5 pointer-events-none group-hover/footer:opacity-10 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-accent rounded-sm shadow-[0_0_12px_#ff6000] rotate-45"></div>
                <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-none">
                  The Harmonic
                </h2>
              </div>
              <p className="font-sans text-[0.95rem] text-foreground/50 font-medium leading-relaxed max-w-[280px]">
                An archive of sonic decay. Documenting the architecture of
                experimental noise.
              </p>
            </div>

            <div className="flex gap-16 relative z-10">
              <div className="flex flex-col gap-4">
                <h4 className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.25em] font-bold flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  Directory
                </h4>
                <div className="flex flex-col gap-2">
                  {["Essays", "Interviews", "Releases"].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="font-sans text-sm font-semibold text-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300 w-fit"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.25em] font-bold flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  Systems
                </h4>
                <div className="flex flex-col gap-2">
                  {["Hardware", "Archive"].map((link) => (
                    <a
                      key={link}
                      href={`/${link.toLowerCase()}`}
                      className="font-sans text-sm font-semibold text-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300 w-fit"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Oscilloscope Mini-Panel */}
          <div className="w-full lg:w-2/3 bg-[#030303] relative flex flex-col justify-center p-8 md:p-12 shadow-[inset_30px_0_60px_rgba(0,0,0,0.5)] lg:shadow-[inset_60px_0_60px_rgba(0,0,0,0.5)]">
            {/* Technical Screen Details */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none mix-blend-overlay"></div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10"></div>

            <div className="w-full flex justify-between items-center mb-8 relative z-20">
              <div className="flex items-center gap-4">
                {/* Premium Tactile Button */}
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative group/btn ${
                    isPlaying
                      ? "bg-accent border border-accent shadow-[0_0_20px_rgba(255,96,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] text-black"
                      : "bg-[#111] border border-white/10 text-white/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                  }`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  )}
                </button>

                <div className="flex flex-col">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${isPlaying ? "text-accent" : "text-foreground/40"}`}
                  >
                    {isPlaying ? "Signal_Active" : "Standby"}
                  </span>
                  <span className="font-mono text-[9px] text-foreground/30 uppercase tracking-widest mt-0.5">
                    CH-1 // Master
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-bold">
                  44.1kHz
                </span>
                <div className="flex gap-1 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-3 rounded-full ${isPlaying ? "bg-accent/40 animate-pulse" : "bg-white/10"}`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full h-[100px] flex items-center overflow-visible">
              {/* Measurement Hashes */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 flex justify-between px-4">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[1px] h-2 bg-white/10 -translate-y-[3px]"
                  ></div>
                ))}
              </div>

              <svg
                className="absolute inset-0 w-full h-full overflow-visible z-10"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                {/* Aggressive Glow */}
                <path
                  className="fill-none stroke-accent stroke-[4px] opacity-30 drop-shadow-[0_0_24px_#ff6000] transition-all duration-75 ease-linear"
                  d={generatePath(true)}
                />
                {/* Razor Sharp Core Line */}
                <path
                  className="fill-none stroke-white stroke-[2px] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] transition-all duration-75 ease-linear"
                  d={generatePath(false)}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Newsletter & Copyright */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#050505] border-t border-black/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] relative z-20">
          {/* Hard Newsletter Input */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex w-full md:w-80 group/input">
              <span className="bg-[#111] border border-r-0 border-white/10 rounded-l-xl flex items-center justify-center px-4 font-mono text-accent text-sm font-bold shadow-inner transition-colors group-focus-within/input:border-accent/50">
                {">"}
              </span>
              <input
                type="email"
                placeholder="INITIALIZE_SIGNAL..."
                className="w-full bg-[#111] border-y border-white/10 py-3 px-3 font-mono text-[11px] uppercase tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors shadow-inner"
              />
              <button className="bg-[#111] hover:bg-accent hover:text-black hover:border-accent transition-colors rounded-r-xl px-5 flex items-center justify-center border border-l-0 border-white/10 shadow-inner group-focus-within/input:border-accent/50">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                  Sync
                </span>
              </button>
            </div>
          </div>

          {/* Legal / Social Grid */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex gap-4 md:gap-6 font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-bold">
              <a
                href="#"
                className="hover:text-accent transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>IG
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>X
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>SC
              </a>
            </div>

            <div className="hidden md:block w-[1px] h-4 bg-white/10"></div>

            <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-[0.2em] hidden md:block">
              © 2026 The Harmonic
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
