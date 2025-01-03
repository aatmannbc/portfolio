import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Doto', 'Markazi Text', 'Jersey 10', 'Rock Salt', 'Ubuntu']
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;