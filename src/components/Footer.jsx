import React from 'react';
import { CONTACT, SOCIAL_LINKS } from '../data/portfolioData.js';
import '../styles/footer.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="magazine-footer">
      <div className="footer-left">
        <h2 className="footer-title">FULL CONTACT</h2>
        <span className="footer-subtitle">MAGAZINE BACK SECTION</span>
      </div>
      
      <div className="footer-middle">
        <div className="contact-item">
          <FaEnvelope /> <span>{CONTACT.email}</span>
        </div>
        <div className="contact-item">
          <FaPhone /> <span>{CONTACT.phone}</span>
        </div>
      </div>

      <div className="footer-social">
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>

      <div className="footer-right">
        <button className="get-in-touch-btn">GET IN TOUCH</button>
      </div>
    </footer>
  );
}

export default Footer;
