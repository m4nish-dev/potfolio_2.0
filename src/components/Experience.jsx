import React from 'react';
import { EXPERIENCE } from '../data/portfolioData.js';
import '../styles/experience.css';

function Experience() {
  return (
    <section id="experience" className="newspaper-section experience-section">
      <div className="section-content">
        <span className="section-header">FIELD WORK</span>
        <h2 className="section-title">EXPERIENCE</h2>

        <div className="experience-list">
          {EXPERIENCE.map((job) => (
            <article key={job.number} className="job-card">
              <div className="job-header">
                <h3 className="job-role">{job.role}</h3>
                <span className="job-company">{job.company}</span>
              </div>
              <p className="job-period-dept">{job.period} &bull; {job.department}</p>
              
              <p className="job-dispatch">{job.dispatch}</p>

              <ul className="job-achievements">
                {job.achievements.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
