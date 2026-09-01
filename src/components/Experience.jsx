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
              
              <div className="job-content-split">
                <div className="job-text-side">
                  <div className="job-header">
                    <h3 className="job-role">{job.role}</h3>
                    <div className="job-company-block">
                      <img src="/images/encore_logo.png" alt="Encore Ascend" className="company-logo" />
                      <span className="job-company">{job.company}</span>
                    </div>
                  </div>
                  <p className="job-period-dept">
                    <span className="job-dates">JULY &mdash; AUGUST</span> &bull; {job.department}
                  </p>
                  
                  <p className="job-dispatch">{job.dispatch}</p>

                  <ul className="job-achievements">
                    {job.achievements.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-cert-side">
                  <span className="cert-label">CERTIFICATE OF EXPERIENCE</span>
                  <div className="cert-embed-container">
                    <embed 
                      src="/docs/experience_certificate.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                      type="application/pdf" 
                      className="cert-pdf-viewer"
                    />
                  </div>
                  <a href="/docs/experience_certificate.pdf" target="_blank" rel="noreferrer" className="cert-download-btn">Open Certificate Fullscreen</a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
