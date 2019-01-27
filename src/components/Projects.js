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
                <a href="https://jncameron.github.io/colorNotes/" target="_blank">Live</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          
        </li>
        <li className="small p3">
          <Modal trigger={<img className="project-images" src={seeYouThere} alt="seeYouThere"/>} closeIcon>
            <Modal.Header className="ui center aligned">See You There</Modal.Header>
            <Modal.Content image>
              <Image wrapped  src={seeYouThere} />
              <Modal.Description>
                <p>Another major university project. See You There is an events based android application,
                  designed to assist international students meet and find interestiing things to do.
                </p>
                <p>Written in Kotlin, and built with Android Studio and Firebase.</p>
                <Button primary>
                  <a href="https://github.com/jncameron/kotlin-app-see-you-there" target="_blank">Code</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p1">
        <Modal trigger={<img className="project-images" src={greatExpense} alt="greatExpense"/>} closeIcon>
            <Modal.Header className="ui center aligned">Great Expense</Modal.Header>
            <Modal.Content image>
              <Image wrapped  src={greatExpense} />
              <Modal.Description>
                <p>A big thanks to Udemy Instructor Andrew Mead for getting me started on this one.
                  Current functionality authenticating through Google, creating expenses, and viewing filtered
                  and sorted lists of expenses in the dashboard.
                </p>
                <p>Future functionality will include an income section and other budgeting enhancements.</p>
                <p>Built using React, Redux and Firebase for persistance.</p>
                <Button primary>
                  <a href="https://github.com/jncameron/greatExpense" target="_blank">Code</a> 
                </Button>
                <Button secondary>
                <a href="https://great-expense.firebaseapp.com" target="_blank">Live</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p2">
        <Modal trigger={<img className="project-images" src={faceRecogniser} alt="faceRecogniser"/>} closeIcon>
            <Modal.Header className="ui center aligned">Recogniser</Modal.Header>
            <Modal.Content image>
              <Image wrapped  src={faceRecogniser} />
              <Modal.Description>
                <p>Just a bit of fun with Clarifai's face detect api. 
                  Enter an image url, the mighty brain will find faces in the crowd
                </p>
                <p>Built with React, with a little help from Particles.js-React and Clarifai</p>
                <Button primary>
                  <a href="https://github.com/jncameron/Recogniser" target="_blank">Code</a> 
                </Button>
                <Button secondary>
                <a href="https://jncameron.github.io/Recogniser/" target="_blank">Live</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p3">
        <Modal trigger={<img className="project-images" src={roboFriends} alt="roboFriends"/>} closeIcon>
            <Modal.Header className="ui center aligned">RoboFriends</Modal.Header>
            <Modal.Content image>
              <Image wrapped  src={roboFriends} />
              <Modal.Description>
                <p>A great little project from Andrei Neagoie's Udemy tutorials.
                  Everyone needs a robofriend, right? Robofriends calls a list test users from one api 
                  and gives them random robot avatars from another.

                </p>
                <p>Built with React and a splash of Redux.</p>
                <Button primary>
                  <a href="https://github.com/jncameron/robofriends" target="_blank">Code</a> 
                </Button>
                <Button secondary>
                <a href="https://jncameron.github.io/robofriends/" target="_blank">Live</a> 
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
      </ul>
    </ section>
  )
}

export default Projects;