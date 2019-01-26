import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import checkers from '../assets/img/checkers.png';
import colorNotes from '../assets/img/colorNotes.png';
import seeYouThere from '../assets/img/seeYouThere.png';
import greatExpense from '../assets/img/greatExpense.png';
import './Projects.css';

const Projects = () => {
  return (
    <section className="our-work" id="my-projects">
      <h3 className="title">My Projects</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. 
        Sed aliquam dictum sapien, id sagittis augue malesuada eu.
      </p>

      <ul className="grid">
        <li className="small p1">
          <Card>
            <Image className="project-images" src={checkers} alt="checkers"/>
            <Card.Content>
              <Card.Header>Checkers</Card.Header>
              <Card.Description>Play your friends online, or against the Computer</Card.Description>
            </Card.Content>
            <Card.Content extra>
              VueJs Express Node MongoDB
            </Card.Content>
          </Card>

        </li>
        <li className="small p2">
          <img className="project-images" src={colorNotes} alt="colorNotes"/>
        </li>
        <li className="small p3">
          <img className="project-images" src={seeYouThere} alt="seeYouThere"/>
        </li>
        <li className="small p1">
          <img className="project-images" src={greatExpense} alt="greatExpense"/>
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