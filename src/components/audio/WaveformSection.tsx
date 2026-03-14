import React, { useState } from "react";

export const WaveformSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playHovered, setPlayHovered] = useState(false);

    return (
        <section className="relative z-10 bg-[#030303] max-w-7xl mx-auto w-full px-4 md:px-16 pb-32 flex flex-col gap-12 font-sans cursor-crosshair">
            <div className="w-full flex justify-between font-mono text-[10px] text-[#88888D] uppercase tracking-[0.1em]">
                <span>L-CH // SPECTRAL ANALYSIS</span>
                <span>R-CH // 44.1kHz</span>
            </div>

            <div className="relative w-full h-[100px] flex items-center">
                {/* Center Line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#ffffff1a] -translate-y-1/2" />

                <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                >
                    {/* Static Glow Path */}
                    <path
                        className="fill-none stroke-[#7b61ff] stroke-2 opacity-50 drop-shadow-[0_0_8px_#7b61ff] scale-y-110 origin-center"
                        d="M0,50 Q20,40 40,50 T80,50 T120,30 T160,50 T200,60 T240,50 T280,10 T320,50 T360,80 T400,50 T440,40 T480,50 T520,20 T560,50 T600,70 T640,50 T680,30 T720,50 T760,90 T800,50 T840,40 T880,50 T920,20 T960,50 T1000,50"
                    />
                    {/* Main Waveform Path */}
                    <path
                        className={`fill-none stroke-white stroke-1 transition-all duration-700 ${isPlaying ? "opacity-100" : "opacity-60"}`}
                        d="M0,50 Q10,45 20,50 T40,50 T60,20 T80,50 T100,70 T120,50 T140,10 T160,50 T180,80 T200,50 T220,45 T240,50 T260,15 T280,50 T300,75 T320,50 T340,30 T360,50 T380,85 T400,50 T420,45 T440,50 T460,20 T480,50 T500,50 T520,10 T540,50 T560,70 T580,50 T600,30 T620,50 T640,90 T660,50 T680,45 T700,50 T720,15 T740,50 T760,80 T780,50 T800,30 T820,50 T840,85 T860,50 T880,45 T900,50 T920,20 T940,50 T960,60 T980,50 L1000,50"
                        strokeDasharray="2000"
                        strokeDashoffset="0"
                        style={{
                            animation: isPlaying
                                ? "drawWave 10s linear infinite alternate"
                                : "none",
                        }}
                    />
                </svg>
            </div>

            <div className="flex items-center gap-8 font-mono text-[11px] text-[#88888D]">
                <span className={isPlaying ? "text-white" : ""}>00:00:00</span>

                <button
                    className={`w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 bg-transparent ${playHovered || isPlaying ? "border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "border-[#88888D] text-[#88888D]"}`}
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

                <span className={isPlaying ? "text-[#7b61ff]" : ""}>
                    LIVE FEED
                </span>
            </div>

            <style>{`
        @keyframes drawWave {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
        </section>
    );
};
