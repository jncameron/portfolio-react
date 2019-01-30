import React from 'react';
import './Header.css';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';



const Header = () => {
  return(
    window.innerWidth > 700
    ?
    <NavDesktop />
    :
    <NavMobile />
  )
}

export default Header;
