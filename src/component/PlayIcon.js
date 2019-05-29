import React from 'react';

const PlayIcon = (props) => {
  if (props.isPlaying === true){
    return (<img src="https://img.icons8.com/metro/420/play.png" alt="play button"/>);
  } else {
    return (<img src="https://img.icons8.com/metro/420/pause.png" alt="pause button"/>);
  }
}

export default PlayIcon;
