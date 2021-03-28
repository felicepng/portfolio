import React, { Component } from "react";
import Timeline from "./Timeline";
import Fade from "react-reveal/Fade";

class Experience extends Component {
  render() {
    return (
      <div className="profile">
        <Fade duration={5000}>
          <p id="experience" style={{ paddingTop: "70px" }}>
            <h2>Experience</h2>
            <Timeline />
          </p>
        </Fade>
      </div>
    );
  }
}

export default Experience;