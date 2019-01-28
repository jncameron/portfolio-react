import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return<div className="scrolling-app">
    {props.children}
  </div>
}

export default Scroll;