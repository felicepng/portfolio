import React, { Component } from 'react';

class Bubble extends Component {
  render() {
    return (
      <div className="bubble" 
        style={{
          background: this.props.background,
          width: this.props.width,
          height: this.props.height,
          left: this.props.left,
          animationDuration: this.props.duration,
          animationDelay: this.props.delay
        }}
      >
      </div>
    );
  }
}

export default Bubble;