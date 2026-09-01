import React from 'react';
import { SKILLS } from '../data/portfolioData.js';
import '../styles/skills.css';
import { 
  FaCode, FaJsSquare, FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaDatabase, FaTools, FaLaptopCode, FaServer, FaLock
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

function Skills() {
  // A helper to map text to an icon
  const getIcon = (itemName) => {
    const name = itemName.toLowerCase();
    if (name.includes('c++') || name.includes('c')) return <FaCode />;
    if (name.includes('js') || name.includes('javascript')) return <FaJsSquare />;
    if (name.includes('python')) return <FaPython />;
    if (name.includes('react')) return <FaReact />;
    if (name.includes('html')) return <FaHtml5 />;
    if (name.includes('css')) return <FaCss3Alt />;
    if (name.includes('tailwind')) return <SiTailwindcss />;
    if (name.includes('node')) return <FaNodeJs />;
    if (name.includes('express')) return <SiExpress />;
    if (name.includes('auth')) return <FaLock />;
    if (name.includes('mongo')) return <SiMongodb />;
    if (name.includes('mysql')) return <SiMysql />;
    if (name.includes('git') || name.includes('vs code') || name.includes('postman')) return <FaTools />;
    if (name.includes('dsa') || name.includes('oop')) return <FaLaptopCode />;
    if (name.includes('os') || name.includes('dbms') || name.includes('operating')) return <FaServer />;
    return <FaCode />;
  };

  return (
    <section id="skills" className="newspaper-section skills-section">
      <div className="section-content">
        <span className="section-header">TECHNICAL PROFICIENCIES</span>
        <h2 className="section-title">TECHNICAL INDEX</h2>
        <h3 className="skills-subtitle">Skills</h3>
        
        <div className="skills-grid">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="skill-category-block">
              <h4 className="skill-category-title">{skillGroup.category.toUpperCase()}</h4>
              <div className="skill-items-row">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-item">
                    <div className="skill-icon">{getIcon(item)}</div>
                    <span className="skill-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
