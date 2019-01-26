import React from 'react';
import checkers from '../assets/img/checkers.png';
import colorNotes from '../assets/img/colorNotes.png';
import seeYouThere from '../assets/img/seeYouThere.png';
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
        <li className="small p1">
          <img className="project-images" src={checkers} alt="checkers"/>
        </li>
        <li className="small p2">
          <img className="project-images" src={colorNotes} alt="colorNotes"/>
        </li>
        <li className="small p3">
          <img className="project-images" src={seeYouThere} alt="seeYouThere"/>
        </li>
        <li className="small p1">
          <img className="project-images" src={checkers} alt="checkers"/>
        </li>
        <li className="small p2">
          <img className="project-images" src={colorNotes} alt="colorNotes"/>
        </li>
        <li className="small p3">
          <img className="project-images" src={seeYouThere} alt="seeYouThere"/>
        </li>
      </ul>
    </ section>
  )
}

export default Projects;