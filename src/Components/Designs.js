import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ca2 from "../img/ca2.gif";
import cny from "../img/cny.gif";
import heicoders from "../img/heicoders.png";
import scis from "../img/scis.gif";

class Designs extends Component {
  render() {
    return (
      <Fade duration={5000}>
        <div>
          <p className="p3" style={{ paddingTop: "100px" }}>some of my designs!</p>
          <img className="photo" src={ca2} alt="ca2" />
          <img className="photo" src={heicoders} alt="heicoders" />
          <img className="photo" src={cny} alt="cny" />
          <img className="photo-end" src={scis} alt="scis" />
        </div>
      </Fade>
    );
  }
}

export default Designs;