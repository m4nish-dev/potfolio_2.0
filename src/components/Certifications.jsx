import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData.js';

function Certifications() {
  return (
    <section className="certs" aria-label="Certifications">
      <div className="section__header">
        <div className="section__label">
          <span className="section__label-mark">Certifications</span>
          <span className="section__label-num">§ 07</span>
        </div>
        <h2 className="section__title">
          Course <em>Records</em>
        </h2>
      </div>

      <div className="certs__grid">
        {CERTIFICATIONS.map((cert) => (
          <article key={cert.number} className="cert">
            <div className="cert__num">{cert.number}</div>
            <h3 className="cert__title">{cert.title}</h3>
            <p className="cert__issuer">{cert.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
