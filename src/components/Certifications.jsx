import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData.js';
import '../styles/certifications.css';
import { FaCertificate } from 'react-icons/fa';

function Certifications() {
  return (
    <section id="certifications" className="newspaper-section certifications-section">
      <div className="section-content">
        <h2 className="bottom-block-title">CERTIFICATIONS</h2>
        
        <div className="certifications-row">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="cert-item">
              <div className="cert-badge">
                <FaCertificate className="cert-icon" />
              </div>
              <span className="cert-title">{cert.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>{word}<br/></React.Fragment>
              ))}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
