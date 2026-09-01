import React from 'react';
import { SOCIAL_LINKS, CONTACT } from '../data/portfolioData.js';
import '../styles/hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image-container">
        <img 
          src="/images/hero_tech.jpg" 
          alt="Software Engineering Concept" 
          className="hero-image-editorial"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-top-meta">
              <span className="hero-logo-mark">MK</span>
              <span className="hero-meta-text">
                Full Stack Developer &bull; Delhi
              </span>
            </div>

            <h2 className="hero-greeting">
              Hi there.<br />
            </h2>
            <h3 className="hero-tagline">I build things for the web.</h3>

            <p className="hero-bio">
              Computer Science student at NSUT, Delhi with a strong foundation in DSA. Passionate about full-stack development and shipping real-world solutions.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="hero-btn hero-btn-primary">Contact me</a>
              <a href="https://cartoon-portfolio-rose.vercel.app/resume.pdf" target="_blank" rel="noreferrer" className="hero-btn hero-btn-secondary">Resume</a>
            </div>

            <div className="hero-tech-stack">
              <span className="tech-label">Currently working with:</span>
              <div className="tech-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>Node</span>
                <span>MongoDB</span>
                <span>C++</span>
              </div>
            </div>

            <div className="hero-socials">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
