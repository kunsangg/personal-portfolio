import React from 'react';

export default function Stats() {
  return (
    <section className="stats-section" style={{ position: 'relative', padding: '100px 32px', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label">
          <div className="red-sq"></div>
          <span>By the Numbers</span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', marginTop: '40px' }} className="max-md:grid-cols-2 max-sm:grid-cols-1">
          <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1, color: 'var(--accent)' }}>40+</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, marginTop: '8px' }}>Projects Delivered</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>Across 6+ industries</div>
          </div>
          <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1 }}>5</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, marginTop: '8px' }}>Years Active</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>Freelance + Studio work</div>
          </div>
          <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1 }}>12+</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, marginTop: '8px' }}>Happy Clients</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>Long-term partnerships</div>
          </div>
          <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1, color: 'var(--accent)' }}>∞</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 500, marginTop: '8px' }}>Ideas in Motion</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>Always building something</div>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '32px' }} className="max-md:grid-cols-1">
          <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>Current Focus</div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: '1.4rem', marginBottom: '4px' }}>Product Design & Dev</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Building polished SaaS interfaces and brand systems</div>
          </div>
          <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>Tool Stack</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 500 }}>Design</span>
              <span style={{ fontFamily: 'var(--serif)', fontWeight: 700, color: 'var(--accent)' }}>Figma · After Effects</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 500 }}>Dev</span>
              <span style={{ fontFamily: 'var(--serif)', fontWeight: 700 }}>React · Tailwind · GSAP</span>
            </div>
          </div>
        </div>

        {/* Education Block */}
        <div style={{ marginTop: '60px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}>
          <div className="section-label" style={{ marginBottom: '32px' }}>
            <div className="red-sq"></div>
            <span>Education</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="max-md:grid-cols-1">

            {/* University */}
            <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>University</span>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.2 }}>
                Sikkim Manipal Institute of Technology
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                Majitar, Sikkim
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <div style={{ width: '24px', height: '1px', background: 'var(--border)' }}></div>
                <span style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>SMIT · Sikkim Manipal University</span>
              </div>
            </div>

            {/* School */}
            <div style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--text-dim)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>School</span>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.2 }}>
                St. Joseph's School Northpoint
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                Darjeeling, West Bengal
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <div style={{ width: '24px', height: '1px', background: 'var(--border)' }}></div>
                <span style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>ISC · ICSE Board</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}