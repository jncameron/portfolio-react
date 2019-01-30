import React from 'react';
import './Header.css';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';



const Header = () => {

    if (window.innerWidth > 700)
      return <NavDesktop />
    else {
      return <NavMobile />
    }
}

export default Header;
