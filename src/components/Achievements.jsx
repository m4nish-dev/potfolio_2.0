import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData.js';
import '../styles/achievements.css';
import { FaTrophy } from 'react-icons/fa';

function Achievements() {
  return (
    <section id="achievements" className="newspaper-section achievements-section">
      <div className="section-content">
        <h2 className="bottom-block-title">ACHIEVEMENTS</h2>
        
        <div className="achievements-list">
          {ACHIEVEMENTS.slice(0, 2).map((ach, idx) => (
            <div key={idx} className="achievement-item">
              <div className="achievement-icon">
                {idx === 0 ? <FaTrophy /> : <div style={{fontWeight: 'bold', fontFamily: 'var(--serif)'}}>NSUT</div>}
              </div>
              <div className="achievement-text">
                <span className="achievement-title">{ach.title}</span>
                <span className="achievement-stat">{ach.stat}</span>
                <p className="achievement-detail">{ach.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
