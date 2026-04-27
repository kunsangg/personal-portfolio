import React from 'react';

export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="section-label" style={{ justifyContent: 'center', marginBottom: '32px' }}>
        <div className="red-sq"></div>
        <span>Mindset</span>
      </div>
      <div className="philosophy-quote">
        "Not using AI to its fullest is foolishness. Don't let AI be your{' '}
        <span className="hl">dependence</span> — make it your{' '}
        <span className="hl">weapon</span> to work with 2× intelligence and speed."
      </div>
      <div style={{ marginTop: '24px', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        — Kunsang Dorjay Bhutia
      </div>
    </section>
  );
}
