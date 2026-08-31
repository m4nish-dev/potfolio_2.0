import React from 'react';
import { EXPERIENCE } from '../data/portfolioData.js';

function Experience() {
  return (
    <section id="experience" className="experience" aria-label="Experience">
      <div className="section__header">
        <div className="section__label">
          <span className="section__label-mark">Field Work</span>
          <span className="section__label-num">§ 03</span>
        </div>
        <h2 className="section__title">
          On the <em>Job</em>
        </h2>
        <p className="section__standfirst">
          A record of shipped work — where the reading meets the writing of
          real, running software.
        </p>
      </div>

      <div className="experience__list">
        {EXPERIENCE.map((job) => (
          <article key={job.number} className="job">
            <header className="job__header">
              <div className="job__meta">
                <span className="job__num">{job.number}</span>
                <span className="job__period">{job.period}</span>
              </div>

              <div className="job__title-block">
                <h3 className="job__role">{job.role}</h3>
                <div className="job__company">
                  <span className="job__company-name">{job.company}</span>
                  <span className="job__company-sep">—</span>
                  <span className="job__company-dept">{job.department}</span>
                </div>
              </div>
            </header>

            <div className="job__body">
              <p className="job__dispatch">
                <span className="job__dispatch-label">Dispatch —</span>
                {job.dispatch}
              </p>

              <ol className="job__list">
                {job.achievements.map((line, i) => (
                  <li key={i} className="job__item">
                    <span className="job__item-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="job__item-text">{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
