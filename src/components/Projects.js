import React from "react";
import { Image, Modal, Button } from "semantic-ui-react";
import checkers from "../assets/img/checkers.png";
import colorNotes from "../assets/img/colornotesv3.png";
import seeYouThere from "../assets/img/seeYouThere.png";
import greatExpense from "../assets/img/greatExpense.png";
import faceRecogniser from "../assets/img/face-recogniser.png";
import roboFriends from "../assets/img/roboFriends.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="our-work" id="my-projects">
      <h3 className="title">My Projects</h3>

      <ul className="grid">
        <li className="small p2">
          <Modal
            trigger={
              <img
                className="project-images"
                src={colorNotes}
                alt="colorNotes"
              />
            }
            closeIcon
          >
            <Modal.Header className="ui center aligned">
              Color Notes
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped src={colorNotes} />
              <Modal.Description>
                <p>
                  A fun colorful place to organize your notes and get things
                  done. Built on React using some great libraries, including
                  Particles JS and Semantic UI React.
                </p>
                <p>
                  Backend written using Express and MongoDB. Users can log in to
                  save and update notes. JWT is used to keep user logged in on
                  refresh.
                </p>
                <div className="buttons">
                  <form action="https://github.com/jncameron/colorNotes">
                    <Button primary>Code</Button>
                  </form>
                  <form action="http://cnapi-env-1.gdmmdmsy82.ap-southeast-2.elasticbeanstalk.com">
                    <Button secondary>Live</Button>
                  </form>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p1">
          <Modal
            trigger={
              <img className="project-images" src={checkers} alt="checkers" />
            }
            closeIcon
          >
            <Modal.Header className="ui center aligned">Checkers</Modal.Header>
            <Modal.Content image>
              <Image wrapped src={checkers} />
              <Modal.Description>
                <p>
                  This was my major university project. Checkers allows users to
                  authenticate and play against their friends or against the
                  computer. Users can challenge any online player and chat with
                  opponents in-game{" "}
                </p>
                <p>
                  Technologies used include VueJs, Node, Express, MongoDB,
                  WebSocket and a whole lot of svg.
                </p>
                <div className="buttons">
                  <form action="https://github.com/jncameron/checkers">
                    <Button primary>Code</Button>
                  </form>
                  <form action="http://checkers.ap-southeast-2.elasticbeanstalk.com/">
                    <Button secondary>Live</Button>
                  </form>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p3">
          <Modal
            trigger={
              <img
                className="project-images"
                src={seeYouThere}
                alt="seeYouThere"
              />
            }
            closeIcon
          >
            <Modal.Header className="ui center aligned">
              See You There
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped src={seeYouThere} />
              <Modal.Description>
                <p>
                  Another major university project. See You There is an events
                  based android application, designed to assist international
                  students meet and find interestiing things to do.
                </p>
                <p>
                  Written in Kotlin and built with Android Studio and Firebase.
                </p>
                <div className="buttons">
                  <form action="https://github.com/jncameron/kotlin-app-see-you-there">
                    <Button primary>Code</Button>
                  </form>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p1">
          <Modal
            trigger={
              <img
                className="project-images"
                src={greatExpense}
                alt="greatExpense"
              />
            }
            closeIcon
          >
            <Modal.Header className="ui center aligned">
              Great Expense
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped src={greatExpense} />
              <Modal.Description>
                <p>
                  A big thanks to Udemy Instructor Andrew Mead for getting me
                  started on this one. Current functionality allows
                  authentication through Google, Facebook or Github. Users can
                  create and categorize expenses, and filter and sort lists of
                  expenses in the dashboard.
                </p>
                <p>Built using React, Redux and Firebase for persistance.</p>
                <div className="buttons">
                  <form action="https://github.com/jncameron/greatExpense">
                    <Button primary>Code</Button>
                  </form>
                  <form action="https://great-expense.firebaseapp.com">
                    <Button secondary>Live</Button>
                  </form>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p2">
          <Modal
            trigger={
              <img
                className="project-images"
                src={faceRecogniser}
                alt="faceRecogniser"
              />
            }
            closeIcon
          >
            <Modal.Header className="ui center aligned">
              Recogniser
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped src={faceRecogniser} />
              <Modal.Description>
                <p>
                  Just a bit of fun with Clarifai's face detect api. Enter an
                  image url, the mighty brain will find faces in the crowd
                </p>
                <p>
                  Built with React, with a little help from Particles.js-React
                  and Clarifai
                </p>

                <div className="buttons">
                  <form action="https://github.com/jncameron/Recogniser">
                    <Button primary>Code</Button>
                  </form>
                  <form action="https://jncameron.github.io/Recogniser/">
                    <Button secondary>Live</Button>
                  </form>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
        <li className="small p3">
          <Modal
            trigger={
              <img
                className="project-images"
                src={roboFriends}
                alt="roboFriends"
              />
            }
            closeIcon
          >
            <Modal.Header className="ui center aligned">
              RoboFriends
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped src={roboFriends} />
              <Modal.Description>
                <p>
                  A great little project from Andrei Neagoie's Udemy tutorials.
                  Everyone needs a robofriend, right? Robofriends calls a list
                  of test users from one api and gives them random robot avatars
                  from another.
                </p>
                <p>Built with React and a splash of Redux.</p>
                <div className="buttons">
                  <form action="https://github.com/jncameron/robofriends">
                    <Button primary>Code</Button>
                  </form>
                  <form action="https://jncameron.github.io/robofriends/">
                    <Button secondary>Live</Button>
                  </form>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
