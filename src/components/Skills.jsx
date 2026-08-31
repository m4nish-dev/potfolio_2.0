import React from 'react';
import { SKILLS } from '../data/portfolioData.js';

function Skills() {
  return (
    <section id="skills" className="skills" aria-label="Technical Skills">
      <div className="section__header">
        <div className="section__label">
          <span className="section__label-mark">Technical Index</span>
          <span className="section__label-num">§ 05</span>
        </div>
        <h2 className="section__title">
          The <em>Toolkit</em>
        </h2>
        <p className="section__standfirst">
          An index of tools, languages, and concepts — the working vocabulary.
        </p>
      </div>

      <div className="skills__grid">
        {SKILLS.map((group, i) => (
          <article key={group.category} className="skill-group">
            <header className="skill-group__header">
              <span className="skill-group__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="skill-group__title">{group.category}</h3>
            </header>
            <ul className="skill-group__list">
              {group.items.map((item) => (
                <li key={item} className="skill-group__item">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
