import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  const maskAreaRef = useRef(null);
  const cursorMainRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const s = spotlightRef.current;
    if (!s) return;
    const handleMouseMove = (e) => {
      s.style.setProperty('--mouse-x', e.clientX + 'px');
      s.style.setProperty('--mouse-y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const a = maskAreaRef.current;
    const mc = cursorMainRef.current;
    const d = dotsRef.current;
    if (!a || !mc || !d) return;

    let r = a.getBoundingClientRect();
    let tx = r.width / 2, ty = r.height / 2;
    let x = tx, y = ty;
    let ins = false, it = null;
    let rafId;

    const onEnter = () => { ins = true; };
    const onLeave = () => { ins = false; d.style.opacity = '0'; };
    
    const onMove = (e) => {
      r = a.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      d.style.opacity = '0.19';
      
      clearTimeout(it);
      it = setTimeout(() => { d.style.opacity = '0'; }, 120);

      if (!ins) return;

      // Direct DOM creation for performance of trails
      const t = document.createElement('div');
      t.className = 'trail';
      t.style.left = tx + 'px';
      t.style.top = ty + 'px';
      a.appendChild(t);
      
      setTimeout(() => {
        t.style.transform = 'translate(-50%,-50%) scale(0.6)';
        t.style.opacity = '0';
        setTimeout(() => t.remove(), 700);
      }, 10);
    };

    function ac() {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      mc.style.left = x + 'px';
      mc.style.top = y + 'px';
      if (ins) {
        d.style.setProperty('--mx', x + 'px');
        d.style.setProperty('--my', y + 'px');
      }
      rafId = requestAnimationFrame(ac);
    }

    a.addEventListener('mouseenter', onEnter);
    a.addEventListener('mouseleave', onLeave);
    a.addEventListener('mousemove', onMove);
    ac();

    return () => {
      a.removeEventListener('mouseenter', onEnter);
      a.removeEventListener('mouseleave', onLeave);
      a.removeEventListener('mousemove', onMove);
      clearTimeout(it);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div id="spotlight-section" ref={spotlightRef}></div>
      <div className="about-bg-pattern"></div>
      
      <div className="mask-area" ref={maskAreaRef}>
        <div className="about-wrapper">
          <div className="section-label"><div className="red-sq"></div><span>About Me</span></div>
          <div className="about-heading-sm">Who am I?</div>
          <h2 className="about-heading-lg">
            I Design <span className="text-accent">Experiences,</span><br />
            Building Interfaces<br />
            That Feel Alive
          </h2>
          <div className="about-text">
            I'm Kunsang Dorjay Bhutia — a multidisciplinary creative from Darjeeling, building at the intersection of design, code, and AI. Frontend Developer, UI/UX Designer, Graphic Designer, Video Editor, and Entrepreneur. I founded Deexen AI, and built Resolio. Every project starts with intent and ends with impact.
          </div>
          <div className="about-stats">
            <div>
              <div className="about-stat-val">40+</div>
              <div className="about-stat-label">Projects Shipped</div>
            </div>
            <div>
              <div className="about-stat-val">3</div>
              <div className="about-stat-label">Ventures Founded</div>
            </div>
            <div>
              <div className="about-stat-val">∞</div>
              <div className="about-stat-label">Ideas in Queue</div>
            </div>
          </div>
        </div>
        <div className="dots" ref={dotsRef}></div>
        <div id="cursor-main" ref={cursorMainRef}></div>
      </div>
    </section>
  );
}