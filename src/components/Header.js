import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  return(
    <header>
      <div></div>
      <nav>
        <li><Link smooth to="#home">Home</Link></li>
        <li><Link smooth to="#about">About</Link></li>
        <li><Link smooth to="#skills">Skills</Link></li>
        <li><Link smooth to="#my-projects">Projects</Link></li>
        <li><Link smooth to="#contact">Contact</Link></li>
      </nav>
	</header>
  )
}

export default Header;
