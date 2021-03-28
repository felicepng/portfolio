import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      <div className="profile">
        <footer style={{ paddingTop: "30px" }}>
          <SocialIcon
            bgColor="none"
            fgColor="#cdcdcd"
            url="https://www.linkedin.com/in/felicepng/"
          />
          <SocialIcon
            bgColor="none"
            fgColor="#cdcdcd"
            url="https://www.instagram.com/smuellipsis/"
          />
        </footer>
      </div>
    );
  }
}

export default Footer;