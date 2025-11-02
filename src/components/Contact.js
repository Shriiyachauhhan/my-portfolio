import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-form">
        <h2 className="contact-me">Contact <span>Me</span></h2>
        <form>
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <div className="btn-box">
            <input type="submit" value="Send Message" className="btn-1" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
