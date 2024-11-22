import React from 'react';
import './Skills.css'; // Make sure to create and import the CSS file
import { PythonPlainWordmark, KotlinPlainWordmark, JavaPlainWordmark, CsharpPlain, JavascriptPlain, DotnetPlainWordmark, SqlPlainWordmark, RPlainWordmark, Html5PlainWordmark, Css3PlainWordmark, MatlabPlain, PandasPlain, NumpyPlain, GitPlain } from 'devicons-react';

function Skills() {
  const [skillLevels, setSkillLevels] = React.useState({
    Python: 5,
    Kotlin: 3,
    Java: 3,
    C: 3,
    JavaScript: 3,
    Dotnet: 3,
    SQL: 3,
    R: 3,
    HTML: 3,
    CSS: 3,
    MATLAB: 3,
    Pandas: 3,
    NumPy: 3,
    Git: 3,
  });

  const skills = [
    { icon: <PythonPlainWordmark color="black" size="50" />, name: 'Python' },
    { icon: <KotlinPlainWordmark color="black" size="50" />, name: 'Kotlin' },
    { icon: <JavaPlainWordmark color="black" size="50" />, name: 'Java' },
    { icon: <CsharpPlain color="black" size="50" />, name: 'C' },
    // { icon: <JavascriptPlain color="black" size="50" />, name: 'JavaScript' },
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

  const handleSliderChange = (event, skillName) => {
    setSkillLevels({
      ...skillLevels,
      [skillName]: event.target.value
    });
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span>{skill.icon}</span>
            <input
              type="range"
              min="1"
              max="5"
              value={skillLevels[skill.name]}
              className="slider"
              onChange={(e) => handleSliderChange(e, skill.name)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;