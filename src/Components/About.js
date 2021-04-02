import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class About extends Component {
  render() {
    return (
      <Fade duration={5000}>
        <p
          id="about"
          style={{
            paddingTop: "90px",
            width: "40%",
            height: "100%",
            paddingLeft: "30%",
            lineHeight: "180%",
          }}
        >
          <h2>About me</h2>
          <p className="p3">
            I am a first-year Computer Science student at Singapore Management
            University. I love to design, challenge myself, and constantly 
            strive to improve my skills.
          </p>
        </p>
      </Fade>
    );
  }
}

export default About;