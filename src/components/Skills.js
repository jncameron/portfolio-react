import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
	<section className="skills">
		<h3 className="title">Skills and Technologies</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
		<ul className="grid">
			<li>
				<i className="fa fa-camera-retro"></i>
				<h4>Languages</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
			<li>
				<i className="fa fa-cubes"></i>
				<h4>Frameworks</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
			<li>
				<i className="fa fa-newspaper-o"></i>
				<h4>Development Tools</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
			</li>
		</ul>
	</section>
  )
}

export default Skills;