import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
