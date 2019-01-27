import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="background-image"></div>
      <h1>John Cameron</h1>
      <h3>Full Stack Web Developer</h3>

    <ul className="links">
      <a href="https://github.com/jncameron/" target="_blank"><i className="fab fa-github fa-2x"/></a> 
      <a href="https://www.linkedin.com/in/john-cameron-webdev/" target="_blank"><i className="fab fa-linkedin fa-2x"/></a> 
    </ul>

      
	  </section>
  )
}

export default Hero;