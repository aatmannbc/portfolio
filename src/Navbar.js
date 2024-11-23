import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Make sure to create and import the CSS file

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className={`navbar ${isVisible ? 'show' : 'hide'}`}>
      <div className="navbar-left">
        आत्मन्
      </div>
      <div className="navbar-right">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        <div className="desktop-menu">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;