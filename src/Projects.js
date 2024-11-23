import React, { useState } from 'react';
import './Projects.css'; // Make sure to create and import the CSS file

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Flixter</h3>
        <p>
          Flixter is a movie browsing app that allows users to browse TV Shows.
        </p>
        <button onClick={toggleShowMore} className="toggle-button">
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        {showMore && (
          <div className="more-info">
            <h4>Features</h4>
            <ul>
              <li>Choose any endpoint on The MovieDB API except now_playing</li>
              <li>Chosen Endpoint: trending/tv</li>
              <li>Make a request to your chosen endpoint and implement a RecyclerView to display all entries</li>
              <li>Use Glide to load and display at least one image per entry</li>
              <li>Click on an entry to view specific details about that entry using Intents</li>
              <li>Add another API call and RecyclerView that lets the user interact with different data</li>
              <li>Add rounded corners to the images using the Glide transformations</li>
              <li>Implement a shared element transition when user clicks into the details of a movie</li>
              <li>Added TV Show air date to the details</li>
            </ul>
            <a href="https://github.com/aatmannbc/Flixster" className="project-link">View Project</a>
            <div className="project-gif">
              <img src="https://camo.githubusercontent.com/e38ab8cb8eb618008f2a38efb288cb304e818786b5c913c20a7131d46e9b81d0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f516a413343365077534a6a3668654c5032442f67697068792d646f776e73697a65642e676966" alt="Flixter GIF" />
            </div>
          </div>
        )}
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;