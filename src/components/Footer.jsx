import React from 'react';
import { CONTACT, SOCIAL_LINKS } from '../data/portfolioData.js';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="magazine-footer">
      <div className="footer-content-wrapper">
        <div className="footer-brand">
          <h2 className="footer-title">GET IN TOUCH</h2>
          <p className="footer-description">
            Available for freelance opportunities and full-time software engineering roles. Let's build something great together.
          </p>
        </div>
        
        <div className="footer-contact-info">
          <div className="footer-contact-item">
            <FaEnvelope className="footer-icon" />
            <a href={`mailto:${CONTACT.email}`} className="footer-link-text">{CONTACT.email}</a>
          </div>
          <div className="footer-contact-item">
            <FaPhone className="footer-icon" />
            <a href={`tel:${CONTACT.phoneRaw}`} className="footer-link-text">{CONTACT.phone}</a>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span className="footer-text-info">{CONTACT.location}</span>
          </div>
        </div>

        <div className="footer-social-links">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="footer-social-btn">
            <FaGithub /> GitHub
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="footer-social-btn">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
