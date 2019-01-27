import React from 'react';
import {Card, Image, Modal, Button} from 'semantic-ui-react';
import checkers from '../assets/img/checkers.png';
import colorNotes from '../assets/img/colorNotes.png';
import seeYouThere from '../assets/img/seeYouThere.png';
import greatExpense from '../assets/img/greatExpense.png';
import faceRecogniser from '../assets/img/face-recogniser.png';
import roboFriends from '../assets/img/roboFriends.png';
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
        <Modal trigger={<img className="project-images" src={checkers} alt="checkers"/>} closeIcon>
            <Modal.Header className="ui center aligned">Checkers</Modal.Header>
            <Modal.Content image>
              <Image wrapped  src={checkers} />
              <Modal.Description>
                <p>This was my major university project. Checkers allows users to authenticate, 
                  and play against their friends or against the computer. Users can challenge any online player
                  and chat with opponents ingame </p>
                <p>Technologies used include VueJs, Node, Express, MongoDB, WebSocket and a whole lot of svg manipulation.</p>
                <Button primary>
                  <a href="https://github.com/jncameron/checkers" target="_blank">Code</a> 
                </Button>
                <Button secondary>
                <a href="http://checkers.ap-southeast-2.elasticbeanstalk.com/" target="_blank">Live Site</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
            

        </li>
        <li className="small p2">
          <Modal trigger={<img className="project-images" src={colorNotes} alt="colorNotes" />} closeIcon>
            <Modal.Header className="ui center aligned">Color Notes</Modal.Header>
            <Modal.Content image>
              <Image wrapped  src={colorNotes} />
              <Modal.Description>
                <p>A fun colorful place to organize your notes and get things done. 
                  Built on React and using some great libraries, including Semantic UI React and
                  React Tilt </p>
                <p>Coming soon - I will build the backend using Node, Express and PostgreSQL, 
                  so notes can be saved and accessed later.</p>
                <Button primary>
                  <a href="https://github.com/jncameron/colorNotes" target="_blank">Code</a> 
                </Button>
                <Button secondary>
                <a href="https://github.com/jncameron/colorNotes" target="_blank">Live</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          
        </li>
        <li className="small p3">
          <img className="project-images" src={seeYouThere} alt="seeYouThere"/>
        </li>
        <li className="small p1">
          <img className="project-images" src={greatExpense} alt="greatExpense"/>
        </li>
        <li className="small p2">
          <img className="project-images" src={faceRecogniser} alt="faceRecogniser"/>
        </li>
        <li className="small p3">
          <img className="project-images" src={roboFriends} alt="roboFriends"/>
        </li>
      </ul>
    </ section>
  )
}

export default Projects;