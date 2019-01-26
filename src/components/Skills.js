import React from 'react';
import { Grid, Segment, Progress } from 'semantic-ui-react';
import './Skills.css';

const Skills = () => {


  return (
	<section className="skills">
    <div className="particles-wrapper">
		<h3 className="title">Skills and Technologies</h3>
		<ul className="grid">
			<li>
				<i className="fas fa-code category-icon languages"></i>
				<h4>Languages</h4>
        <div className="languages-grid">
            <Progress percent={90} className="progress languages" active>JavaScript</Progress>  
            <Progress percent={70} className="progress languages" active>Java</Progress>
            <Progress percent={65} className="progress languages" active>Kotlin</Progress>
            <Progress percent={75} className="progress languages" active>Python</Progress>
            <Progress percent={75} className="progress languages" active>SQL</Progress>

        </div>
			</li>
			<li>
				<i className="fa fa-cubes category-icon frameworks"></i>
				<h4>Frameworks</h4>
        <div className="frameworks-grid">
            <Progress percent={80} className="progress frameworks" active>React</Progress>  
            <Progress percent={85} className="progress frameworks" active>Vue</Progress>
            <Progress percent={65} className="progress frameworks" active>Express</Progress>
            <Progress percent={60} className="progress frameworks" active>Node</Progress>
            <Progress percent={75} className="progress frameworks" active>Android SDK</Progress>
        </div>
			</li>
			<li>
				<i className="fa fa-newspaper category-icon"></i>
				<h4>Development Tools</h4>
        <div className="development-tools-grid">
            <Progress percent={90} className="progress dev-tools" active>Git</Progress>  
            <Progress percent={70} className="progress dev-tools" active>Bash</Progress>
            <Progress percent={65} className="progress dev-tools" active>Webpack</Progress>
            <Progress percent={75} className="progress dev-tools" active>Android Studio</Progress>
            <Progress percent={60} className="progress dev-tools" active>Sass</Progress>
        </div>
			</li>
		</ul>
    </div>

	</section>
  )
}

export default Skills;