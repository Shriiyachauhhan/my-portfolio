import React from 'react';
import '../App.css';
import profilePhoto from '../profilephoto.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Welcome to</h3>
        <h1>Shriya Chauhan's Portfolio</h1>
        <p>
          I'm a passionate Computer Science Engineering student specializing in web development, 
          machine learning, and software solutions. Explore my projects and skills below!
        </p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
      <div className="img-box">
        <img src={profilePhoto} alt="Shriya Chauhan" />
      </div>
    </section>
  );
};

export default Home;
