import React from 'react';

const BpmSlider = (props) => {

  return(
    <div className="slider-box">
      <h2>-</h2>
      <input
        type="range"
        min="1"
        max="360"
        value={props.sliderValue}
        className="slider"
        onChange = {props.handleSliderMovement}/>
      <h2>+</h2>
    </div>
  );

}

export default BpmSlider;
