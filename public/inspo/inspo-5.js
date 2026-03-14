import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const styles = {
  root: {
    '--bg-void': '#030405',
    '--bg-surface': '#0a0d12',
    '--bg-elevated': '#11151c',
    '--text-stark': '#ffffff',
    '--text-muted': '#8a9ba8',
    '--text-ghost': '#45525e',
    '--spectral-blue': '#295a88',
    '--spectral-cyan': '#7db4d6',
    '--border-faint': 'rgba(138, 155, 168, 0.15)',
    '--space-unit': '8px',
    '--grid-gap': '24px',
  }
};

const Nav = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: 'calc(8px * 4) calc(8px * 6)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 100,
    mixBlendMode: 'difference',
  };

  const navLeftStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const navRightStyle = {
    display: 'flex',
    gap: 'calc(8px * 6)',
  };

  const uiTextStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 400,
    color: '#8a9ba8',
  };

  const systemCodeStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.55rem',
    color: '#45525e',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  };

  const navLinkStyle = (id) => ({
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 400,
    color: '#8a9ba8',
    cursor: 'pointer',
    textDecoration: 'none',
  });

  const navLinkUnderlineStyle = (id) => ({
    content: "''",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '1px',
    background: 'currentColor',
    transform: hoveredLink === id ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: hoveredLink === id ? 'left' : 'right',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return (
    <nav style={navStyle}>
      <div style={navLeftStyle}>
        <span style={uiTextStyle}>The Harmonic</span>
        <span style={systemCodeStyle}>Vol. IV — Issue 042</span>
      </div>
      <div style={navRightStyle}>
        {['Editorial', 'Audio Index', 'Manifesto'].map((label, i) => (
          <a
            key={label}
            href="#"
            style={navLinkStyle(i)}
            onMouseEnter={() => setHoveredLink(i)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={(e) => e.preventDefault()}
          >
            {label}
            <span style={navLinkUnderlineStyle(i)} />
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroStyle = {
    height: '100vh',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const heroImgContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  };

  const heroImgOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(3,4,5,0.2) 0%, rgba(3,4,5,0.7) 60%, rgba(3,4,5,1) 100%)',
    zIndex: 1,
  };

  const heroImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.8) contrast(1.2) grayscale(0.2) sepia(0.3) hue-rotate(180deg) saturate(1.5)',
    transform: 'scale(1.05)',
  };

  const heroContentStyle = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-5vh',
  };

  const heroTitleJpStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: '1.2rem',
    letterSpacing: '0.5em',
    marginBottom: '1rem',
    opacity: 0.8,
    marginLeft: '0.5em',
    color: '#ffffff',
  };

  const heroTitleStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: 'clamp(4rem, 10vw, 8rem)',
    lineHeight: 0.9,
    letterSpacing: '-0.02em',
    marginBottom: '0.2em',
    textShadow: '0 10px 30px rgba(0,0,0,0.5)',
    color: '#ffffff',
  };

  const heroSubtitleStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    color: '#8a9ba8',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginTop: '1rem',
  };

  const heroCreditsStyle = {
    position: 'absolute',
    bottom: '6vh',
    zIndex: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  };

  const uiTextBase = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 400,
  };

  const heroUrlStyle = {
    position: 'absolute',
    bottom: '3vh',
    zIndex: 10,
    letterSpacing: '0.4em',
    opacity: 0.3,
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    color: '#ffffff',
  };

  return (
    <header style={heroStyle}>
      <div style={heroImgContainerStyle}>
        <div style={heroImgOverlayStyle} />
        <img
          src="https://images.unsplash.com/photo-1620216664971-1557997a48d0?q=80&w=2574&auto=format&fit=crop"
          alt="Abstract translucent film"
          style={heroImgStyle}
        />
      </div>

      <div style={heroContentStyle}>
        <h2 style={heroTitleJpStyle}>共鳴</h2>
        <h1 style={heroTitleStyle}>The Harmonic</h1>
        <p style={heroSubtitleStyle}>Architecture of Sound</p>
      </div>

      <div style={heroCreditsStyle}>
        <span style={{ ...uiTextBase, color: '#8a9ba8', opacity: 0.4 }}>CURATION</span>
        <span style={{ ...uiTextBase, color: '#ffffff', opacity: 0.6 }}>ELARA VANCE</span>
        <span style={{ ...uiTextBase, color: '#ffffff', opacity: 0.6 }}>JULIAN KORD</span>
        <span style={{ ...uiTextBase, color: '#8a9ba8', opacity: 0.4 }}>SOUND DESIGN</span>
        <span style={{ ...uiTextBase, color: '#ffffff', opacity: 0.6 }}>RYO ONO</span>
      </div>

      <div style={heroUrlStyle}>THEHARMONIC.NET</div>
    </header>
  );
};

const Card = ({ imgSrc, imgAlt, metaLabel, metaCode, title, excerpt, featured, titleSize }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  };

  const cardImgWrapStyle = {
    width: '100%',
    aspectRatio: '4/5',
    overflow: 'hidden',
    marginBottom: 'calc(8px * 3)',
    background: '#0a0d12',
    position: 'relative',
  };

  const cardImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: hovered
      ? 'grayscale(0) contrast(1.1) brightness(0.9) sepia(0.2) hue-rotate(180deg) saturate(1.2)'
      : 'grayscale(1) contrast(1.1) brightness(0.7)',
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'filter 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const cardMetaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 'calc(8px * 1.5)',
    alignItems: 'baseline',
  };

  const uiTextStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 400,
    color: '#8a9ba8',
  };

  const systemCodeStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.55rem',
    color: '#45525e',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  };

  const cardTitleStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: titleSize || '1.8rem',
    lineHeight: 1.1,
    marginBottom: 'calc(8px * 1.5)',
    color: hovered ? '#7db4d6' : '#ffffff',
    transition: 'color 0.3s ease',
  };

  const cardExcerptStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '0.85rem',
    color: '#8a9ba8',
    lineHeight: 1.6,
    letterSpacing: '0.02em',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  return (
    <article
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {imgSrc && (
        <div style={cardImgWrapStyle}>
          <img src={imgSrc} alt={imgAlt} style={cardImgStyle} />
        </div>
      )}
      <div style={cardMetaStyle}>
        <span style={uiTextStyle}>{metaLabel}</span>
        <span style={systemCodeStyle}>{metaCode}</span>
      </div>
      <h3 style={cardTitleStyle}>{title}</h3>
      {excerpt && <p style={cardExcerptStyle}>{excerpt}</p>}
    </article>
  );
};

const WaveformDivider = () => {
  const wrapStyle = {
    width: '100%',
    height: '80px',
    margin: 'calc(8px * 15) 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
  };

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', stroke: '#295a88', strokeWidth: 0.5, fill: 'none' }}>
        <path d="M0,50 Q10,20 20,50 T40,50 T60,50 T80,50 T100,50 T120,50 T140,80 T160,50 T180,50 T200,50 T220,10 T240,50 T260,90 T280,50 T300,50 T320,50 T340,30 T360,50 T380,50 T400,70 T420,50 T440,50 T460,50 T480,0 T500,100 T520,50 T540,50 T560,50 T580,20 T600,50 T620,50 T640,50 T660,80 T680,50 T700,50 T720,50 T740,10 T760,50 T780,90 T800,50 T820,50 T840,50 T860,30 T880,50 T900,50 T920,70 T940,50 T960,50 T980,50 T1000,50" />
        <path
          d="M0,50 Q15,40 30,50 T60,50 T90,50 T120,50 T150,50 T180,70 T210,50 T240,50 T270,50 T300,20 T330,50 T360,80 T390,50 T420,50 T450,50 T480,40 T510,50 T540,50 T570,60 T600,50 T630,50 T660,50 T690,10 T720,90 T750,50 T780,50 T810,50 T840,30 T870,50 T900,50 T930,50 T960,70 T990,50 T1000,50"
          style={{ stroke: '#7db4d6', strokeWidth: 0.2, opacity: 0.5 }}
        />
      </svg>
    </div>
  );
};

const IndexRow = ({ num, genre, title, artist, duration }) => {
  const [hovered, setHovered] = useState(false);

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 4fr 1fr 1fr',
    padding: hovered ? 'calc(8px * 2.5) 0 calc(8px * 2.5) calc(8px * 2)' : 'calc(8px * 2.5) 0',
    borderBottom: '1px solid rgba(138, 155, 168, 0.15)',
    alignItems: 'baseline',
    background: hovered ? '#0a0d12' : 'transparent',
    transition: 'background 0.3s ease, padding 0.3s ease',
    cursor: 'pointer',
  };

  const cellTransform = {
    transform: hovered ? 'translateX(8px)' : 'translateX(0)',
    transition: 'transform 0.3s ease',
    display: 'inline-block',
  };

  return (
    <div
      style={rowStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ ...cellTransform, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#45525e' }}>{num}</span>
      <span style={{ ...cellTransform, fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 400, color: '#7db4d6' }}>{genre}</span>
      <span style={{ ...cellTransform, fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '1.2rem', color: '#ffffff' }}>{title}</span>
      <span style={{ ...cellTransform, fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8a9ba8', textAlign: 'right' }}>{artist}</span>
      <span style={{ ...cellTransform, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#45525e', textAlign: 'right' }}>{duration}</span>
    </div>
  );
};

const FootNavLink = ({ label }) => {
  const [hovered, setHovered] = useState(false);

  const linkStyle = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 400,
    color: '#8a9ba8',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '1px',
    background: 'currentColor',
    transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: hovered ? 'left' : 'right',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <a
      href="#"
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => e.preventDefault()}
    >
      {label}
      <span style={underlineStyle} />
    </a>
  );
};

const Footer = () => {
  const footerStyle = {
    padding: 'calc(8px * 10) calc(8px * 6)',
    background: '#030405',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '1px solid rgba(138, 155, 168, 0.15)',
    marginTop: 'calc(8px * 10)',
  };

  const footBrandStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const footLinksStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 'calc(8px * 8)',
  };

  const footColStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc(8px * 2)',
  };

  return (
    <footer style={footerStyle}>
      <div style={footBrandStyle}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '2rem', color: '#ffffff' }}>The Harmonic</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#45525e', letterSpacing: '0.2em', textTransform: 'uppercase' }}>© 2024 / TOKYO — BERLIN — LONDON</span>
      </div>
      <div style={footLinksStyle}>
        <div style={footColStyle}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 400, color: '#45525e', marginBottom: '8px' }}>Index</span>
          <FootNavLink label="Essays" />
          <FootNavLink label="Interviews" />
          <FootNavLink label="Releases" />
        </div>
        <div style={footColStyle}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 400, color: '#45525e', marginBottom: '8px' }}>Info</span>
          <FootNavLink label="About" />
          <FootNavLink label="Submissions" />
          <FootNavLink label="Imprint" />
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const mainStyle = {
    position: 'relative',
    zIndex: 20,
    background: '#030405',
    padding: 'calc(8px * 12) calc(8px * 6)',
  };

  const sectionHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 'calc(8px * 2)',
    borderBottom: '1px solid rgba(138, 155, 168, 0.15)',
    marginBottom: 'calc(8px * 8)',
  };

  const uiTextStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: 400,
    color: '#8a9ba8',
  };

  const systemCodeStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.55rem',
    color: '#45525e',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '24px',
  };

  const indexSectionStyle = {
    marginTop: 'calc(8px * 20)',
    borderTop: '1px solid rgba(138, 155, 168, 0.15)',
    paddingTop: 'calc(8px * 8)',
  };

  const audioArchiveSectionHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 'calc(8px * 2)',
    borderBottom: '1px solid rgba(138, 155, 168, 0.15)',
    marginBottom: 'calc(8px * 8)',
  };

  return (
    <>
      <main style={mainStyle}>
        <div style={sectionHeaderStyle}>
          <span style={uiTextStyle}>Latest Transmissions</span>
          <span style={systemCodeStyle}>SRC: 001.DIR</span>
        </div>

        <div style={gridStyle}>
          <div style={{ gridColumn: '1 / 8' }}>
            <Card
              imgSrc="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop"
              imgAlt="Synthesizer cables"
              metaLabel="Interview — 04.12.24"
              metaCode="FREQ: 432HZ"
              title="Echoes in the brutalist void: A conversation with Alva Noto."
              excerpt="Exploring the intersection of architectural scale and microscopic sound design. How spatial constraints define the boundaries of modern ambient composition and digital degradation."
            />
          </div>

          <div style={{ gridColumn: '9 / 13', marginTop: '15vw' }}>
            <Card
              imgSrc="https://images.unsplash.com/photo-1601002361136-2eb84e565979?q=80&w=2070&auto=format&fit=crop"
              imgAlt="Abstract architectural dark"
              metaLabel="Essay — 04.10.24"
              metaCode="RD_TIME: 8 MIN"
              title="The aesthetic of tape hiss."
              excerpt="Why the physical artifacts of obsolete recording mediums remain culturally vital in an era of pristine digital synthesis."
            />
          </div>

          <div style={{ gridColumn: 'span 4', marginTop: 'calc(8px * 8)' }}>
            <Card
              metaLabel="Review"
              metaCode="004A"
              title="Sub-bass and physical trauma."
              excerpt="Analyzing the latest EP from the Berlin underground, where sound becomes a tactile, architectural force."
              titleSize="1.4rem"
            />
          </div>

          <div style={{ gridColumn: 'span 4', marginTop: 'calc(8px * 8)' }}>
            <Card
              metaLabel="Hardware"
              metaCode="004B"
              title="Modular synthesis as meditation."
              excerpt="The therapeutic repetition of patching cables and the philosophy of generative control."
              titleSize="1.4rem"
            />
          </div>

          <div style={{ gridColumn: 'span 4', marginTop: 'calc(8px * 8)' }}>
            <Card
              metaLabel="Gallery"
              metaCode="004C"
              title="Visualizing frequencies."
              excerpt="A curated exhibition of oscilloscope photography from the 1970s experimental scene."
              titleSize="1.4rem"
            />
          </div>
        </div>

        <WaveformDivider />

        <section style={indexSectionStyle}>
          <div style={audioArchiveSectionHeader}>
            <span style={uiTextStyle}>Audio Archive // Volume IV</span>
            <span style={systemCodeStyle}>BPM: VARIOUS // CH: 2.0</span>
          </div>

          <div>
            {[
              { num: 'CAT_014', genre: 'Ambient / Drone', title: 'Structure I: Glass', artist: 'Vance & Kord', duration: '14:02' },
              { num: 'CAT_015', genre: 'Generative', title: 'Algorithmic Decay', artist: 'System.Null', duration: '08:45' },
              { num: 'CAT_016', genre: 'Industrial / Noise', title: 'Iron Lung', artist: 'Møl', duration: '04:33' },
              { num: 'CAT_017', genre: 'Minimal Synth', title: 'Voltage Controlled Tension', artist: 'A. Noto', duration: '11:15' },
              { num: 'CAT_018', genre: 'Field Recording', title: 'Kyoto Subway 4AM', artist: 'R. Ono', duration: '22:10' },
            ].map((row) => (
              <IndexRow key={row.num} {...row} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@100;300;400&display=swap');
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        background-color: #030405;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        line-height: 1.5;
        overflow-x: hidden;
        cursor: crosshair;
      }

      ::selection {
        background: #295a88;
        color: #ffffff;
      }

      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <div style={{ background: '#030405', minHeight: '100vh', color: '#ffffff' }}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomePage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;