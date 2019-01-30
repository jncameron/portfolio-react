import React from 'react';
import './About.css';

const About = () => {
  return (
	<section className="about" id="about">
		<h3 className="title">About Me</h3>
		<ul className="grid">
      <li className="my-pic">
			</li>
			<li>
				<i className="fas fa-info-circle"></i>				
				<p>
          Hi I'm John. I've spent the last two years learning everything I can about software development.
          I've worked on some great projects and I'm looking for challenging full-stack web development opportunities.
        </p>
				<i className="fas fa-graduation-cap"></i>				
				<p><strong>Graduate Diploma in Information Technology</strong></p>
        <p>University of New England</p>
        <p><strong>Master of Professional Accounting</strong></p>
        <p>University of Sydney</p>
      </li>
		</ul>
	</section>
  )
}

export default About;