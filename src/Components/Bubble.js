import React from 'react';

function Bubble(props) {
  return (
    <div className="bubble" 
      style={{
        background: props.background,
        width: props.width,
        height: props.height,
        left: props.left,
        animationDuration: props.duration,
        animationDelay: props.delay
      }}
    >
    </div>
  );
}

export default Bubble;