import React, { useState } from 'react';

const ViewportFrame = () => {
  const [navHover, setNavHover] = useState<string | null>(null);

  const linkStyle = (id: string) => ({
    color: navHover === id ? '#00E5FF' : '#88888D',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.65rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] p-4 flex flex-col justify-between mix-blend-difference">
      <div className="flex justify-between items-start">
        <div className="pointer-events-auto font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] flex gap-4">
          <span><span className="text-white font-bold">HARMONIC</span>.ORG</span>
          <span>SYS.OP.01</span>
        </div>
        <div className="pointer-events-auto font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] flex gap-4 text-right">
          {['INDEX', 'ARCHIVE', 'INFO'].map((item) => (
            <a
              key={item}
              href="#"
              style={linkStyle(item)}
              onMouseEnter={() => setNavHover(item)}
              onMouseLeave={() => setNavHover(null)}
              onClick={(e) => e.preventDefault()}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="pointer-events-auto font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] flex gap-4">
          <span>VOL.04</span>
          <span>[EXPERIMENTAL AUDIO]</span>
        </div>
        <div className="pointer-events-auto font-mono text-[0.65rem] text-[#88888D] uppercase tracking-[0.1em] flex gap-4 text-right">
          <span>ENG // JP</span>
          <span className="text-white font-bold">ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default ViewportFrame;
