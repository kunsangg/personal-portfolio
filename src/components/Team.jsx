import React, { useEffect, useRef } from 'react';

export default function Team() {
  const trackRef = useRef(null);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    
    // Duplicate content for seamless infinite marquee
    t.innerHTML += t.innerHTML;
    
    let p = 0;
    let bs = 0.6;
    let sp = bs;
    let dir = -1;
    let lsy = window.scrollY;
    let lsc = Date.now();
    let rafId;

    function am() {
      p += sp * dir;
      t.style.transform = `translateX(${p}px)`;
      const rp = t.scrollWidth / 2;
      
      if (p <= -rp) p += rp;
      if (p >= rp) p -= rp;
      
      rafId = requestAnimationFrame(am);
    }
    
    am();

    const handleScroll = () => {
      const now = Date.now();
      const d = now - lsc;
      const sd = window.scrollY - lsy;
      
      if (sd > 0) dir = -1;
      else if (sd < 0) dir = 1;
      
      const ss = Math.abs(sd) / Math.max(d, 1);
      sp += (bs + ss * 0.25 - sp) * 0.1;
      
      lsy = window.scrollY;
      lsc = now;
    };

    window.addEventListener("scroll", handleScroll);

    const decayInterval = setInterval(() => {
      if (Math.abs(sp - bs) > 0.01) {
        sp += (bs - sp) * 0.05;
      }
    }, 30);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(decayInterval);
    };
  }, []);

  return (
    <section id="team" className="team-section">
      <div className="team-content">
        <div className="team-img-wrapper">
          <img src="/images/deexen-labs-logo.png" alt="Deexen Labs" style={{ objectFit: 'contain', background: '#f5f5f5', padding: '40px' }} />
        </div>
        <div className="team-right">
          <div className="section-label">
            <div className="red-sq"></div>
            <span>The Community</span>
          </div>
          <h3>Deexen Labs —<br />A Global Builder's Hub</h3>
          <p>Deexen Labs is a community of developers and entrepreneurs from across the world who ideate, collaborate, and push each other to ship. Got a startup idea, a technical doubt, or just want to connect with builders who get it?</p>
          <p>We help each other grow — no gatekeeping, no fluff. Just real builders doing real work.</p>
          <a href="https://discord.com/users/kungzanttt" target="_blank" rel="noopener noreferrer" className="join-btn" style={{ marginTop: '24px' }}>
            <span>Join on Discord</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.16 4.4V3.5L8.5 3.5V7.84H7.6V5.03L4.13 8.5L3.5 7.87L6.97 4.4H4.16Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-track" ref={trackRef}>
          <div className="marquee-item">
            <span>React · Tailwind · GSAP</span><span className="sep"></span>
            <span className="ghost">Figma · Photoshop · AE</span><span className="sep"></span>
            <span>Deexen AI</span><span className="sep"></span>
            <span className="ghost">Nesion · Resolio</span><span className="sep"></span>
            <span>Flutter · Ollama · LLM</span><span className="sep"></span>
            <span className="ghost">Deexen Labs</span><span className="sep"></span>
            <span>Debug · Expand · Enhance</span><span className="sep"></span>
          </div>
        </div>
      </div>
    </section>
  );
}