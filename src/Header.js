import React, { useEffect, useState } from 'react';
import './Header.css'; // Make sure to create and import the CSS file

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`App-header ${isVisible ? 'show' : 'hide'}`}>
      <nav id="navbar" className="navbar">
        <div className="navbar-left">
          आत्मन्
        </div>
        <div className="navbar-right">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="header-content">
        <div className="header-text">
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold typing-animation">
            Hello <span className="hand-shake">👋</span> I'm Aatmann
          </h1>
          <h1>Welcome to my website.</h1>
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