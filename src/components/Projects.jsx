import React from 'react';
import { PROJECTS } from '../data/portfolioData.js';
import '../styles/projects.css';

function Projects() {
  const project1 = PROJECTS[0];
  const project2 = PROJECTS[1];

  return (
    <section id="projects" className="newspaper-section project-section">
      <div className="section-content">
        <span className="section-header">PORTFOLIO HIGHLIGHTS</span>
        <h2 className="section-title">PROJECT FOCUS</h2>

        {/* First Project: Homely (Large display) */}
        {project1 && (
          <div className="project-card large-project">
            <div className="project-image-wrapper">
              <img 
                src={project1.image} 
                alt={project1.title} 
                className="project-image"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070';
                }}
              />
            </div>
            <h3 className="project-headline">
              {project1.title.toUpperCase()}: {project1.subtitle.replace('\n', ' ').toUpperCase()}
            </h3>
            <p className="project-description">{project1.dispatch}</p>
          </div>
        )}

        <hr className="newspaper-divider" />

        {/* Second Project: URLShortify (Small display) */}
        {project2 && (
          <div className="project-card small-project">
            <div className="small-project-inner">
              <div className="project-graphic-placeholder">
                <span>&lt;/&gt;</span>
                <div className="arrow-box">short URL</div>
              </div>
              <div className="small-project-text">
                <h4 className="project-sub-headline">
                  {project2.title.toUpperCase()}:<br/>
                  {project2.subtitle.replace('\n', ' ').toUpperCase()}
                </h4>
                <p className="project-description">{project2.dispatch}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
