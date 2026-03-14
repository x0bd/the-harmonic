import React, { useState } from 'react';
import { Crosshair } from '../ui/Crosshair';

export const WaveformSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#0A0A0C] p-8 relative overflow-hidden border-t border-[#ffffff1a] flex flex-col md:flex-row items-center cursor-crosshair group hover:bg-[#111116] transition-colors duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative z-10 w-full md:w-1/3 pr-8 mb-8 md:mb-0">
        <div className="font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] mb-4">
          <span className="text-white font-bold">DATA.VISUALIZATION</span>
        </div>
        <h4 className="font-serif text-4xl text-white mb-4 leading-tight transition-colors duration-300 group-hover:text-[#00E5FF]">
          Spectral Analysis:<br />White Noise
        </h4>
        <p className="text-sm text-[#E4E4E6] mt-4 font-light">
          Visualizing the random frequency distribution inherent in pure analogue noise generation. The aesthetic of unpredictability.
        </p>
      </div>

      <div className="w-full md:w-2/3 h-[300px] relative">
        <Crosshair position="tl" />
        <Crosshair position="br" />

        <div className="absolute bottom-4 right-4 text-right flex flex-col gap-1 font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] z-10">
          <span>FREQ.RANGE</span>
          <span className="text-white">20Hz - 20kHz</span>
        </div>

        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#030303" />
              <stop offset="50%" stopColor="#8A2BE2" />
              <stop offset="100%" stopColor="#030303" />
            </linearGradient>
          </defs>
          <path
            className={`fill-none stroke-1 transition-all duration-500 ${hovered ? 'stroke-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] opacity-100' : 'stroke-[#8A2BE2] opacity-60'}`}
            d="M0,150 Q50,120 100,150 T200,150 T300,110 T400,180 T500,140 T600,200 T700,100 T800,160 T900,130 T1000,150"
            stroke={hovered ? undefined : "url(#wave-grad)"}
          />
          <path
            className={`fill-none stroke-1 transition-all duration-500 ${hovered ? 'stroke-[#00E5FF] opacity-30 drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]' : 'stroke-[#8A2BE2] opacity-30'}`}
            d="M0,150 Q60,180 120,150 T240,150 T360,190 T480,110 T600,150 T720,180 T840,120 T960,160 T1000,150"
          />
          <path
            className={`fill-none transition-all duration-500 ${hovered ? 'stroke-[#00E5FF] opacity-80 stroke-[0.5px] drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]' : 'stroke-[#8A2BE2] opacity-80 stroke-[0.5px]'}`}
            d="M0,150 Q40,100 80,150 T160,150 T240,80 T320,170 T400,120 T480,220 T560,90 T640,180 T720,110 T800,190 T880,140 T960,150 T1000,150"
          />
          <line x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
          <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
          <line x1="500" y1="0" x2="500" y2="300" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 6" />
        </svg>
      </div>
    </section>
  );
};
