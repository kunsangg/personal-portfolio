import React, { useEffect, useState } from 'react';
import GridOverlay from './GridOverlay';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    function updateClock() {
      const n = new Date();
      const ds = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const d = ds[n.getDay()];
      const h = String(n.getHours()).padStart(2, '0');
      const m = String(n.getMinutes()).padStart(2, '0');
      const s = String(n.getSeconds()).padStart(2, '0');
      const tz = -(n.getTimezoneOffset() / 60);
      const sg = tz >= 0 ? '+' : '';
      setTimeStr(`${d} ${h}:${m}:${s} (GMT${sg}${tz})`);
    }
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4.16 4.4V3.5L8.5 3.5V7.84H7.6V5.03L4.13 8.5L3.5 7.87L6.97 4.4H4.16Z" fill="currentColor" />
    </svg>
  );

  return (
    <footer className="footer">
      <GridOverlay id="footer-grid" triggerSelector=".footer" isFooter={true} />
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">KDB</div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Contact</h4>
              <a href="mailto:kunsangdorjay6@gmail.com">kunsangdorjay6@gmail.com</a>
            </div>
            <div className="footer-link-group">
              <h4>Social</h4>
              <a href="https://www.linkedin.com/in/kunsangdorjay/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/kunsangdorjay" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://instagram.com/kungzantt" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-link-group">
              <h4>Work</h4>
              <a href="https://github.com/kunsangdorjay?tab=repositories" target="_blank" rel="noopener noreferrer">Projects</a>
              <a href="#ventures">Ventures</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            © {new Date().getFullYear()} KUNSANG DORJAY BHUTIA. All rights reserved.
          </div>
          <div className="footer-socials">
            <a href="https://github.com/kunsangdorjay" target="_blank" rel="noopener noreferrer" className="footer-social">
              GitHub <ArrowIcon />
            </a>
            <a href="https://www.linkedin.com/in/kunsangdorjay/" target="_blank" rel="noopener noreferrer" className="footer-social">
              LinkedIn <ArrowIcon />
            </a>
            <a href="https://instagram.com/kungzantt" target="_blank" rel="noopener noreferrer" className="footer-social">
              Instagram <ArrowIcon />
            </a>
            <a href="https://discord.com/users/kungzanttt" target="_blank" rel="noopener noreferrer" className="footer-social">
              Discord <ArrowIcon />
            </a>
          </div>
          <div className="footer-clock" id="footer-clock">{timeStr}</div>
        </div>
      </div>
    </footer>
  );
}
