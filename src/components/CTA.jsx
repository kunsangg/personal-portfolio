import React, { useEffect, useRef } from 'react';

export default function CTA() {
  const engineerBtnRef = useRef(null);
  const driverBtnRef = useRef(null);

  useEffect(() => {
    const eb = engineerBtnRef.current;
    const db = driverBtnRef.current;
    if (!eb || !db) return;

    let s = {
      t: null,
      es: 0, ds: 0,
      eBg: 0, eBo: 20, eT: 124,
      dBg: 0, dBo: 20, dT: 124
    };

    function lerp(a, b, t) { return a + (b - a) * t; }

    let rafId;
    function animateButtons() {
      if (s.t === 'engineer') {
        s.es = lerp(s.es, -13, 0.1);
        s.eBg = lerp(s.eBg, 124, 0.1);
        s.eT = lerp(s.eT, 18, 0.1);
        s.ds = lerp(s.ds, 0, 0.1);
        s.dBg = lerp(s.dBg, 0, 0.1);
        s.dT = lerp(s.dT, 124, 0.1);
      } else if (s.t === 'driver') {
        s.ds = lerp(s.ds, -13, 0.1);
        s.dBg = lerp(s.dBg, 124, 0.1);
        s.dT = lerp(s.dT, 18, 0.1);
        s.es = lerp(s.es, 0, 0.1);
        s.eBg = lerp(s.eBg, 0, 0.1);
        s.eT = lerp(s.eT, 124, 0.1);
      } else {
        s.es = lerp(s.es, 0, 0.1);
        s.ds = lerp(s.ds, 0, 0.1);
        s.eBg = lerp(s.eBg, 0, 0.1);
        s.eT = lerp(s.eT, 124, 0.1);
        s.dBg = lerp(s.dBg, 0, 0.1);
        s.dT = lerp(s.dT, 124, 0.1);
      }

      const bv = Math.round(s.eBg);
      eb.style.backgroundColor = `rgb(${bv}, ${Math.round(bv * 0.86)}, 255)`;
      eb.style.borderColor = `rgba(124, 107, 255, ${0.15 + bv / 400})`;
      eb.querySelector('.button-text').style.color = `rgb(${Math.round(s.eT)}, ${Math.round(s.eT * 0.86)}, 255)`;

      const dbv = Math.round(s.dBg);
      db.style.backgroundColor = `rgb(${dbv}, ${Math.round(dbv * 0.86)}, 255)`;
      db.style.borderColor = `rgba(124, 107, 255, ${0.15 + dbv / 400})`;
      db.querySelector('.button-text').style.color = `rgb(${Math.round(s.dT)}, ${Math.round(s.dT * 0.86)}, 255)`;

      eb.style.transform = `skewX(${s.es}deg)`;
      eb.querySelector('.button-text').style.transform = `skewX(${-s.es}deg)`;
      db.style.transform = `skewX(${s.ds}deg)`;
      db.querySelector('.button-text').style.transform = `skewX(${-s.ds}deg)`;

      rafId = requestAnimationFrame(animateButtons);
    }

    animateButtons();

    const handleEEnter = () => s.t = 'engineer';
    const handleDEnter = () => s.t = 'driver';
    const handleLeave = () => s.t = null;

    eb.addEventListener('mouseenter', handleEEnter);
    eb.addEventListener('mouseleave', handleLeave);
    db.addEventListener('mouseenter', handleDEnter);
    db.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      eb.removeEventListener('mouseenter', handleEEnter);
      eb.removeEventListener('mouseleave', handleLeave);
      db.removeEventListener('mouseenter', handleDEnter);
      db.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section id="cta" className="cta-section">
      <div className="cta-heading">
        Let's build something <em>worth</em><br />remembering
      </div>
      <div className="cta-text">
        Whether you have a product idea, need a design system, or want a creative partner — I'm open to the right projects.
      </div>
      <div className="btn-wrapper">
        <a href="mailto:kunsangdorjay6@gmail.com" className="cta-btn" ref={engineerBtnRef}>
          <span className="button-text">Start a Project</span>
        </a>
        <a href="mailto:kunsangdorjay6@gmail.com" className="cta-btn" ref={driverBtnRef}>
          <span className="button-text">Say Hello</span>
        </a>
      </div>
      <div className="cta-filler"></div>
    </section>
  );
}
