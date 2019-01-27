import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Scroll from './components/Scroll';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Scroll>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Scroll>
      </div>
    );
  }
}

export default App;
