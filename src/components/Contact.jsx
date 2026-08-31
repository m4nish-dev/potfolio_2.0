import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT, SOCIAL_LINKS } from '../data/portfolioData.js';

function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="section__header contact__header">
        <div className="section__label">
          <span className="section__label-mark">Back Section</span>
          <span className="section__label-num">§ 08</span>
        </div>
        <h2 className="section__title contact__title">
          Full <em>Contact</em>
        </h2>
        <p className="section__standfirst">
          The magazine&apos;s closing pages — direct lines, direct replies.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__cta-wrap">
          <a href={`mailto:${CONTACT.email}`} className="contact__cta">
            <span className="contact__cta-text">Get in Touch</span>
            <FiArrowUpRight aria-hidden="true" className="contact__cta-icon" />
          </a>
          <p className="contact__cta-sub">
            The fastest reply is by email. Serious inquiries, project ideas,
            and collaboration welcome.
          </p>
        </div>

        <dl className="contact__details">
          <div className="contact__row">
            <dt className="contact__label">Correspondence</dt>
            <dd className="contact__value">
              <a href={`mailto:${CONTACT.email}`} className="contact__link">
                {CONTACT.email}
              </a>
            </dd>
          </div>

          <div className="contact__row">
            <dt className="contact__label">By Telephone</dt>
            <dd className="contact__value">
              <a href={`tel:${CONTACT.phoneRaw}`} className="contact__link">
                {CONTACT.phone}
              </a>
            </dd>
          </div>

          <div className="contact__row">
            <dt className="contact__label">Filed From</dt>
            <dd className="contact__value">{CONTACT.location}</dd>
          </div>

          <div className="contact__row">
            <dt className="contact__label">Elsewhere</dt>
            <dd className="contact__value contact__socials">
              {/* TODO: Replace github URL in portfolioData.js */}
              <a
                href={SOCIAL_LINKS.github}
                className="contact__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" className="contact__social-icon" />
                <span>GitHub</span>
              </a>
              {/* TODO: Replace linkedin URL in portfolioData.js */}
              <a
                href={SOCIAL_LINKS.linkedin}
                className="contact__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn aria-hidden="true" className="contact__social-icon" />
                <span>LinkedIn</span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Contact;
