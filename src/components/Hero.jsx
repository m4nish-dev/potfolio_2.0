import React from 'react';
import { PROFILE } from '../data/portfolioData.js';

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__grid">
        {/* Left rail — editorial meta */}
        <aside className="hero__rail">
          <div className="rail__block">
            <div className="rail__label">Filed under</div>
            <div className="rail__value">Software Engineering</div>
          </div>
          <div className="rail__block">
            <div className="rail__label">Author</div>
            <div className="rail__value">Manish Kumar</div>
          </div>
          <div className="rail__block">
            <div className="rail__label">Institution</div>
            <div className="rail__value">NSUT · Delhi</div>
          </div>
          <div className="rail__block">
            <div className="rail__label">Volume</div>
            <div className="rail__value">01 / 2026</div>
          </div>
        </aside>

        {/* Main headline area */}
        <div className="hero__main">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-mark">§</span>
            <span>Feature Story</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">The Chronicle</span>
            <span className="hero__title-line hero__title-line--indent">
              of Development
            </span>
          </h1>

          <div className="hero__lede">
            <span className="hero__dropcap">M</span>
            anish Kumar — a computer science student at NSUT — writes, ships,
            and studies software. What follows is a record of that practice:
            projects built, systems studied, ideas pressed into working code.
            An engineer&apos;s notebook, printed for reading.
          </div>

          <div className="hero__byline">
            <span>{PROFILE.name}</span>
            <span className="hero__byline-dot">·</span>
            <span>{PROFILE.university}</span>
            <span className="hero__byline-dot">·</span>
            <span>{PROFILE.tagline}</span>
          </div>
        </div>

        {/* Hero image */}
        <figure className="hero__figure">
          {/* Replace this with your own image at public/images/hero.jpg */}
          <div className="hero__image-wrap">
            <img
              src="/images/hero.jpg"
              alt="Manish Kumar at work"
              className="hero__image"
              onError={(e) => {
                // Graceful fallback if image is missing during development
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('hero__image-wrap--fallback');
              }}
            />
            <div className="hero__image-fallback" aria-hidden="true">
              <div className="fallback__grid">
                <div className="fallback__line" />
                <div className="fallback__line" />
                <div className="fallback__line" />
                <div className="fallback__mark">M · K</div>
              </div>
            </div>
          </div>
          <figcaption className="hero__caption">
            <span className="hero__caption-num">Plate I</span>
            <span className="hero__caption-text">
              The workspace — where the writing gets done.
            </span>
          </figcaption>
        </figure>

        {/* Bottom strip — running head */}
        <div className="hero__foot">
          <div className="foot__item">
            <span className="foot__num">01</span>
            <span className="foot__text">Introduction</span>
          </div>
          <div className="foot__item">
            <span className="foot__num">02</span>
            <span className="foot__text">Profile</span>
          </div>
          <div className="foot__item">
            <span className="foot__num">03</span>
            <span className="foot__text">Field Work</span>
          </div>
          <div className="foot__item">
            <span className="foot__num">04</span>
            <span className="foot__text">Project Focus</span>
          </div>
          <div className="foot__item foot__item--last">
            <span className="foot__num">05</span>
            <span className="foot__text">Technical Index</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
