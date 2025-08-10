// src/components/Works.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'StayEase - Hostel Management System',
    description: 'A full-featured PG hostel management system built with Java Spring Boot and React.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+1',
    liveUrl: 'https://github.com/venkatagarthi333/StayEase',
    /*repoUrl: '#',*/
  },
  {
    title: 'A Personal Technical Portfolio Website',
    description: 'A personal portfolio showcasing my projects and the skills I’ve learned along the way',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+2',
    liveUrl: 'https://github.com/venkatagarthi333/portfolio',
    /*repoUrl: '#',*/
  },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
