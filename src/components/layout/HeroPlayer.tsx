import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tracks = [
  { title: "Careful", artist: "Boy Harsher", time: "03:14", remain: "-01:42" },
  { title: "Maps", artist: "Yeah Yeah Yeahs", time: "03:39", remain: "-00:00" },
  {
    title: "Gallowdance",
    artist: "Lebanon Hanover",
    time: "03:50",
    remain: "-02:10",
  },
  {
    title: "Closer",
    artist: "Nine Inch Nails",
    time: "06:13",
    remain: "-01:23",
  },
];

export const HeroPlayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // We pin the container and scrub through the tracks
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // 300% of viewport height to scroll through
        pin: true,
        scrub: true,
      },
    });

    // Animate between tracks
    tracks.forEach((_, index) => {
      if (index === 0) return; // First track is initially visible

      const prevTrack = trackRefs.current[index - 1];
      const currentTrack = trackRefs.current[index];

      // Fade out prev, fade in current
      tl.to(
        prevTrack,
        {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.inOut",
        },
        `step${index}`,
      ).fromTo(
        currentTrack,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        `step${index}`,
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const setTrackRef = (index: number) => (el: HTMLDivElement | null) => {
    trackRefs.current[index] = el;
  };

  return (
    <header
      ref={containerRef}
      className="relative h-screen w-full bg-[#030303] overflow-hidden flex flex-col justify-between p-8 md:p-12 border-b border-[#ffffff1a] cursor-crosshair"
    >
      {/* Grid Background overlay for tech feel. Center remains empty for future shader. */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50 z-0"></div>

      {/* Top Bar - Pushed to edges */}
      <div className="relative z-10 w-full flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-[#88888D] tracking-[0.3em] uppercase">
            SYS.OP
          </span>
          <span className="font-sans text-sm font-bold tracking-widest text-white">
            THE HARMONIC
          </span>
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span className="font-mono text-[10px] text-[#88888D] tracking-[0.3em] uppercase">
            STATUS
          </span>
          <span className="font-mono text-[10px] text-[#7b61ff] tracking-[0.2em] font-bold">
            RESONATING
          </span>
        </div>
      </div>

      {/* Huge Empty Center for the Shader */}
      <div className="flex-grow relative w-full flex items-center justify-center">
        {/* Shader will go here */}
        <div className="font-mono text-[#88888D] text-xs opacity-20 tracking-widest">
          [ SHADER_CANVAS_RESERVED ]
        </div>
      </div>

      {/* Bottom Bar - Player Controls & Track Info */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8 h-[200px]">
        {/* Left: Track Info (Massive Typography) */}
        <div className="flex flex-col relative w-full md:w-1/2 h-full justify-end">
          <div className="font-mono text-[10px] text-[#7b61ff] tracking-[0.3em] uppercase mb-4 font-bold flex items-center gap-3">
            <span className="w-2 h-2 bg-[#7b61ff] rounded-full animate-pulse shadow-[0_0_8px_#7b61ff]"></span>
            NOW PLAYING
          </div>

          <div className="relative w-full h-[120px]">
            {tracks.map((track, i) => (
              <div
                key={i}
                ref={setTrackRef(i)}
                className="absolute bottom-0 left-0 w-full flex flex-col"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? "translateY(0)" : "translateY(50px)",
                }}
              >
                <h1 className="font-sans text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.85] text-white tracking-tighter uppercase mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {track.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4a4d58]">
                    {track.artist}
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Player Controls & Readouts */}
        <div className="flex flex-col items-end gap-6 w-full md:w-auto h-full justify-end">
          <div className="flex items-end gap-8 w-full justify-between md:justify-end border-b border-[#ffffff1a] pb-4">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#88888D] tracking-[0.2em] uppercase">
                TIME
              </span>
              <span className="font-mono text-sm text-white">03:14</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-mono text-[9px] text-[#88888D] tracking-[0.2em] uppercase">
                REMAINING
              </span>
              <span className="font-mono text-sm text-[#4a4d58]">-01:42</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button
              className="text-[#88888D] hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>
            <button
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              aria-label="Play"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button
              className="text-[#88888D] hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
