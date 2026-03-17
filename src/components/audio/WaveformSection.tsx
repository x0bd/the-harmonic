import React, { useState, useEffect, useRef } from "react";

export const WaveformSection = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Default to true so it's always "live"
  const [playHovered, setPlayHovered] = useState(false);

  // Animate the path data to simulate live frequency changes
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

  // Generate dynamic path based on time
  const generatePath = (isGlow: boolean) => {
    let path = "M0,50 ";
    const segments = 25;
    const width = 1000;
    const segmentWidth = width / segments;

    // Add a time offset if it's the glow path so they move out of phase
    const effectiveTime = isGlow ? time - 0.8 : time;

    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;

      // Base sine waves for organic movement using effectiveTime
      let yOffset = Math.sin(effectiveTime + i * 0.5) * 15;
      yOffset += Math.cos(effectiveTime * 1.5 + i * 0.8) * 10;

      // Add "noise" spikes
      if (i % 3 === 0) yOffset += Math.sin(effectiveTime * 3) * 20;
      if (i % 5 === 0) yOffset -= Math.cos(effectiveTime * 4) * 25;

      // Dampen the ends
      if (i < 3 || i > segments - 3) yOffset *= 0.2;

      // Glow path is slightly more exaggerated in scale
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
    <section className="relative z-10 bg-[#030303] max-w-full mx-auto w-full px-4 md:px-16 pb-32 flex flex-col gap-12 font-sans cursor-crosshair">
      <div className="w-full flex justify-between font-mono text-[10px] text-[#88888D] uppercase tracking-[0.1em]">
        <span>L-CH // SPECTRAL ANALYSIS</span>
        <span>R-CH // 44.1kHz</span>
      </div>

      <div className="relative w-full h-[120px] flex items-center overflow-hidden">
        {/* Center Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />

        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          {/* Static Grid Lines */}
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

          {/* Dynamic Glow Path */}
          <path
            className="fill-none stroke-[#7b61ff] stroke-[3px] opacity-40 drop-shadow-[0_0_12px_#7b61ff] transition-all duration-75 ease-linear"
            d={generatePath(true)}
          />

          {/* Dynamic Main Waveform Path */}
          <path
            className="fill-none stroke-white stroke-[1.5px] drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] transition-all duration-75 ease-linear"
            d={generatePath(false)}
          />
        </svg>
      </div>

      <div className="flex items-center gap-8 font-mono text-[11px] text-[#88888D]">
        <span className={isPlaying ? "text-white" : ""}>
          {isPlaying ? "00:00:LIVE" : "00:00:PAUSED"}
        </span>

        <button
          className={`w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 bg-[#0a0a0a] ${playHovered || isPlaying ? "border-[#7b61ff] text-[#7b61ff] shadow-[0_0_15px_rgba(123,97,255,0.3)]" : "border-white/20 text-white/50"}`}
          onMouseEnter={() => setPlayHovered(true)}
          onMouseLeave={() => setPlayHovered(false)}
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          )}
        </button>

        <span className={isPlaying ? "text-[#7b61ff] animate-pulse" : ""}>
          DATA STREAM
        </span>
      </div>
    </section>
  );
};
