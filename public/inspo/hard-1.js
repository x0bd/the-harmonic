import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const customStyles = {
  root: {
    '--bg': '#030303',
    '--bg-elevated': '#0A0A0C',
    '--fg-pure': '#FFFFFF',
    '--fg-base': '#E4E4E6',
    '--fg-muted': '#88888D',
    '--fg-dark': '#333336',
    '--accent-violet': '#8A2BE2',
    '--accent-blue': '#00E5FF',
    '--accent-glow': 'rgba(138, 43, 226, 0.4)',
    '--border-subtle': 'rgba(255, 255, 255, 0.1)',
    '--border-hover': 'rgba(255, 255, 255, 0.4)',
  },
  body: {
    backgroundColor: '#030303',
    color: '#E4E4E6',
    fontFamily: "'Inter', -apple-system, sans-serif",
    lineHeight: '1.5',
    overflowX: 'hidden',
    cursor: 'crosshair',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  viewportFrame: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    pointerEvents: 'none',
    zIndex: 100,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  frameTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  frameBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sysLabel: {
    pointerEvents: 'auto',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.65rem',
    color: '#88888D',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    display: 'flex',
    gap: '1rem',
  },
  highlight: {
    color: '#FFFFFF',
    fontWeight: 700,
  },
  wrapper: {
    padding: '1rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    position: 'relative',
    height: 'calc(100vh - 2rem)',
    width: '100%',
    backgroundColor: '#030303',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto 1fr auto',
    padding: '8rem 4rem',
  },
  heroBgImage: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.4,
    mixBlendMode: 'luminosity',
    filter: 'contrast(1.2) brightness(0.8)',
    zIndex: 0,
  },
  heroVignette: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, transparent 0%, #030303 80%)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '1rem',
    height: '100%',
  },
  heroIssue: {
    gridColumn: '2 / 5',
    gridRow: 1,
    paddingTop: '4rem',
  },
  heroIssueH2: {
    fontSize: 'clamp(4rem, 10vw, 8rem)',
    lineHeight: '0.8',
    color: '#FFFFFF',
    letterSpacing: '-0.05em',
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontWeight: 700,
  },
  heroIssueDesc: {
    marginTop: '0.5rem',
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontWeight: 500,
    fontSize: '1.1rem',
    color: '#FFFFFF',
    maxWidth: '200px',
    lineHeight: '1.2',
  },
  heroTitleContainer: {
    gridColumn: '3 / 11',
    gridRow: 2,
    alignSelf: 'center',
    textAlign: 'center',
    mixBlendMode: 'difference',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    color: '#FFFFFF',
    lineHeight: 1,
    fontStyle: 'italic',
    fontWeight: 400,
    letterSpacing: '-0.02em',
  },
  heroJp: {
    gridColumn: '6 / 8',
    gridRow: '1 / -1',
    justifySelf: 'center',
    alignSelf: 'center',
    fontSize: '1.5rem',
    zIndex: 15,
    textShadow: '0 0 20px rgba(0,0,0,0.8)',
    fontFamily: "'Noto Serif JP', serif",
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    color: '#FFFFFF',
    letterSpacing: '0.5em',
  },
  heroMetaBottom: {
    gridColumn: '1 / -1',
    gridRow: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: '4rem',
  },
  heroEdition: {
    textAlign: 'center',
    flexGrow: 1,
  },
  heroEditionNum: {
    display: 'block',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.85rem',
    marginTop: '4px',
    color: '#FFFFFF',
  },
  editorialSection: {
    padding: '8rem 0',
    position: 'relative',
    zIndex: 10,
    background: '#030303',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '1rem',
    marginBottom: '8rem',
    marginLeft: '4rem',
    marginRight: '4rem',
  },
  sectionHeaderH3: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    fontWeight: 400,
    color: '#FFFFFF',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  articleCardBase: {
    backgroundColor: '#030303',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'background-color 0.4s ease',
    cursor: 'pointer',
  },
  articleCardHover: {
    backgroundColor: '#0A0A0C',
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4rem',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.65rem',
    color: '#88888D',
  },
  cardTag: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2px 6px',
    color: '#FFFFFF',
  },
  cardImageWrapper: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    marginBottom: '2rem',
    background: '#333336',
  },
  cardImageWrapperSquare: {
    width: '100%',
    aspectRatio: '1/1',
    overflow: 'hidden',
    marginBottom: '2rem',
    background: '#333336',
  },
  cardImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%) contrast(1.2)',
    transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), filter 0.8s ease',
  },
  cardImageImgHover: {
    transform: 'scale(1.05)',
    filter: 'grayscale(0%)',
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.2rem',
    lineHeight: '1.1',
    color: '#FFFFFF',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease',
  },
  cardTitleHover: {
    color: '#00E5FF',
  },
  cardExcerpt: {
    fontSize: '0.9rem',
    color: '#88888D',
    marginTop: 'auto',
    maxWidth: '90%',
  },
  cardFeature: {
    gridColumn: 'span 8',
  },
  cardSecondary: {
    gridColumn: 'span 4',
  },
  cardTextOnly: {
    gridColumn: 'span 4',
    justifyContent: 'center',
    backgroundColor: '#030303',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  cardTextOnlyTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    fontStyle: 'italic',
    marginBottom: '2rem',
    color: '#FFFFFF',
    lineHeight: '1.1',
  },
  cardTertiary: {
    gridColumn: 'span 4',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  waveformSection: {
    gridColumn: 'span 12',
    background: '#030303',
    padding: '8rem 4rem',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
  },
  waveformContent: {
    position: 'relative',
    zIndex: 10,
    width: '40%',
    paddingRight: '4rem',
  },
  waveformSvgContainer: {
    width: '60%',
    height: '300px',
    position: 'relative',
  },
  waveformSvg: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  techDataOverlay: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    textAlign: 'right',
  },
  crosshair: {
    position: 'absolute',
    width: '10px',
    height: '10px',
  },
};

const Crosshair = ({ position }) => {
  const baseStyle = {
    ...customStyles.crosshair,
    ...(position === 'tl' ? { top: '1rem', left: '1rem' } : { bottom: '1rem', right: '1rem' }),
  };
  return (
    <div style={baseStyle}>
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: '#88888D', transform: 'translateY(-50%)' }} />
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: '#88888D', transform: 'translateX(-50%)' }} />
    </div>
  );
};

const SysLabel = ({ children, style, textRight }) => (
  <div style={{ ...customStyles.sysLabel, ...(textRight ? { textAlign: 'right' } : {}), ...style }}>
    {children}
  </div>
);

const ArticleCard = ({ cardStyle, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      style={{ ...customStyles.articleCardBase, ...cardStyle, ...(hovered ? customStyles.articleCardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hovered={hovered}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child, { isHovered: hovered }) : child
      )}
    </article>
  );
};

const CardImage = ({ src, alt, isHovered, square }) => (
  <div style={square ? customStyles.cardImageWrapperSquare : customStyles.cardImageWrapper}>
    <img
      src={src}
      alt={alt}
      style={{ ...customStyles.cardImageImg, ...(isHovered ? customStyles.cardImageImgHover : {}) }}
    />
  </div>
);

const CardTitle = ({ children, isHovered, style }) => (
  <h4 style={{ ...customStyles.cardTitle, ...(isHovered ? customStyles.cardTitleHover : {}), ...style }}>
    {children}
  </h4>
);

const WaveformSection = () => {
  const [hovered, setHovered] = useState(false);

  const waveLineBase = {
    fill: 'none',
    stroke: hovered ? '#00E5FF' : '#8A2BE2',
    strokeWidth: 1,
    opacity: 0.6,
    transition: 'all 0.5s ease',
    filter: hovered ? 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.4))' : 'none',
  };

  return (
    <section
      style={customStyles.waveformSection}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={customStyles.waveformContent}>
        <SysLabel style={{ marginBottom: '1rem' }}>
          <span style={customStyles.highlight}>DATA.VISUALIZATION</span>
        </SysLabel>
        <h4 style={{ ...customStyles.cardTitle, fontSize: '2.5rem' }}>
          Spectral Analysis:<br />White Noise
        </h4>
        <p style={{ ...customStyles.cardExcerpt, marginTop: '1rem' }}>
          Visualizing the random frequency distribution inherent in pure analogue noise generation. The aesthetic of unpredictability.
        </p>
      </div>

      <div style={customStyles.waveformSvgContainer}>
        <Crosshair position="tl" />
        <Crosshair position="br" />
        <div style={{ ...customStyles.techDataOverlay, ...customStyles.sysLabel, flexDirection: 'column', gap: '2px' }}>
          <span>FREQ.RANGE</span>
          <span style={{ color: '#FFFFFF' }}>20Hz - 20kHz</span>
        </div>
        <svg style={customStyles.waveformSvg} viewBox="0 0 1000 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#030303" />
              <stop offset="50%" stopColor="#8A2BE2" />
              <stop offset="100%" stopColor="#030303" />
            </linearGradient>
          </defs>
          <path
            style={{ ...waveLineBase, opacity: hovered ? 1 : 0.6 }}
            d="M0,150 Q50,120 100,150 T200,150 T300,110 T400,180 T500,140 T600,200 T700,100 T800,160 T900,130 T1000,150"
            stroke="url(#wave-grad)"
          />
          <path
            style={{ ...waveLineBase, opacity: hovered ? 0.3 : 0.3 }}
            d="M0,150 Q60,180 120,150 T240,150 T360,190 T480,110 T600,150 T720,180 T840,120 T960,160 T1000,150"
          />
          <path
            style={{ ...waveLineBase, opacity: hovered ? 0.8 : 0.8, strokeWidth: 0.5 }}
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

const ViewportFrame = () => {
  const [navHover, setNavHover] = useState(null);

  const linkStyle = (id) => ({
    color: navHover === id ? '#00E5FF' : '#88888D',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  });

  return (
    <div style={customStyles.viewportFrame}>
      <div style={customStyles.frameTop}>
        <div style={customStyles.sysLabel}>
          <span><span style={customStyles.highlight}>HARMONIC</span>.ORG</span>
          <span>SYS.OP.01</span>
        </div>
        <div style={{ ...customStyles.sysLabel, textAlign: 'right' }}>
          {['INDEX', 'ARCHIVE', 'INFO'].map((item) => (
            <a
              key={item}
              href="#"
              style={linkStyle(item)}
              onMouseEnter={() => setNavHover(item)}
              onMouseLeave={() => setNavHover(null)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div style={customStyles.frameBottom}>
        <div style={customStyles.sysLabel}>
          <span>VOL.04</span>
          <span>[EXPERIMENTAL AUDIO]</span>
        </div>
        <div style={{ ...customStyles.sysLabel, textAlign: 'right' }}>
          <span>ENG // JP</span>
          <span style={customStyles.highlight}>ONLINE</span>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div style={customStyles.wrapper}>
      <header style={customStyles.hero}>
        <img
          src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Abstract Dark Form"
          style={customStyles.heroBgImage}
        />
        <div style={customStyles.heroVignette} />

        <div style={customStyles.heroContent}>
          <div style={customStyles.heroIssue}>
            <h2 style={customStyles.heroIssueH2}>2501</h2>
            <p style={customStyles.heroIssueDesc}>The spectrum is vast and infinite.</p>
          </div>

          <div style={customStyles.heroJp}>共鳴する周波数</div>

          <div style={customStyles.heroTitleContainer}>
            <h1 style={customStyles.heroTitle}>
              Spectral<br />Resonance
            </h1>
          </div>

          <div style={customStyles.heroMetaBottom}>
            <SysLabel>
              <span>H.R.M.N.C.</span>
            </SysLabel>
            <div style={{ textAlign: 'center', flexGrow: 1 }}>
              <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#88888D' }}>EDITION</span>
              <span style={customStyles.heroEditionNum}>4 / 4</span>
            </div>
            <SysLabel>
              <span style={customStyles.highlight}>04.XX.24</span>
            </SysLabel>
          </div>
        </div>
      </header>

      <main style={customStyles.editorialSection}>
        <div style={customStyles.sectionHeader}>
          <h3 style={customStyles.sectionHeaderH3}>Current Frequencies</h3>
          <div style={customStyles.sysLabel}>SORT: CHRONOLOGICAL_</div>
        </div>

        <div style={customStyles.gridContainer}>
          <ArticleCard cardStyle={customStyles.cardFeature}>
            <Crosshair position="tl" />
            <div style={customStyles.cardMeta}>
              <span style={customStyles.cardTag}>INTERVIEW</span>
              <span>[REQ-089-A]</span>
              <span>READ: 12 MIN</span>
            </div>
            <CardImage
              src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Studio Equipment"
            />
            <CardTitle>
              The Architecture<br />of Sub-Bass
            </CardTitle>
            <p style={customStyles.cardExcerpt}>
              Exploring the physical impact of low-frequency oscillation in brutalist performance spaces. An interview with multi-disciplinary artist KODE909.
            </p>
          </ArticleCard>

          <ArticleCard cardStyle={customStyles.cardSecondary}>
            <div style={customStyles.cardMeta}>
              <span style={customStyles.cardTag}>REVIEW</span>
              <span>[LP-VOID]</span>
            </div>
            <CardImage
              src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Abstract Mesh"
            />
            <CardTitle>Synthesis &amp; Decay</CardTitle>
            <p style={customStyles.cardExcerpt}>
              A critical look at the resurgence of tape degradation and granular synthesis in modern ambient works.
            </p>
          </ArticleCard>

          <ArticleCard cardStyle={customStyles.cardTextOnly}>
            <div style={customStyles.cardMeta}>
              <span style={customStyles.cardTag}>ESSAY</span>
              <span>[TXT-011]</span>
            </div>
            <CardTitle style={customStyles.cardTextOnlyTitle}>
              Silence as a<br />Structural<br />Element.
            </CardTitle>
            <p style={customStyles.cardExcerpt}>
              How Japanese Wabi-Sabi philosophy informs the negative space in contemporary minimalist techno sequencing.
            </p>
            <SysLabel style={{ marginTop: '4rem' }}>
              <span style={customStyles.highlight}>AUTHOR: RYUICHI_M.</span>
            </SysLabel>
          </ArticleCard>

          <ArticleCard cardStyle={customStyles.cardTertiary}>
            <div style={customStyles.cardMeta}>
              <span style={customStyles.cardTag}>GEAR</span>
              <span>[HW-MOD]</span>
            </div>
            <CardImage
              src="https://images.unsplash.com/photo-1621360841013-c76831f12282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modular Synth"
              square
            />
            <CardTitle>Patch Notes: 04</CardTitle>
            <p style={customStyles.cardExcerpt}>
              Eurorack system configurations for generative atmospheric soundscapes.
            </p>
          </ArticleCard>

          <WaveformSection />
        </div>
      </main>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=Noto+Serif+JP:wght@400;700&family=Space+Mono:wght@400;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { cursor: crosshair !important; overflow-x: hidden; }
      ::selection { background: #FFFFFF; color: #030303; }
    `;
    document.head.appendChild(style);
    document.body.style.backgroundColor = '#030303';
    document.body.style.color = '#E4E4E6';
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.cursor = 'crosshair';
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router basename="/">
      <div style={{ backgroundColor: '#030303', minHeight: '100vh' }}>
        <ViewportFrame />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;