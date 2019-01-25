import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
