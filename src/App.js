import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Name from './Components/Name';
import About from './Components/About';
import Experience from './Components/Experience';
import Designs from './Components/Designs';
import Footer from './Components/Footer';
import Bubbles from './Components/Bubbles';

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
        <div className="profile">
          <About />
          <Experience />
          <Designs />
        </div>
      </div>

      <div className="end-container">
        <Footer />
      </div>
      </>
    );
  }
}

export default App;