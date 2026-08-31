import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData.js';

function Achievements() {
  return (
    <section className="achievements" aria-label="Achievements">
      <div className="section__header">
        <div className="section__label">
          <span className="section__label-mark">Statistics</span>
          <span className="section__label-num">§ 06</span>
        </div>
        <h2 className="section__title">
          By the <em>Numbers</em>
        </h2>
      </div>

      <div className="achievements__grid">
        {ACHIEVEMENTS.map((item) => (
          <article key={item.number} className="achievement">
            <div className="achievement__num">{item.number}</div>
            <div className="achievement__stat">{item.stat}</div>
            <h3 className="achievement__title">{item.title}</h3>
            <p className="achievement__detail">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
