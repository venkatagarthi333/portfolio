// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillSet = ['Java', 'Spring Boot','REST APIs', 'HTML & CSS', 'JavaScript', 'ReactJS', 'MYSQL', 'Git & GitHub','VS Code','Intellij IDEA'];

  return (
    <section id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillSet.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
