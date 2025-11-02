import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-container">
          <div className="project">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my skills and projects.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
            <a href="https://github.com/Shriiyachauhhan/my-portfolio-final.git" target="_blank" rel="noreferrer">View Code</a>
          </div>

          <div className="project">
            <h3>Movie Recommendation System</h3>
            <p>Built a movie recommender using ML algorithms and Flask.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript, Python, Flask, MongoDB, Machine Learning</p>
            <a href="https://github.com/sreeyaa03/Movie-Recommendation-System.git" target="_blank" rel="noreferrer">View Code</a>
          </div>

          <div className="project">
            <h3>Real Estate Website</h3>
            <p>A Real Estate website to find properties in Bangalore.</p>
            <p><strong>Technologies:</strong> HTML, CSS, PHP, MySQL, JavaScript</p>
            <a href="https://github.com/Shriiyachauhhan/real.git" target="_blank" rel="noreferrer">View Code</a>
          </div>

          <div className="project">
            <h3>UniChoice</h3>
            <p>An app to help students find the right colleges.</p>
            <p><strong>Technologies:</strong> HTML, CSS, PHP, MySQL, JavaScript</p>
            <a href="https://github.com/Palak19Priya/UniChioce.git" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
