import React from 'react';

const disciplines = [
  {
    num: '[01]',
    title: 'Design',
    desc: 'UI/UX and graphic design are how I shape perception. From wireframes to polished interfaces — I obsess over hierarchy, rhythm, and the invisible tension that makes a layout feel inevitable. Figma is my canvas.',
    img: '/images/design-work.jpg',
    alt: 'Graphic design work',
  },
  {
    num: '[02]',
    title: 'Build',
    desc: 'Component-driven React frontends that match design intent exactly. I care deeply about animation, interaction quality, and code that a designer would actually be proud of.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=85&auto=format&fit=crop',
    alt: 'Code editor',
  },
  {
    num: '[03]',
    title: 'Create',
    desc: 'Motion and video in After Effects — every cut, transition and frame timed with intent. Media Encoder for compression, Topaz AI for quality enhancement. Content that holds attention from first frame to last.',
    img: '/images/after-effects.png',
    alt: 'Adobe After Effects timeline',
  },
];

export default function Values() {
  return (
    <section id="values" className="values-section">
      <div className="values-wrapper">
        <div className="values-left">
          <div className="section-label">
            <div className="red-sq"></div>
            <span>What I Do</span>
          </div>
          <div className="values-left-heading" style={{ marginTop: '20px' }}>
            My Core<br />Disciplines
          </div>
          <p style={{ fontSize: '.82rem', lineHeight: 1.8, color: 'var(--text-dim)', marginTop: '22px', maxWidth: '300px', fontWeight: 400 }}>
            Three pillars that define how I approach every project — from a single icon to a full product ecosystem.
          </p>
          <div style={{ marginTop: '36px' }}>
            {[['40+', 'Projects Shipped'], ['3', 'Ventures'], ['5+', 'Disciplines']].map(([v, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: '12px', padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1.7rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-.03em' }}>{v}</span>
                <span style={{ fontSize: '.58rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="values-right">
          {disciplines.map((d) => (
            <div className="values-card" key={d.num}>
              <div className="values-card-num">{d.num}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <div className="values-card-img">
                <img src={d.img} alt={d.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
