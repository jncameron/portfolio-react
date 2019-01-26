import React from 'react';
import './About.css';

const About = () => {
  return (
	<section className="about">
		<h3 className="title">About Me</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
		<ul className="grid">
			<li>
				<i className="fas fa-graduation-cap"></i>
				<h4>Education</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
			<li>
				<i className="fa fa-cubes"></i>
				<h4>Interests</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
		</ul>
	</section>
  )
}

export default About;