import React from 'react';

const BpmDisplay = (props) => {
  return(
    <div className = "bpm-display">
      <h1>{props.bpm}</h1>
      <h2>BPM</h2>
    </div>
  )
}

export default BpmDisplay;
