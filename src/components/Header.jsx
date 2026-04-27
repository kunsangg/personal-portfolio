import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
  }, [isLight]);

  return (
    <header className="header">
      <div className="header-left">
        <a href="#" className="header-logo">
          <div className="header-logo-mark">
            <iconify-icon icon="lucide:triangle" width="14"></iconify-icon>
          </div>
          KDB
        </a>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#ventures">Ventures</a>
          <a href="#certifications">Certs</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="night-mode-btn" onClick={() => setIsLight(l => !l)} title={isLight ? 'Dark mode' : 'Light mode'}>
          <span>{isLight ? 'dark' : 'light'}</span>
          <div className="theme-toggle">
            <div className="theme-toggle-thumb"></div>
          </div>
        </div>
        <a href="mailto:kunsangdorjay6@gmail.com" className="join-btn">
          <span>Hire Me</span>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M4.16 4.4V3.5L8.5 3.5V7.84H7.6V5.03L4.13 8.5L3.5 7.87L6.97 4.4H4.16Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
