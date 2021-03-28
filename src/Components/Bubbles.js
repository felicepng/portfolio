import React, { Component } from 'react';
import Bubble from './Bubble';

class Bubbles extends Component {
  render() {
    return (
      <>
        <Bubble 
          background="radial-gradient(#2aa8aa, #000000)"
          width="100px"
          height="100px"
          left="10%"
          duration="4s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#588dff, #000000)"
          width="150px"
          height="150px"
          left="20%"
          duration="8s"
          delay="1s"
        />
        <Bubble 
          background="radial-gradient(#1245b4, #000000)"
          width="170px"
          height="170px"
          left="35%"
          duration="4s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#5877ff, #000000)"
          width="130px"
          height="130px"
          left="50%"
          duration="6s"
          delay="0s"
        />
        <Bubble 
          background="rradial-gradient(#3626c4, #000000)"
          width="205px"
          height="205px"
          left="55%"
          duration="14s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#215ba2, #000000)"
          width="135px"
          height="135px"
          left="40%"
          duration="11s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#2d24da, #000000)"
          width="175px"
          height="175px"
          left="75%"
          duration="5s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#293ce7, #000000);"
          width="120px"
          height="120px"
          left="80%"
          duration="10s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#22ccc9, #000000)"
          width="145px"
          height="145px"
          left="70%"
          duration="9s"
          delay="0s"
        />
        <Bubble 
          background="radial-gradient(#26b3d6, #000000)"
          width="190px"
          height="190px"
          left="25%"
          duration="6s"
          delay="0s"
        />
      </>
    );
  }
}

export default Bubbles;