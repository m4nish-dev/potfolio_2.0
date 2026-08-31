import React from 'react';
import { EDUCATION } from '../data/portfolioData.js';

function About() {
  return (
    <section id="about" className="about" aria-label="About and Education">
      <div className="section__header">
        <div className="section__label">
          <span className="section__label-mark">Feature</span>
          <span className="section__label-num">§ 02</span>
        </div>
        <h2 className="section__title">Educational Essence</h2>
        <p className="section__standfirst">
          The foundation — a study in computer science at one of India&apos;s
          premier engineering universities.
        </p>
      </div>

      <div className="about__grid">
        {/* Column: image */}
        <figure className="about__figure">
          <div className="about__image-wrap">
            <img
              src={EDUCATION.image}
              alt={EDUCATION.imageAlt}
              className="about__image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('about__image-wrap--fallback');
              }}
            />
            <div className="about__image-fallback" aria-hidden="true">
              <div className="fallback__initials">NSUT</div>
              <div className="fallback__sub">Delhi</div>
            </div>
          </div>
          <figcaption className="about__caption">
            Plate II — Netaji Subhas University of Technology.
          </figcaption>
        </figure>

        {/* Column: prose */}
        <div className="about__prose">
          <p className="about__lead">{EDUCATION.intro}</p>
          <div className="about__body">
            <p>
              Coursework spans the classical foundations — data structures,
              algorithms, operating systems, and databases — alongside the
              working parts of modern software: web development, systems
              design, and applied practice through personal projects.
            </p>
          </div>
        </div>

        {/* Column: dossier */}
        <aside className="about__dossier">
          <div className="dossier__label">Dossier</div>
          <dl className="dossier__list">
            <div className="dossier__row">
              <dt>Institution</dt>
              <dd>{EDUCATION.institution}</dd>
            </div>
            <div className="dossier__row">
              <dt>Location</dt>
              <dd>{EDUCATION.location}</dd>
            </div>
            <div className="dossier__row">
              <dt>Degree</dt>
              <dd>{EDUCATION.degree}</dd>
            </div>
            <div className="dossier__row">
              <dt>Period</dt>
              <dd>{EDUCATION.period}</dd>
            </div>
          </dl>

          <div className="dossier__focus">
            <div className="dossier__label">Areas of Study</div>
            <ul className="dossier__tags">
              {EDUCATION.focus.map((item) => (
                <li key={item} className="dossier__tag">{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
