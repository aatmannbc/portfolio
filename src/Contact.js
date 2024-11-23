import React from 'react';
import './Contact.css'; // Make sure to create and import the CSS file

function Contact() {
  return (
    <section id="contact">
      <div className="contact-icons">
        <a href="mailto:aatmann.bc@bison.howard.edu" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/aatmannbc/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/aatmannbc" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;