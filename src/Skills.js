import React from 'react';
import './Skills.css'; // Make sure to create and import the CSS file

function Skills() {
  const skills = [
    'Python (Most Proficient)',
    'Kotlin',
    'Java',
    'C',
    'JavaScript',
    '.NET',
    'SQL',
    'R',
    'HTML & CSS',
    'MATLAB',
    'Pandas',
    'NumPy',
    'Git'
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill}</span>
            <input type="range" min="1" max="5" defaultValue="3" className="slider" disabled />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;