// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillSet = ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'HTML5 & CSS3', 'Sass', 'Tailwind CSS', 'Git & GitHub', 'MongoDB'];

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
