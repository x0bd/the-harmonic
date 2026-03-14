import React, { useState, useEffect, useRef } from 'react';

const customStyles = {
  root: {
    '--bg-void': '#030305',
    '--bg-surface': '#0a0b10',
    '--text-primary': '#ffffff',
    '--text-secondary': '#8a8d98',
    '--text-tertiary': '#4a4d58',
    '--accent-spectral': '#7b61ff',
    '--accent-spectral-dim': 'rgba(123, 97, 255, 0.2)',
    '--glow-white': '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)',
    '--glow-white-intense': '0 0 20px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.4)',
  },
  body: {
    backgroundColor: '#030305',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    overflowX: 'hidden',
    lineHeight: '1.5',
  },
  brand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.5rem',
    fontWeight: 300,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    textDecoration: 'none',
  },
  brandSpan: {
    fontFamily: "'Noto Serif JP', serif",
    fontSize: '0.6rem',
    letterSpacing: '0.4em',
    color: '#8a8d98',
    marginTop: '4px',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '64px 128px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 50,
    mixBlendMode: 'difference',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    position: 'relative',
    paddingBottom: '4px',
    cursor: 'pointer',
  },
  hero: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: "linear-gradient(to bottom, rgba(3,3,5,0.7), rgba(3,3,5,1)), url('https://images.unsplash.com/photo-1518557434522-6e27a6d81a81?q=80&w=2500&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  verticalCredits: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    top: '-120px',
  },
  creditBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  creditLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '9px',
    color: '#8a8d98',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  },
  creditName: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '10px',
    letterSpacing: '0.1em',
    textTransform: 'lowercase',
  },
  creditCjk: {
    fontFamily: "'Noto Serif JP', serif",
    fontSize: '12px',
    letterSpacing: '0.4em',
  },
  monolithContainer: {
    position: 'relative',
    width: '40vw',
    maxWidth: '500px',
    aspectRatio: '1 / 1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)',
    background: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(2px)',
    border: '2px solid rgba(255,255,255,0.9)',
    zIndex: 2,
    transition: 'box-shadow 1s ease',
  },
  monolithContainerHover: {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.4)',
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(3rem, 6vw, 6rem)',
    fontWeight: 300,
    lineHeight: 1,
    textAlign: 'center',
    mixBlendMode: 'screen',
    textShadow: '0 0 20px rgba(255,255,255,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroTitleItalic: {
    fontStyle: 'italic',
    fontWeight: 400,
    display: 'block',
    marginTop: '-10px',
  },
  waterPlane: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40vh',
    background: 'linear-gradient(to bottom, transparent, #030305)',
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  reflection: {
    position: 'absolute',
    top: 0,
    width: '40vw',
    maxWidth: '500px',
    aspectRatio: '1 / 1',
    border: '2px solid rgba(255,255,255,0.6)',
    boxShadow: '0 0 10px rgba(255,255,255,0.3)',
    transformOrigin: 'top',
    transform: 'scaleY(-1)',
    filter: 'url(#waterRipple) blur(1px)',
    opacity: 0.7,
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
  },
  editorialSection: {
    padding: '128px 32px',
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '128px',
    borderBottom: '1px solid #4a4d58',
    paddingBottom: '16px',
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.5rem',
    fontWeight: 300,
    fontStyle: 'italic',
    color: '#8a8d98',
  },
  sectionMeta: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px',
    color: '#4a4d58',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  articleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '64px',
  },
  articleCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    cursor: 'pointer',
  },
  articleImageContainer: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0a0b10',
  },
  articleImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%) contrast(1.2) brightness(0.8)',
    transition: 'filter 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s ease',
  },
  articleImageHover: {
    filter: 'grayscale(0%) contrast(1.1) brightness(1)',
    transform: 'scale(1.03)',
  },
  crosshair: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: "'JetBrains Mono', monospace",
    lineHeight: 1,
    zIndex: 10,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    textShadow: '0 0 5px rgba(0,0,0,0.8)',
  },
  crosshairVisible: {
    opacity: 1,
  },
  articleMetaTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px',
    color: '#7b61ff',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginTop: '8px',
  },
  articleTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 1.1,
    color: '#ffffff',
  },
  articleExcerpt: {
    fontSize: '0.85rem',
    color: '#8a8d98',
    fontWeight: 300,
    maxWidth: '90%',
  },
  articleData: {
    display: 'flex',
    gap: '16px',
    marginTop: 'auto',
    paddingTop: '8px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  dataPoint: {
    display: 'flex',
    flexDirection: 'column',
  },
  dataLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '8px',
    color: '#4a4d58',
  },
  dataValue: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px',
    color: '#8a8d98',
  },
  waveformSection: {
    padding: '128px 32px',
    maxWidth: '1600px',
    margin: '128px auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '64px',
  },
  waveformContainer: {
    width: '100%',
    height: '150px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  waveformLine: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: '1px',
    background: '#4a4d58',
  },
  svgWaveform: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  wavePath: {
    fill: 'none',
    stroke: '#ffffff',
    strokeWidth: 1,
    filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.4))',
    strokeDasharray: 2000,
    strokeDashoffset: 0,
  },
  wavePathGlow: {
    fill: 'none',
    stroke: '#7b61ff',
    strokeWidth: 2,
    opacity: 0.5,
    filter: 'drop-shadow(0 0 8px #7b61ff)',
    transform: 'scaleY(1.1)',
    transformOrigin: 'center',
  },
  audioControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    color: '#8a8d98',
  },
  playBtn: {
    width: '40px',
    height: '40px',
    border: '1px solid #8a8d98',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: 'transparent',
    color: '#8a8d98',
  },
  playBtnHover: {
    borderColor: '#ffffff',
    color: '#ffffff',
    boxShadow: '0 0 15px rgba(255,255,255,0.2)',
  },
  footer: {
    padding: '128px 32px',
    borderTop: '1px solid #4a4d58',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '128px',
  },
  footerBrand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2rem',
    color: '#8a8d98',
  },
  footerData: {
    textAlign: 'right',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px',
    color: '#4a4d58',
    lineHeight: '1.8',
  },
  systemFrame: {
    position: 'fixed',
    top: '32px',
    left: '32px',
    right: '32px',
    bottom: '32px',
    pointerEvents: 'none',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  sysMeta: {
    position: 'fixed',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '10px',
    color: '#4a4d58',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    zIndex: 101,
    pointerEvents: 'none',
  },
  frameCornerBase: {
    width: '15px',
    height: '15px',
    border: '1px solid #4a4d58',
  },
};

const ArticleCard = ({ article, gridStyle }) => {
  const [hovered, setHovered] = useState(false);

  const isOdd = article.index % 2 !== 0;

  return (
    <article
      style={{ ...customStyles.articleCard, ...gridStyle }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...customStyles.articleImageContainer,
          aspectRatio: isOdd ? '16/9' : '4/5',
        }}
      >
        <div
          style={{
            ...customStyles.crosshair,
            top: '10px',
            left: '10px',
            ...(hovered ? customStyles.crosshairVisible : {}),
          }}
        >+</div>
        <div
          style={{
            ...customStyles.crosshair,
            bottom: '10px',
            right: '10px',
            ...(hovered ? customStyles.crosshairVisible : {}),
          }}
        >+</div>
        <img
          src={article.image}
          alt={article.imageAlt}
          style={{
            ...customStyles.articleImage,
            ...(hovered ? customStyles.articleImageHover : {}),
          }}
        />
      </div>
      <div style={customStyles.articleMetaTop}>
        <span>{article.meta}</span>
        <span>{article.date}</span>
      </div>
      <h3 style={customStyles.articleTitle}>{article.title}</h3>
      <p style={customStyles.articleExcerpt}>{article.excerpt}</p>
      <div style={customStyles.articleData}>
        {article.dataPoints.map((dp, i) => (
          <div key={i} style={customStyles.dataPoint}>
            <span style={customStyles.dataLabel}>{dp.label}</span>
            <span style={customStyles.dataValue}>{dp.value}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

const articles = [
  {
    index: 1,
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Synthesizer setup in dark studio',
    meta: 'Interview / Tokyo',
    date: '08.24',
    title: 'The Architecture of Noise',
    excerpt: 'Exploring the brutalist sonic landscapes constructed by Ryoji Ikeda and the new wave of algorithmic composers utilizing extreme frequencies.',
    dataPoints: [
      { label: 'BPM RANGE', value: '0 - 240' },
      { label: 'DURATION', value: '14 MIN Read' },
      { label: 'SYS.ID', value: 'TX-81Z' },
    ],
  },
  {
    index: 2,
    image: 'https://images.unsplash.com/photo-1510212351786-bb2d7cc0b5bb?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Abstract dark geometric interior',
    meta: 'Exhibition / Berlin',
    date: '07.24',
    title: 'Negative Space as Instrumentation',
    excerpt: 'How silence and sub-bass create physical tension in warehouse environments. A study of acoustic shadows.',
    dataPoints: [
      { label: 'FOCUS', value: 'Acoustics' },
      { label: 'SYS.ID', value: 'SP-1200' },
    ],
  },
  {
    index: 3,
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Circuit board macro',
    meta: 'Hardware / Review',
    date: '06.24',
    title: 'Crystalline Synthesis',
    excerpt: 'Deconstructing the spectral oscillators and wavetable manipulation of the latest modular rigs from Make Noise.',
    dataPoints: [
      { label: 'TECH', value: 'Eurorack' },
    ],
  },
  {
    index: 4,
    image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5fafe3f?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Person standing in dark smoke',
    meta: 'Culture / Underground',
    date: '05.24',
    title: 'The Wabi-Sabi of Tape Hiss',
    excerpt: 'Finding perfection in degradation. Why ambient artists are returning to magnetic tape to humanize digital clinicality.',
    dataPoints: [
      { label: 'MEDIUM', value: 'Cassette' },
      { label: 'SYS.ID', value: 'RE-201' },
    ],
  },
];

const articleGridStyles = [
  { gridColumn: '2 / 8' },
  { gridColumn: '9 / 13', marginTop: '128px' },
  { gridColumn: '1 / 6', marginTop: '256px' },
  { gridColumn: '7 / 12' },
];

const App = () => {
  const [monolithHovered, setMonolithHovered] = useState(false);
  const [playHovered, setPlayHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [navHovered, setNavHovered] = useState(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@100;300;400&family=Noto+Serif+JP:wght@200;300;400&display=swap');
      
      * { box-sizing: border-box; margin: 0; padding: 0; }
      
      ::selection { background-color: #7b61ff; color: #ffffff; }
      
      body { overflow-x: hidden; }
      
      @keyframes drawWave {
        0% { stroke-dashoffset: 2000; }
        100% { stroke-dashoffset: 0; }
      }
      
      .wave-path-animated {
        stroke-dasharray: 2000;
        stroke-dashoffset: 0;
        animation: drawWave 10s linear infinite alternate;
      }
      
      .nav-link-underline {
        position: relative;
        padding-bottom: 4px;
      }
      .nav-link-underline::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: #7b61ff;
        transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .nav-link-underline:hover::after {
        width: 100%;
      }

      @media (max-width: 1024px) {
        .article-grid-responsive > article:nth-child(n) {
          grid-column: span 6 !important;
          margin-top: 0 !important;
        }
        .monolith-responsive { width: 60vw !important; }
        .reflection-responsive { width: 60vw !important; }
      }

      @media (max-width: 768px) {
        .article-grid-responsive > article:nth-child(n) {
          grid-column: span 12 !important;
          margin-top: 0 !important;
        }
        .system-frame-hide { display: none !important; }
        .monolith-responsive { width: 80vw !important; }
        .reflection-responsive { width: 80vw !important; }
        .nav-responsive { padding: 32px 24px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={customStyles.body}>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="waterRipple" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.08" numOctaves="3" result="noise">
              <animate
                attributeName="baseFrequency"
                values="0.015 0.08; 0.02 0.09; 0.015 0.08"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* System Frame */}
      <div className="system-frame-hide" style={customStyles.systemFrame}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ ...customStyles.frameCornerBase, borderRight: 'none', borderBottom: 'none' }} />
          <div style={{ ...customStyles.frameCornerBase, borderLeft: 'none', borderBottom: 'none' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: 0 }}>
          <div style={{ ...customStyles.frameCornerBase, borderRight: 'none', borderTop: 'none', alignSelf: 'flex-end' }} />
          <div style={{ ...customStyles.frameCornerBase, borderLeft: 'none', borderTop: 'none', alignSelf: 'flex-end' }} />
        </div>
      </div>

      <div className="system-frame-hide" style={{ ...customStyles.sysMeta, top: '40px', left: '40px' }}>FREQ. 432HZ // SQ. 01</div>
      <div className="system-frame-hide" style={{ ...customStyles.sysMeta, top: '40px', right: '40px', textAlign: 'right' }}>
        VOL. IV<br />ISSUE 09
      </div>
      <div className="system-frame-hide" style={{ ...customStyles.sysMeta, bottom: '40px', left: '40px' }}>LOC. 35.6762° N, 139.6503° E</div>
      <div className="system-frame-hide" style={{ ...customStyles.sysMeta, bottom: '40px', right: '40px', textAlign: 'right' }}>STATUS: RESONATING</div>

      {/* Nav */}
      <nav className="nav-responsive" style={customStyles.nav}>
        <div style={customStyles.brand}>
          The Harmonic
          <span style={customStyles.brandSpan}>高調波</span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Editorial', 'Artists', 'Transmissions', 'Archive'].map((link) => (
            <a
              key={link}
              href="#"
              className="nav-link-underline"
              style={customStyles.navLink}
              onClick={(e) => e.preventDefault()}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section style={customStyles.hero}>
          <div style={customStyles.heroContent}>
            <div style={customStyles.verticalCredits}>
              <div style={customStyles.creditBlock}>
                <span style={customStyles.creditLabel}>Visual by</span>
                <span style={customStyles.creditCjk}>劉承杰</span>
                <span style={customStyles.creditName}>jie liou</span>
              </div>
              <div style={customStyles.creditBlock}>
                <span style={customStyles.creditLabel}>Audio by</span>
                <span style={customStyles.creditCjk}>邱俊霖</span>
                <span style={customStyles.creditName}>andy chiu</span>
              </div>
            </div>

            <div
              className="monolith-responsive"
              style={{
                ...customStyles.monolithContainer,
                ...(monolithHovered ? customStyles.monolithContainerHover : {}),
              }}
              onMouseEnter={() => setMonolithHovered(true)}
              onMouseLeave={() => setMonolithHovered(false)}
            >
              <h1 style={customStyles.heroTitle}>
                ECHOES
                <span style={customStyles.heroTitleItalic}>of the Void</span>
              </h1>
            </div>
          </div>

          <div style={customStyles.waterPlane}>
            <div
              className="reflection-responsive"
              style={customStyles.reflection}
            />
          </div>
        </section>

        {/* Editorial Section */}
        <section style={customStyles.editorialSection}>
          <div style={customStyles.sectionHeader}>
            <h2 style={customStyles.sectionTitle}>Latest Transmissions</h2>
            <div style={customStyles.sectionMeta}>INDEX / 001 - 004</div>
          </div>

          <div className="article-grid-responsive" style={customStyles.articleGrid}>
            {articles.map((article, i) => (
              <ArticleCard
                key={article.index}
                article={article}
                gridStyle={articleGridStyles[i]}
              />
            ))}
          </div>
        </section>

        {/* Waveform Section */}
        <section style={customStyles.waveformSection}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#4a4d58' }}>
            <span>L-CH // SPECTRAL ANALYSIS</span>
            <span>R-CH // 44.1kHz</span>
          </div>

          <div style={customStyles.waveformContainer}>
            <div style={customStyles.waveformLine} />
            <svg
              style={customStyles.svgWaveform}
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                style={customStyles.wavePathGlow}
                d="M0,50 Q20,40 40,50 T80,50 T120,30 T160,50 T200,60 T240,50 T280,10 T320,50 T360,80 T400,50 T440,40 T480,50 T520,20 T560,50 T600,70 T640,50 T680,30 T720,50 T760,90 T800,50 T840,40 T880,50 T920,20 T960,50 T1000,50"
              />
              <path
                className="wave-path-animated"
                style={customStyles.wavePath}
                d="M0,50 Q10,45 20,50 T40,50 T60,20 T80,50 T100,70 T120,50 T140,10 T160,50 T180,80 T200,50 T220,45 T240,50 T260,15 T280,50 T300,75 T320,50 T340,30 T360,50 T380,85 T400,50 T420,45 T440,50 T460,20 T480,50 T500,50 T520,10 T540,50 T560,70 T580,50 T600,30 T620,50 T640,90 T660,50 T680,45 T700,50 T720,15 T740,50 T760,80 T780,50 T800,30 T820,50 T840,85 T860,50 T880,45 T900,50 T920,20 T940,50 T960,60 T980,50 L1000,50"
              />
            </svg>
          </div>

          <div style={customStyles.audioControls}>
            <span>00:00:00</span>
            <button
              style={{
                ...customStyles.playBtn,
                ...(playHovered ? customStyles.playBtnHover : {}),
              }}
              onMouseEnter={() => setPlayHovered(true)}
              onMouseLeave={() => setPlayHovered(false)}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '►'}
            </button>
            <span>LIVE FEED</span>
          </div>
        </section>
      </main>

      <footer style={customStyles.footer}>
        <div style={customStyles.footerBrand}>The Harmonic</div>
        <div style={customStyles.footerData}>
          SYSTEM VERSION 2.4.1<br />
          RENDERED IN THE VOID<br />
          © 2024
        </div>
      </footer>
    </div>
  );
};

export default App;