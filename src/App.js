import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Name from './Components/Name';
import About from './Components/About';
import Experience from './Components/Experience';
import Designs from './Components/Designs';
import Footer from './Components/Footer';
import Bubbles from './Components/Bubbles';
import Bubble from './Components/Bubble';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <Header />
      <div className="top-container">
        <Name />
        <Bubbles />
      </div>
      
      <div className="middle-container">
        <About />
        <Experience />
        <Designs />
      </div>

      <div className="end-container">
        <Footer />
      </div>
      </>
    );
  }
}

export default App;