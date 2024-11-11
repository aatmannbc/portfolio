import React from 'react';
import './Experience.css'; // Make sure to create and import the CSS file

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-entry">
        <div className="experience-logo">
          <img src="https://building-performance.org/wp-content/uploads/2022/12/Wordpress_Blog-11.jpg" alt="Company Logo" />
        </div>
        <div className="experience-details">
          <h3>Software Engineering Intern / Researcher</h3>
          <p className="company-name">National Renewable Energy Laboratory</p>
          <p className="duration">May 2023 – Aug 2024</p>
          <ul>
            <li>Spearheaded the expansion of the building attributes dataset for the City of Chattanooga, utilizing OpenStreetMap API and Python libraries, reducing building data management time by 40% and cutting operational costs by the same margin.</li>
            <li>Modeled the effects of tree canopy coverage and urban heat islands on building energy consumption, leading to a projected 15% decrease in energy emissions through green infrastructure enhancements.</li>
            <li>Conducted a comprehensive analysis of solar energy potential, resulting in actionable recommendations that promoted sustainability and informed city policies.</li>
          </ul>
        </div>
      </div>
      <div className="experience-entry">
        <div className="experience-logo">
          <img src="https://www.logo.wine/a/logo/Goldman_Sachs/Goldman_Sachs-Logo.wine.svg" alt="Goldman Sachs Logo" />
        </div>
        <div className="experience-details">
          <h3>Data Analyst</h3>
          <p className="company-name">Goldman Sachs Market Madness</p>
          <p className="duration">Jan 2024 – Apr 2024</p>
          <ul>
            <li>Led a 5-person data analysis team, developing an innovative marketing proposal for Nike’s collaboration with Apple Music, projected to generate $400 million in additional revenue.</li>
            <li>Leveraged Scikit-learn to analyze 10 years of market collaboration data, identifying key patterns that improved decision-making by 30% in the campaign strategy.</li>
            <li>Delivered a comprehensive data-driven report that contributed to securing second place in the competition's first round.</li>
          </ul>
        </div>
      </div>
      <div className="experience-entry">
        <div className="experience-logo">
          <img src="https://www.osceolaschools.net/cms/lib/FL50000609/Centricity/Domain/986/boo.png" alt="Khan Academy Logo" />
        </div>
        <div className="experience-details">
          <h3>Lead Tutor</h3>
          <p className="company-name">Khan Academy x Howard University</p>
          <p className="duration">Feb 2023 – Current</p>
          <ul>
            <li>Selected as 1 of 7 top tutors out of 30+ candidates to lead College Algebra classes for over 30 high school students, consistently improving test scores by 15% on average.</li>
            <li>Implemented custom lesson plans and facilitated weekly office hours, achieving a 100% satisfaction rate among students through clear explanations and dedicated support.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;