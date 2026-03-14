import React, { useState, useEffect } from 'react';

const customStyles = {
  root: {
    '--bg': '#030303',
    '--surface': '#0a0a0a',
    '--fg': '#f4f4f4',
    '--fg-muted': '#737373',
    '--fg-dim': '#3a3a3a',
    '--border': 'rgba(244, 244, 244, 0.12)',
    '--spectral-blue': '#2b45ff',
    '--spectral-violet': '#8a2bff',
  }
};

const WaveBar = ({ style = {} }) => (
  <div className="wave-bar" style={style}></div>
);

const WaveformMini = ({ bars = [] }) => (
  <div className="waveform-mini">
    {bars.map((style, i) => (
      <WaveBar key={i} style={style} />
    ))}
  </div>
);

const DirectoryItem = ({ label, val }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="dir-item mono-s"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
    >
      <span
        className="dir-item__label"
        style={{ transition: 'color 0.3s', color: hovered ? '#f4f4f4' : '#737373' }}
      >{label}</span>
      <span
        className="dir-item__val"
        style={{ color: hovered ? '#2b45ff' : '#737373' }}
      >{val}</span>
    </div>
  );
};

const Article = ({ id, subject, loc, description, title, titleItalic, image, alt, waveBars }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gap: '2rem',
        alignItems: 'stretch',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(244, 244, 244, 0.12)',
          paddingTop: '1rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }} className="mono-s">
          <span>{id}</span>
          <span style={{ color: '#f4f4f4' }}>{subject}</span>
          <span>{loc}</span>
          <br />
          <span>{description}</span>
        </div>

        <h2
          className="display-m"
          style={{
            marginTop: '1.5rem',
            transition: 'color 0.4s ease',
            color: hovered ? '#2b45ff' : '#f4f4f4',
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          {title}
          {titleItalic && (
            <><br /><span style={{ fontStyle: 'italic' }}>{titleItalic}</span></>
          )}
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            height: '12px',
            marginTop: 'auto',
            opacity: hovered ? 1 : 0.4,
            transition: 'opacity 0.3s ease',
          }}
        >
          {waveBars.map((bar, i) => (
            <div
              key={i}
              style={{
                width: '1px',
                background: hovered ? '#8a2bff' : '#f4f4f4',
                height: bar.height || '4px',
                animation: `wave-anim ${bar.duration || '1s'} ease-in-out ${bar.delay || '0s'} infinite alternate`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        />
      </div>
    </article>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

      * { box-sizing: border-box; margin: 0; padding: 0; }

      ::selection { background: #2b45ff; color: #f4f4f4; }

      body {
        background-color: #030303;
        color: #f4f4f4;
        font-family: 'Space Mono', monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        line-height: 1.4;
        padding: 2rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .mono-s {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #737373;
      }

      .mono-m {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.02em;
      }

      .display-l {
        font-family: 'Instrument Serif', serif;
        font-size: clamp(4rem, 10vw, 9rem);
        line-height: 0.9;
        font-weight: 400;
        letter-spacing: -0.02em;
      }

      .display-m {
        font-family: 'Instrument Serif', serif;
        font-size: clamp(2rem, 4vw, 3.5rem);
        line-height: 1.05;
        font-weight: 400;
      }

      @keyframes pulse {
        0% { transform: scale(1) translate(0, 0); opacity: 0.4; }
        100% { transform: scale(1.1) translate(20px, -20px); opacity: 0.7; }
      }

      @keyframes wave-anim {
        0% { height: 2px; }
        100% { height: 12px; }
      }

      .hero__glow-1 {
        width: 50vw;
        height: 50vw;
        background: radial-gradient(circle, #2b45ff 0%, transparent 70%);
        top: 10%;
        left: 10%;
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.6;
        animation: pulse 8s infinite alternate ease-in-out;
      }

      .hero__glow-2 {
        width: 40vw;
        height: 40vw;
        background: radial-gradient(circle, #8a2bff 0%, transparent 70%);
        bottom: 10%;
        right: 10%;
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.6;
        animation: pulse 8s infinite alternate ease-in-out;
        animation-delay: -4s;
      }

      .floating-tag {
        position: absolute;
        font-family: 'Space Mono', monospace;
        font-size: 0.65rem;
        color: #f4f4f4;
        display: flex;
        align-items: center;
        gap: 6px;
        z-index: 20;
        text-shadow: 0 0 10px rgba(0,0,0,0.8);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .floating-tag::before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        background: #f4f4f4;
        border-radius: 50%;
        box-shadow: 0 0 8px 2px #2b45ff;
        flex-shrink: 0;
      }

      .vertical-axis {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        position: absolute;
        left: 0.5rem;
        top: 8rem;
        color: #3a3a3a;
        letter-spacing: 0.2em;
        font-size: 0.65rem;
        text-transform: uppercase;
        z-index: 5;
      }

      .sys-header__action:hover {
        color: #2b45ff;
      }

      @media (max-width: 1024px) {
        .editorial-grid { grid-template-columns: 1fr !important; }
        .directory-aside { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(244,244,244,0.12) !important; padding-top: 4rem !important; }
        .article-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        .article-meta { border-top: none !important; padding-top: 0 !important; border-left: 1px solid rgba(244,244,244,0.12) !important; padding-left: 1rem !important; }
        .article-list-pad { padding-left: 0 !important; }
        .hero__glow-1 { width: 80vw !important; height: 80vw !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const articles = [
    {
      id: 'ID: 044-A',
      subject: 'Subject: Ryoji Ikeda',
      loc: 'Loc: Kraftwerk Berlin',
      description: 'Data streams translated into blinding monochrome architecture. The physical weight of pure sine waves.',
      title: 'Calculus of Light',
      titleItalic: null,
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Abstract high contrast light',
      waveBars: [
        { height: '4px', delay: '0s', duration: '1s' },
        { height: '8px', delay: '0.1s', duration: '1s' },
        { height: '12px', delay: '0.2s', duration: '1s' },
        { height: '6px', delay: '0.3s', duration: '1s' },
        { height: '10px', delay: '0.4s', duration: '1s' },
        { height: '4px', delay: '0.5s', duration: '1s' },
      ],
    },
    {
      id: 'ID: 045-B',
      subject: 'Subject: Burial & Space',
      loc: 'Loc: South London Void',
      description: 'Crackling vinyl artifacts and the ghosts of pirate radio. Echoes trapped in the urban liminality.',
      title: 'Untrue',
      titleItalic: 'Geographies',
      image: 'https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dark atmospheric street',
      waveBars: [
        { height: '4px', delay: '0s', duration: '2s' },
        { height: '8px', delay: '0.1s', duration: '1.5s' },
        { height: '12px', delay: '0.2s', duration: '1s' },
        { height: '6px', delay: '0.3s', duration: '1s' },
        { height: '10px', delay: '0.4s', duration: '0.8s' },
        { height: '4px', delay: '0.5s', duration: '1s' },
      ],
    },
  ];

  const directoryItems = [
    { label: 'Ambient / Drone', val: '01' },
    { label: 'Industrial Techno', val: '02' },
    { label: 'Glitch & Noise', val: '03' },
    { label: 'Deconstructed Club', val: '04' },
  ];

  return (
    <div
      style={{
        border: '1px solid rgba(244, 244, 244, 0.12)',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: '#0a0a0a',
        minHeight: '100vh',
      }}
    >
      {/* Vertical Axis */}
      <div className="vertical-axis mono-s">
        SYSTEMIC OBSERVATION OF UNDERGROUND PHENOMENA
      </div>

      {/* Header */}
      <header
        className="mono-s"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid rgba(244, 244, 244, 0.12)',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 10,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ color: '#f4f4f4' }}>Platform</span>
          <span className="mono-m" style={{ color: '#f4f4f4' }}>The Harmonic</span>
        </div>
        <span style={{ color: 'rgba(244,244,244,0.12)', userSelect: 'none', fontWeight: 300 }}>|</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span>Freq Spectrum</span>
          <span>10Hz—22kHz</span>
        </div>
        <span style={{ color: 'rgba(244,244,244,0.12)', userSelect: 'none', fontWeight: 300 }}>|</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span>Curator</span>
          <span>Null_Sector</span>
        </div>
        <span style={{ color: 'rgba(244,244,244,0.12)', userSelect: 'none', fontWeight: 300 }}>|</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span>Vol-</span>
          <span>085</span>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div
          className="sys-header__action"
          style={{ display: 'flex', flexDirection: 'column', gap: '2px', cursor: 'pointer', transition: 'color 0.3s ease' }}
        >
          <span>Index: Aural Brutalism</span>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(244, 244, 244, 0.12)',
        }}
      >
        <img
          src="https://images.pexels.com/photos/17441221/pexels-photo-17441221.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Atmospheric liminal architecture"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
            filter: 'grayscale(100%) contrast(1.2)',
            mixBlendMode: 'luminosity',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <div className="hero__glow-1"></div>
          <div className="hero__glow-2"></div>
        </div>

        <div className="floating-tag" style={{ top: '30%', left: '25%' }}>
          OBJ: 01 <br /> RES: HIGH
        </div>
        <div className="floating-tag" style={{ top: '60%', right: '20%' }}>
          LV. 99 <br /> FLUX
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="mono-s"
            style={{ marginBottom: '1rem', letterSpacing: '0.4em', color: '#737373' }}
          >
            ARCHIVE ZERO
          </div>
          <h1
            className="display-l"
            style={{
              color: '#f4f4f4',
              textShadow: '0 0 40px rgba(255,255,255,0.2)',
              mixBlendMode: 'overlay',
            }}
          >
            THE <br />
            <span style={{ fontStyle: 'italic' }}>HARMONIC</span>
          </h1>
        </div>
      </section>

      {/* Editorial Section */}
      <section
        className="editorial-grid"
        style={{
          padding: '4rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '4rem',
          position: 'relative',
        }}
      >
        {/* Left accent line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '1px',
            height: '100%',
            background: 'rgba(244, 244, 244, 0.12)',
            marginLeft: 'calc(1.5rem + 3vw)',
          }}
        ></div>

        {/* Article List */}
        <div
          className="article-list-pad"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8rem',
            paddingLeft: 'calc(3vw + 2rem)',
          }}
        >
          {articles.map((article, i) => (
            <Article key={i} {...article} />
          ))}
        </div>

        {/* Directory Aside */}
        <aside
          className="directory-aside"
          style={{
            borderLeft: '1px solid rgba(244, 244, 244, 0.12)',
            paddingLeft: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              className="mono-s"
              style={{
                borderBottom: '1px solid rgba(244, 244, 244, 0.12)',
                paddingBottom: '0.25rem',
              }}
            >
              FREQUENCY REGISTRY
            </div>
            {directoryItems.map((item, i) => (
              <DirectoryItem key={i} label={item.label} val={item.val} />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            <div
              className="mono-s"
              style={{
                borderBottom: '1px solid rgba(244, 244, 244, 0.12)',
                paddingBottom: '0.25rem',
              }}
            >
              SYSTEM STATUS
            </div>
            <div className="mono-s" style={{ color: '#f4f4f4', lineHeight: 1.6 }}>
              Nodes Active: 1,024<br />
              Signal-to-Noise: Optimal<br />
              Resonance: Found
            </div>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer
        className="mono-s"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem',
          borderTop: '1px solid rgba(244, 244, 244, 0.12)',
          marginTop: 'auto',
        }}
      >
        <div>2025 10/24</div>
        <div
          style={{
            border: '1px solid #f4f4f4',
            borderRadius: '40px',
            padding: '4px 24px',
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
            color: '#f4f4f4',
          }}
        >
          H
        </div>
      </footer>
    </div>
  );
};

export default App;