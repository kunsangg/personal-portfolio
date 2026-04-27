import React from 'react';

const projects = [
  {
    tag: 'Web App · Open Source',
    title: 'DevBounty',
    desc: 'A bounty platform where companies issue open-source challenges with prize rewards — connecting developers to real-world problems.',
    img: null, sym: 'DB',
    links: [{ label: 'GitHub', href: 'https://github.com/kunsangdorjay?tab=repositories' }],
  },
  {
    tag: 'Mobile · Flutter · Figma · iOS',
    title: 'Sikkim Tourism App',
    desc: 'Designed in Figma from scratch, built with Flutter for iOS. Prototyped in Xcode — a full end-to-end tourism experience for Sikkim.',
    img: null, sym: 'SK',
    links: [{ label: 'GitHub', href: 'https://github.com/kunsangdorjay?tab=repositories' }],
  },
  {
    tag: 'AI · Local LLM · Ollama',
    title: 'AI Chatbot (Mistral)',
    desc: 'Runs Mistral AI locally via Ollama. Zero cloud dependency, full privacy. A local-first AI assistant built for speed and ownership.',
    img: null, sym: 'AI',
    links: [{ label: 'GitHub', href: 'https://github.com/kunsangdorjay?tab=repositories' }],
  },
  {
    tag: 'SaaS · Product',
    title: 'Resolio',
    desc: 'A portfolio-building platform with curated, outcome-driven templates — engineered so creatives and developers actually get hired.',
    img: '/images/resolio-logo.png', logoClass: 'logo-bg invert-dark-strong',
    links: [],
  },
  {
    tag: 'AI Tools · Startup · Stealth',
    title: 'Nesion',
    desc: 'Co-founder & COO. Reduces 40% of VRAM usage for locally running AI models — making local AI real on consumer hardware.',
    img: null, sym: 'NS',
    links: [],
  },
  {
    tag: 'Frontend · React · GSAP',
    title: 'Portfolio v1',
    desc: 'The predecessor to this site. Built with references from Aura Build — where building in public began.',
    img: null, sym: '✦',
    links: [{ label: 'GitHub', href: 'https://github.com/kunsangdorjay' }],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="section-label">
          <div className="red-sq"></div>
          <span>Projects</span>
        </div>
        <h2 className="section-h">Things I've <span className="text-accent">Built</span></h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className={`project-card-img${p.logoClass ? ' ' + p.logoClass : ''}`}>
                {p.img
                  ? <img src={p.img} alt={p.title} loading="lazy" />
                  : <div className="project-placeholder">{p.sym}</div>
                }
              </div>
              <div className="project-card-body">
                <div className="project-card-tag">{p.tag}</div>
                <div className="project-card-title">{p.title}</div>
                <div className="project-card-desc">{p.desc}</div>
                {p.links.length > 0 && (
                  <div className="project-card-links">
                    {p.links.map((l, j) => (
                      <a key={j} href={l.href} target="_blank" rel="noopener noreferrer" className="project-card-link">
                        {l.label}
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path d="M4.16 4.4V3.5L8.5 3.5V7.84H7.6V5.03L4.13 8.5L3.5 7.87L6.97 4.4H4.16Z" fill="currentColor"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
