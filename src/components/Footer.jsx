import React from 'react';
import { CONTACT, SOCIAL_LINKS } from '../data/portfolioData.js';
import '../styles/footer.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="magazine-footer">
      <div className="footer-left">
        <span className="footer-title">GET IN TOUCH</span>
        <a href={`mailto:${CONTACT.email}`} className="footer-huge-text">
          {CONTACT.email}
        </a>
      </div>
      
      <div className="footer-middle">
        <span className="footer-label">SOCIAL</span>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
      </div>

      <div className="footer-right">
        <span className="footer-label">LOCATION</span>
        <span className="footer-text">{CONTACT.location}</span>
        <span className="footer-text">{CONTACT.phone}</span>
      </div>
    </footer>
  );
}

export default Footer;
