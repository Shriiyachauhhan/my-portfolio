import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.instagram.com/shriiyachauhhan" target="_blank" rel="noreferrer"><i className='bx bxl-instagram'></i></a>
        <a href="https://www.linkedin.com/in/shriyachauhan521" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/shriiyachauhhan" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i></a>
      </div>

      <ul className="list">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p className="copyright">2025 Shriya | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
