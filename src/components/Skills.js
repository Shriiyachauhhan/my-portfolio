import React from 'react';
import '../App.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">

        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java <div className="progress"><div className="bar" style={{width: '50%'}}></div></div></li>
           
            <li>HTML <div className="progress"><div className="bar" style={{width: '90%'}}></div></div></li>
            <li>CSS <div className="progress"><div className="bar" style={{width: '90%'}}></div></div></li>
            <li>JavaScript <div className="progress"><div className="bar" style={{width: '60%'}}></div></div></li>
            <li>PHP <div className="progress"><div className="bar" style={{width: '60%'}}></div></div></li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL <div className="progress"><div className="bar" style={{width: '50%'}}></div></div></li>
            <li>MongoDB <div className="progress"><div className="bar" style={{width: '50%'}}></div></div></li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub <div className="progress"><div className="bar" style={{width: '50%'}}></div></div></li>
            <li>XAMPP <div className="progress"><div className="bar" style={{width: '100%'}}></div></div></li>
            <li>VS Code <div className="progress"><div className="bar" style={{width: '90%'}}></div></div></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
