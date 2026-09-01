import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData.js';
import '../styles/achievements.css';
import { FaTrophy, FaMedal, FaUniversity } from 'react-icons/fa';

function Achievements() {
  const getIcon = (title) => {
    if (title.toLowerCase().includes('trophy')) return <FaTrophy />;
    if (title.toLowerCase().includes('academic')) return <FaUniversity />;
    return <FaMedal />;
  };

  return (
    <section id="achievements" className="newspaper-section achievements-section">
      <div className="section-content">
        <h2 className="bottom-block-title">ACHIEVEMENTS</h2>
        
        <div className="achievements-list">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="achievement-item">
              <div className="achievement-icon">
                {getIcon(ach.title)}
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
