// src/components/Works.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce site built with the MERN stack.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+1',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A simple and intuitive task manager to organize your day.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+2',
    liveUrl: '#',
    repoUrl: '#',
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
