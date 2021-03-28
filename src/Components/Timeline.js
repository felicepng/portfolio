import React, { Component } from "react";
import { render } from "react-dom";
import { Chrono } from "react-chrono";
import Fade from "react-reveal/Fade";

const items = [
  { title: "Apr 2021" },
  { title: "Jan 2021" },
  { title: "Nov 2020" },
];

class Timeline extends Component {
  render() {
    return (
      <div style={{ width: "50%", height: "100%", paddingLeft: "25%" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          hideControls="true"
          theme={{
            primary: "#cdcdcd",
            secondary: "none",
            cardBgColor: "none",
            cardForeColor: "none",
          }}
        >
          <Fade right duration={5000}>
            <div>
              <h3 className="right">AfterClass Intern</h3>
              <p className="p2 right">Coming soon, while we work on it after class</p>
            </div>
          </Fade>
          <Fade left duration={5000}>
            <div>
              <h3 className="left">SMU Business Intelligence and Analytics Data Associate</h3>
              <p className="p2 left">
                Work with a team to develop a coding language classifier using
                machine learning models
              </p>
            </div>
          </Fade>
          <Fade right duration={5000}>
            <div>
              <h3 className="right">Ellipsis Marketing Executive</h3>
              <p className="p2 right">
                Manage social media accounts, design marketing collaterals for
                school-wide campaigns and events
              </p>
            </div>
          </Fade>
        </Chrono>
      </div>
    );
  }
}

export default Timeline;