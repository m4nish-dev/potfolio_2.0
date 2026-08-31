import React, { useEffect, useState } from 'react';
import { NAV_ITEMS, PROFILE } from '../data/portfolioData.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for compact masthead + scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      // Active section detection
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`masthead ${scrolled ? 'masthead--compact' : ''}`}>
      {/* Top strip — editorial dateline */}
      <div className="masthead__dateline">
        <span className="dateline__item">{PROFILE.issue}</span>
        <span className="dateline__item dateline__item--center">
          {PROFILE.publication}
        </span>
        <span className="dateline__item dateline__item--right">
          {PROFILE.year}
        </span>
      </div>

      {/* Nameplate — the paper's title */}
      <div className="masthead__nameplate">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="nameplate__link"
          aria-label="Return to top"
        >
          <span className="nameplate__title">MANISH KUMAR</span>
          <span className="nameplate__sub">Portfolio</span>
        </a>
      </div>

      {/* Navigation strip */}
      <nav className="masthead__nav" aria-label="Primary">
        <ul className="nav__list">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={item.href} className="nav__item">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav__link ${isActive ? 'nav__link--active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile trigger */}
        <button
          className={`nav__toggle ${isOpen ? 'nav__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!isOpen}>
        <div className="mobile-menu__inner">
          <div className="mobile-menu__label">Index</div>
          <ul className="mobile-menu__list">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} className="mobile-menu__item">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="mobile-menu__link"
                >
                  <span className="mobile-menu__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mobile-menu__text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
