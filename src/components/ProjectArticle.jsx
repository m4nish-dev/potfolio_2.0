import React from 'react';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';

function ProjectArticle({ project, reverse }) {
  return (
    <article
      className={`project ${reverse ? 'project--reverse' : ''}`}
      aria-labelledby={`project-${project.number}-title`}
    >
      {/* Image column */}
      <figure className="project__figure">
        <div className="project__image-wrap">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project__image"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('project__image-wrap--fallback');
            }}
          />
          <div className="project__image-fallback" aria-hidden="true">
            <div className="project__fallback-num">{project.number}</div>
            <div className="project__fallback-title">{project.title}</div>
          </div>
          <div className="project__image-num" aria-hidden="true">
            {project.number}
          </div>
        </div>
        <figcaption className="project__caption">
          Plate {project.number} — {project.title}
        </figcaption>
      </figure>

      {/* Content column */}
      <div className="project__content">
        <div className="project__kicker">
          <span>Project {project.number}</span>
          <span className="project__kicker-sep">/</span>
          <span>{project.kicker}</span>
        </div>

        <h3 id={`project-${project.number}-title`} className="project__title">
          <span className="project__title-main">{project.title}</span>
          <span className="project__title-sub">
            {project.subtitle.split('\n').map((line, i) => (
              <span key={i} className="project__title-line">
                {line}
              </span>
            ))}
          </span>
        </h3>

        <p className="project__dispatch">{project.dispatch}</p>

        <div className="project__stack">
          <div className="project__stack-label">The Stack</div>
          <ul className="project__stack-list">
            {project.stack.map((tech) => (
              <li key={tech} className="project__stack-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="project__actions">
          {/* TODO: Replace liveUrl in portfolioData.js with real URL */}
          <a
            href={project.liveUrl}
            className="project__btn project__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
            <FiArrowUpRight aria-hidden="true" className="project__btn-icon" />
          </a>
          {/* TODO: Replace codeUrl in portfolioData.js with real URL */}
          <a
            href={project.codeUrl}
            className="project__btn project__btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Code</span>
            <FiCode aria-hidden="true" className="project__btn-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectArticle;
