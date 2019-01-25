import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="our-work">
      <h3 className="title">My Projects</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. 
        Sed aliquam dictum sapien, id sagittis augue malesuada eu.
      </p>

      <ul className="grid">
        <li className="small p1"></li>
        <li className="large p2"></li>
        <li className="large p3"></li>
        <li className="small p4"></li>
      </ul>
    </ section>
  )
}

export default Projects;