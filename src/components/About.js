import React from 'react';
import './About.css';

const About = () => {
  return (
	<section className="about">
		<h3 className="title">About Me</h3>
		<ul className="grid">
      <li className="my-pic">
			</li>
			<li>
				<i className="fas fa-info-circle"></i>				
				<p>
          John has spent the last two years learning everything he can about software development.
          He's worked on some great projects and is looking for full-stack web development opportunities.
        </p>
				<i className="fas fa-graduation-cap"></i>				
				<p><strong>Graduate Diploma in Information Techonology</strong></p>
        <p>University of New England</p>
        <p><strong>Master of Professional Accounting</strong></p>
        <p>University of Sydney</p>
      </li>
		</ul>
	</section>
  )
}

export default About;