import React, { useEffect, useRef, useState, useCallback } from 'react';
import GridOverlay from './GridOverlay';

const SLIDES = [
  '/images/minecraft-survival-base-render.webp',
  '/images/ancient-city.webp',
  '/images/minecraft-coral.webp',
  '/images/taiga-village.webp',
  '/images/minecraft-tower.webp',
  '/images/minecraft-mods-back.webp',
  '/images/minecraft-vanilla.webp',
];
const INTERVAL = 3500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fillWidth, setFillWidth] = useState(0);
  const trackingRef = useRef(null);
  const cursorRef = useRef(null);
  const [coords, setCoords] = useState({ x: '0000', y: '0000' });
  const timerRef = useRef(null);
  const fillTimerRef = useRef(null);

  const startFill = useCallback(() => {
    setFillWidth(0);
    setTimeout(() => setFillWidth(100), 50);
  }, []);

  const advance = useCallback(() => {
    setCurrent(c => (c + 1) % SLIDES.length);
    startFill();
  }, [startFill]);

  const goTo = useCallback((i) => {
    clearInterval(timerRef.current);
    setCurrent(i);
    startFill();
    timerRef.current = setInterval(advance, INTERVAL);
  }, [advance, startFill]);

  useEffect(() => {
    startFill();
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [advance, startFill]);

  // cursor tracking
  useEffect(() => {
    const area = trackingRef.current;
    const cursor = cursorRef.current;
    if (!area || !cursor) return;
    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setCoords({ x: String(e.clientX).padStart(4, '0'), y: String(e.clientY).padStart(4, '0') });
    };
    const onEnter = () => { cursor.style.opacity = '1'; };
    const onLeave = () => { cursor.style.opacity = '0'; };
    area.addEventListener('mousemove', onMove);
    area.addEventListener('mouseenter', onEnter);
    area.addEventListener('mouseleave', onLeave);
    return () => {
      area.removeEventListener('mousemove', onMove);
      area.removeEventListener('mouseenter', onEnter);
      area.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      {SLIDES.map((src, i) => (
        <div key={src} className={`hero-slide ${i === current ? 'active' : 'inactive'}`}>
          <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}

      {/* top-right counter with progress bar */}
      <div className="hero-counter">
        <span style={{ fontFamily: 'var(--mono)' }}>{String(current + 1).padStart(2, '0')}</span>
        <div className="hero-counter-bar">
          <div className="hero-counter-fill" style={{ width: fillWidth + '%', transition: fillWidth === 0 ? 'none' : `width ${INTERVAL}ms linear` }}></div>
        </div>
        <span style={{ fontFamily: 'var(--mono)' }}>{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

      {/* bottom-right dots */}
      <div className="hero-slide-dots">
        {SLIDES.map((_, i) => (
          <div key={i} className={`hero-slide-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* cursor */}
      <div className="tracking-area" ref={trackingRef}>
        <div className="custom-cursor" ref={cursorRef}>
          <div className="line-vertical"></div>
          <div className="line-horizontal"></div>
          <div className="cursor-dot"></div>
          <div className="coords">
            <div>X: {coords.x}</div>
            <div>Y: {coords.y}</div>
          </div>
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-bottom">
          <div className="hero-left">
            <div className="hero-label">
              <div className="red-sq"></div>
              <span className="hero-label-text">Based in Darjeeling, India — Open to Global Work</span>
            </div>
            <div className="hero-heading-wrapper">
              <h1 className="hero-heading">Kunsang Dorjay</h1>
            </div>
            <div className="hero-heading-wrapper">
              <h1 className="hero-heading accent">
                <svg className="hero-heading-icon" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4L44 40H4L24 4Z" fill="currentColor" />
                </svg>
                Bhutia
              </h1>
            </div>
            <p className="hero-tagline">Frontend Developer · UI/UX Designer · Entrepreneur</p>
          </div>
          <div className="hero-right">
            <div className="scroll-indicator">scroll</div>
          </div>
        </div>
      </div>

      <GridOverlay id="hero-grid" triggerSelector="#hero" />
    </section>
  );
}
