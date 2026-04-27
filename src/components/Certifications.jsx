import React, { useState } from 'react';

const certs = [
  {
    platform: 'Internship',
    platformBadge: 'badge-internship',
    company: 'Inquisitive Mindspace',
    companyColor: '#8B7FBF',
    title: 'Certificate of Internship — User Experience Design',
    date: 'Jan 10, 2026',
    img: '/images/internship-cert.jpg',
  },
  {
    platform: 'Forage',
    platformBadge: 'badge-forage',
    company: 'Lloyds Banking Group',
    companyColor: '#00A650',
    title: 'UX Design Advanced Job Simulation',
    date: 'Oct 11, 2025',
    img: '/images/Certificate1.png',
  },
  {
    platform: 'Forage',
    platformBadge: 'badge-forage',
    company: 'Tata Consultancy Services',
    companyColor: '#003087',
    title: 'Cybersecurity Analyst Job Simulation',
    date: 'Oct 11, 2025',
    img: '/images/Certificate2.png',
  },
  {
    platform: 'Forage',
    platformBadge: 'badge-forage',
    company: 'Deloitte',
    companyColor: '#86BC25',
    title: 'Cyber Job Simulation',
    date: 'Oct 11, 2025',
    img: '/images/Certificate3.png',
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certifications" className="certs-section">
      <div className="certs-inner">
        <div className="section-label">
          <div className="red-sq"></div>
          <span>Certifications</span>
        </div>
        <h2 className="section-h">Credentials & <span className="text-accent">Recognition</span></h2>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card" key={i} onClick={() => setLightbox(c)}>
              <div className="cert-card-preview">
                <img src={c.img} alt={c.title} loading="lazy" />
              </div>
              <div className="cert-card-body">
                <div className="cert-badges">
                  <span className={`cert-platform-badge ${c.platformBadge}`}>{c.platform}</span>
                  <span className="cert-company-badge">
                    <span className="cert-company-dot" style={{ background: c.companyColor }}></span>
                    {c.company}
                  </span>
                </div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-meta">
                  <div className="cert-date">{c.date}</div>
                  <div className="cert-view-hint">
                    View
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M4.16 4.4V3.5L8.5 3.5V7.84H7.6V5.03L4.13 8.5L3.5 7.87L6.97 4.4H4.16Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <div className="cert-lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="cert-lightbox-bar">
              <div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'.58rem', color:'var(--muted)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'4px' }}>{lightbox.company}</div>
                <div style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'1rem', color:'var(--text)' }}>{lightbox.title}</div>
              </div>
              <div className="cert-lightbox-close" onClick={() => setLightbox(null)}>Close ×</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
