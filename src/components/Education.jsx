import React, { useRef, useEffect } from 'react';

const institutions = [
  {
    type: 'University · Engineering',
    name: 'Sikkim Manipal Institute of Technology',
    location: 'Majitar, East Sikkim — Sikkim Manipal University',
    detail: 'B.Tech · Computer Science & Engineering',
    img: '/images/smit.jpg',
    label: 'SMIT',
  },
  {
    type: 'School · ISC / ICSE Board',
    name: "St. Joseph's School Northpoint",
    location: 'Darjeeling, West Bengal',
    detail: 'ISC Board · Class XII',
    img: '/images/northpoint.jpg',
    label: 'SJN',
  },
];

function EduCard({ inst, index }) {
  const imgRef = useRef(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const card = img.closest('.edu-card');
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.06) translate(${x * 10}px, ${y * 8}px)`;
    };
    const onLeave = () => {
      img.style.transform = 'scale(1.0) translate(0px, 0px)';
    };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="edu-card">
      <div className="edu-card-img">
        <img ref={imgRef} src={inst.img} alt={inst.name} style={{ transition: 'transform 0.4s ease' }} />
        <div className="edu-card-img-overlay">
          <span className="edu-card-img-label">{inst.label}</span>
        </div>
      </div>
      <div className="edu-card-body">
        <div className="edu-card-type">{inst.type}</div>
        <div className="edu-card-name">{inst.name}</div>
        <div className="edu-card-location">{inst.location}</div>
        <div className="edu-card-detail">{inst.detail}</div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label">
          <div className="red-sq"></div>
          <span>Education</span>
        </div>
        <h2 className="section-h">
          Where I Was <span className="text-accent">Shaped</span>
        </h2>
        <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-dim)', maxWidth: '500px', lineHeight: 1.8 }}>
          From the hills of Darjeeling to the valleys of Sikkim — two institutions that built the foundation.
        </p>

        <div className="edu-grid">
          {institutions.map((inst, i) => (
            <EduCard key={i} inst={inst} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
