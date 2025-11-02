import React from 'react';
import '../App.css';
import profilePhoto from '../profilephoto.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-img">
          <img src={profilePhoto} alt="Shriya Chauhan" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>B.Tech <span>Student</span></h3>
          <p>
            Hi, I’m Shriya Chauhan, currently studying Computer Science Engineering 
            at Jain University, Bangalore. I’m passionate about technology and love 
            exploring new ways to solve problems through programming. 
            <br /><br />
            I’ve worked with Java, C, HTML, CSS, JavaScript, and built projects in 
            both front-end and back-end development. I also have a strong understanding 
            of database management concepts (DBMS, RDBMS).
            <br /><br />
            Outside tech, I led my college's Frisbee team as captain, which enhanced my 
            leadership and teamwork skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
