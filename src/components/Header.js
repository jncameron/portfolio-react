import React from 'react';
import Link from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
  return(
    <header>
      <div></div>
      <nav>
        <li><NavLink 
          exact
          activeClassName="active-link"
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
          location={{pathname: document.location.pathname + document.location.hash}}
          to="/#home">Home</NavLink></li>
        <li><NavLink 
          exact
          activeClassName="active-link"
          location={{pathname: document.location.pathname + document.location.hash}}
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
          to="/#about">About</NavLink></li>
        <li><NavLink 
          activeClassName="active-link" 
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          location={{pathname: document.location.pathname + document.location.hash}}

          to="/#skills">Skills</NavLink></li>
        <li><NavLink 
        activeClassName="active-link" 
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          location={{pathname: document.location.pathname + document.location.hash}}
          to="/#my-projects">Projects</NavLink></li>
        <li><NavLink 
          activeClassName="active-link" 
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          location={{pathname: document.location.pathname + document.location.hash}}
          to="/#contact">Contact</NavLink></li>
      </nav>
	</header>
  )
}

export default Header;
