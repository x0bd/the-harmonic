import React, { useState, useEffect, useRef } from "react";

export const WaveformSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playHovered, setPlayHovered] = useState(false);

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
    const segments = 25;
    const width = 1000;
    const segmentWidth = width / segments;

    const effectiveTime = isGlow ? time - 0.8 : time;

    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;

      let yOffset = Math.sin(effectiveTime + i * 0.5) * 15;
      yOffset += Math.cos(effectiveTime * 1.5 + i * 0.8) * 10;

      if (i % 3 === 0) yOffset += Math.sin(effectiveTime * 3) * 20;
      if (i % 5 === 0) yOffset -= Math.cos(effectiveTime * 4) * 25;

      if (i < 3 || i > segments - 3) yOffset *= 0.2;

      if (isGlow) {
        yOffset *= 1.2;
      }

      const y = 50 + yOffset;
      const prevX = (i - 1) * segmentWidth;
      const cpX = prevX + segmentWidth / 2;

      path += `S ${cpX},${y} ${x},${y} `;
    }
    return path;
  };

  return (
    <footer className="relative w-full bg-card border-t border-white/5 mt-12 overflow-hidden flex flex-col z-20">
      {/* Waveform / Oscilloscope Display */}
      <div className="w-full bg-[#0a0a0a] px-6 md:px-12 py-8 border-b border-white/5 relative group">
        {/* Subtle grid background for the scope */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <div className="w-full flex justify-between font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-4 relative z-10">
          <span className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-accent animate-pulse shadow-[0_0_8px_#ff6000]" : "bg-white/20"}`}
            ></span>
            L-CH // OSCILLATOR
          </span>
          <span>R-CH // 44.1kHz</span>
        </div>

        <div className="relative w-full h-[100px] flex items-center overflow-hidden rounded-xl border border-white/5 bg-black/50 shadow-inner">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />

          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <line
              x1="250"
              y1="0"
              x2="250"
              y2="100"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="500"
              y1="0"
              x2="500"
              y2="100"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="750"
              y1="0"
              x2="750"
              y2="100"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />

            {/* TE Orange Glow Path */}
            <path
              className="fill-none stroke-accent stroke-[3px] opacity-40 drop-shadow-[0_0_12px_#ff6000] transition-all duration-75 ease-linear"
              d={generatePath(true)}
            />
            {/* White Core Path */}
            <path
              className="fill-none stroke-white stroke-[1.5px] drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] transition-all duration-75 ease-linear"
              d={generatePath(false)}
            />
          </svg>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-between mt-4 relative z-10">
          <div className="flex items-center gap-6 font-mono text-[11px] text-foreground/40">
            <span className={isPlaying ? "text-foreground/80 font-bold" : ""}>
              {isPlaying ? "LIVE_FEED" : "STANDBY"}
            </span>
            <span className={isPlaying ? "text-accent" : ""}>
              {isPlaying ? "REC" : "---"}
            </span>
          </div>

          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 bg-white/5 border ${playHovered || isPlaying ? "border-accent text-accent shadow-[0_0_15px_rgba(255,96,0,0.2)] bg-accent/10" : "border-white/10 text-white/50 hover:bg-white/10"}`}
            onMouseEnter={() => setPlayHovered(true)}
            onMouseLeave={() => setPlayHovered(false)}
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause" : "Play"}
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
        </div>
      </div>

      {/* Modern Directory & Footer Info */}
      <div className="w-full px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 bg-card">
        {/* Brand Column */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
          <a
            href="/"
            className="font-sans text-2xl font-bold tracking-tight flex items-center gap-3"
          >
            <div className="w-5 h-5 bg-accent rounded-full shadow-[0_0_15px_rgba(255,96,0,0.4)]"></div>
            The Harmonic
          </a>
          <p className="font-sans text-foreground/50 text-sm leading-relaxed max-w-sm">
            An independent research publication documenting the structural
            remnants of experimental electronic music, underground subcultures,
            and the architecture of noise.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/50 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12h4l3 -9l5 18l3 -9h5"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Directory Links */}
        <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-bold mb-2">
            Directory
          </h4>
          {["Essays", "Interviews", "Releases", "Hardware"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-sm font-medium text-foreground/80 hover:text-accent transition-colors w-fit"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.2em] font-bold mb-2">
            Systems
          </h4>
          {["Artists", "Scenes", "Glossary", "Archive"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-sm font-medium text-foreground/80 hover:text-accent transition-colors w-fit"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Newsletter / Terminal */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-4 bg-black/30 p-8 rounded-3xl border border-white/5 shadow-inner">
          <h4 className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Establish Connection
          </h4>
          <p className="font-sans text-sm text-foreground/60 mb-2">
            Receive weekly transmissions, hardware reviews, and archive updates
            directly to your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="ENTER_SIGNAL..."
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 w-full font-mono text-xs text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <button className="bg-white/10 hover:bg-accent hover:text-black transition-colors rounded-xl px-5 flex items-center justify-center border border-white/10 hover:border-accent">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Deep Footer / Copyright */}
      <div className="w-full px-6 md:px-12 py-6 border-t border-white/5 bg-[#0a0a0a] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-[0.1em]">
          © 2026 THE HARMONIC ARCHIVE. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-6 font-mono text-[10px] text-foreground/40 uppercase tracking-[0.1em]">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
