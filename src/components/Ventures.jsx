import React from 'react';

export default function Ventures() {
  return (
    <section id="ventures" className="ventures-section">
      <div className="ventures-inner">
        <div className="section-label">
          <div className="red-sq"></div>
          <span>Ventures & Community</span>
        </div>
        <h2 className="section-h">What I'm <span className="text-accent">Building</span></h2>

        <div className="ventures-grid">
          {/* Deexen AI */}
          <div className="venture-card">
            <div className="venture-logo-area">
              <img src="/images/deexen-ai-logo.png" alt="Deexen AI" className="invert-dark" />
            </div>
            <div className="venture-card-role">Founder</div>
            <div className="venture-card-name">Deexen AI</div>
            <div className="venture-card-desc">A professional AI IDE — Debug, Expand, Enhance. Built for developers who use AI as a weapon, not a crutch. Local-first, fast, and purposeful.</div>
            <div className="venture-badge active"><div className="venture-badge-dot"></div>Active · In Development</div>
          </div>


          {/* Resolio */}
          <div className="venture-card">
            <div className="venture-logo-area">
              <img src="/images/resolio-logo.png" alt="Resolio" className="invert-dark-strong" />
            </div>
            <div className="venture-card-role">Founder</div>
            <div className="venture-card-name">Resolio</div>
            <div className="venture-card-desc">A portfolio building platform with outcome-driven templates. Built so developers and creatives get hired faster — not just look good online.</div>
            <div className="venture-badge building"><div className="venture-badge-dot"></div>Building</div>
          </div>

          {/* Deexen Labs */}
          <div className="venture-card">
            <div className="venture-logo-area">
              <img src="/images/deexen-labs-logo.png" alt="Deexen Labs" className="color-logo" />
            </div>
            <div className="venture-card-role">Founder · Community</div>
            <div className="venture-card-name">Deexen Labs</div>
            <div className="venture-card-desc">A global community of developers and entrepreneurs who ideate, collaborate, and ship together. United by the drive to build real things.</div>
            <div className="venture-badge active"><div className="venture-badge-dot"></div>Active · Open to Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}
