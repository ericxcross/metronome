import React, {Component} from 'react';
import PlayIcon from './PlayIcon.js'

const PlayButton = (props) => {

  return (
    <div className = "play-button" onClick={props.handleButtonClick}>
      <PlayIcon
        isPlaying={props.isPlaying}
      />
    </div>
  );


}

export default PlayButton;
