import React from 'react';
import './Header.css'; // Make sure to create and import the CSS file

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold typing-animation">
            Hello <span className="hand-shake">👋</span> I'm Aatmann
          </h1>
          <h1 className='h1-intro'>Welcome to my website.</h1>
          <ul className="emoji-list">
            <li>💻 Data Scientist / Software developer</li>
            <li>💼 Incoming: DELL SWE Intern, Ex: NREL STAR Intern </li>
            <li>🥸 I mix music. I do illustration. I play football.</li>
          </ul>
        </div>
        <div className="header-image">
          <img src="/1692042198968.jpeg" alt="Aatmann" />
        </div>
      </div>
    </header>
  );
}

export default Header;