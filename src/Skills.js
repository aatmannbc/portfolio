import React from 'react';
import './Skills.css'; // Make sure to create and import the CSS file
import { PythonPlainWordmark, KotlinPlainWordmark, JavaPlainWordmark, CsharpPlain, JavascriptPlain, DotnetPlainWordmark, SqlPlainWordmark, RPlainWordmark, Html5PlainWordmark, Css3PlainWordmark, MatlabPlain, PandasPlain, NumpyPlain, GitPlain } from 'devicons-react';

function Skills() {
  const skillLevels = {
    Python: 4,
    Kotlin: 3,
    Java: 2,
    C: 2,
    JavaScript: 4,
    Dotnet: 3,
    SQL: 3,
    R: 3,
    HTML: 3,
    CSS: 3,
    MATLAB: 3,
    Pandas: 3,
    NumPy: 3,
    Git: 3,
  };

  const skills = [
    { icon: <PythonPlainWordmark color="black" size="50" />, name: 'Python' },
    { icon: <KotlinPlainWordmark color="black" size="50" />, name: 'Kotlin' },
    { icon: <JavaPlainWordmark color="black" size="50" />, name: 'Java' },
    { icon: <CsharpPlain color="black" size="50" />, name: 'C' },
    { icon: <JavascriptPlain color="black" size="50" />, name: 'JavaScript' },
    // { icon: <DotnetPlainWordmark color="black" size="50" />, name: '.NET' },
    // { icon: <SqlPlainWordmark color="black" size="50" />, name: 'SQL' },
    // { icon: <RPlainWordmark color="black" size="50" />, name: 'R' },
    // { icon: <Html5PlainWordmark color="black" size="50" />, name: 'HTML' },
    // { icon: <Css3PlainWordmark color="black" size="50" />, name: 'CSS' },
    // { icon: <MatlabPlain color="black" size="50" />, name: 'MATLAB' },
    // { icon: <PandasPlain color="black" size="50" />, name: 'Pandas' },
    // { icon: <NumpyPlain color="black" size="50" />, name: 'NumPy' },
    // { icon: <GitPlain color="black" size="50" />, name: 'Git' }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.icon}</span>
            <div className="skill-level">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`skill-block ${i < skillLevels[skill.name] ? 'filled' : ''}`}
                ></div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;