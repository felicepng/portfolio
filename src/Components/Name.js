import React, { Component } from 'react';
import bg from '../img/bg.png';

class Name extends Component {
  render() {
    return (
      <>
        <div style={{paddingTop:'245px'}}>
          <div class="animate-flicker">
            <h1>Hi, I'm Felice</h1>
            <p id="p1">an aspiring software developer.</p> 
          </div>
        </div>
        <img id="bg" src={bg} alt="bg" />
      </>
    );
  }
}

export default Name;
