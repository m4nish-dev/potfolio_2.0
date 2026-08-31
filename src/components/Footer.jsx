import React from 'react';
import { NAV_ITEMS, PROFILE } from '../data/portfolioData.js';

function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__name">MANISH KUMAR</div>
          <div className="footer__role">Software Engineer</div>
          <div className="footer__meta">
            NSUT · Delhi · {PROFILE.year}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <div className="footer__nav-label">Index</div>
          <ul className="footer__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="footer__nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__colophon">
          <div className="footer__nav-label">Colophon</div>
          <p className="footer__colophon-text">
            Set in Playfair Display and Inter. Composed in React, printed with
            CSS. A single-issue publication.
          </p>
        </div>
      </div>

      <div className="footer__rule" />

      <div className="footer__base">
        <div>© {PROFILE.year} Manish Kumar. All rights reserved.</div>
        <div className="footer__base-right">
          {PROFILE.issue} · End of Publication
        </div>
      </div>
    </footer>
  );
}

export default Footer;
