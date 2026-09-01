import React from 'react';
import { NAV_ITEMS } from '../data/portfolioData.js';
import '../styles/navbar.css';

function Navbar() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container">
      {/* Top Nav Strip */}
      <div className="nav-strip">
        <nav>
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="nav-item">
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Title Area */}
      <div className="title-area">
        <h1 className="main-title">MANISH KUMAR</h1>
        <div className="subtitle-wrapper">
          <div className="line"></div>
          <span className="subtitle">PORTFOLIO</span>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
