import React, { useEffect, useRef } from 'react';

export default function Showcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const w = sectionRef.current;
    if (!w) return;
    
    const ch = w.querySelector('.showcase-crosshair');
    const ib = w.querySelectorAll('.showcase-info-block');
    let ia = false;

    const checkCrosshair = () => {
      const r = w.getBoundingClientRect();
      const c = window.innerHeight / 2;
      const ic = c >= r.top && c <= r.bottom;
      
      if (ic && !ia) {
        ia = true;
        ch.classList.add('visible');
        ib.forEach(b => {
          setTimeout(() => b.classList.add('visible'), 700 + (+b.dataset.delay || 0));
        });
      }
      
      if (!ic && ia) {
        ia = false;
        ch.classList.remove('visible');
        ib.forEach(b => b.classList.remove('visible'));
      }
    };

    window.addEventListener("scroll", checkCrosshair);
    window.addEventListener("resize", checkCrosshair);
    checkCrosshair();

    return () => {
      window.removeEventListener("scroll", checkCrosshair);
      window.removeEventListener("resize", checkCrosshair);
    };
  }, []);

  return (
    <section id="showcase" className="showcase-section" ref={sectionRef}>
      <div className="showcase-img">
        <img src="/images/deexen-ai-banner.png" alt="Deexen AI" style={{ objectFit: 'contain', background: '#111' }} />
      </div>
      
      <div className="showcase-crosshair">
        <div className="showcase-crosshair-line-h"></div>
        <div className="showcase-crosshair-line-v"></div>
      </div>
      
      <div className="showcase-overlay">
        <div className="showcase-info">
          <div className="showcase-info-block" data-delay="0">
            <div className="showcase-info-title">Deexen AI</div>
            <div className="showcase-info-desc">Professional AI IDE<br />Debug · Expand · Enhance</div>
            <div className="showcase-info-num">01 / 02</div>
          </div>
          <div className="showcase-info-block" data-delay="400">
            <div className="showcase-info-title">Status</div>
            <div className="showcase-info-desc">Founder & Lead Builder<br />Local-first · In Development</div>
            <div className="showcase-info-num">02 / 02</div>
          </div>
        </div>
      </div>
    </section>
  );
}