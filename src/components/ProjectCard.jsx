// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <span>|</span>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
