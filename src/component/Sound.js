import React, {Component} from 'react';

class Sound extends Component{
  constructor(props){
    super(props);
    this.state = {

      sounds: [
        {name: "click", url: "../../public/sounds/finger_snap.wav" },
        {name: "snare", url: "../../public/sounds/drum_snare.wav"},
        {name: "quack", url: "../../public/sounds/duck_quack.wav"},
        {name: "bass", url: "../../public/sounds/bass_guitar.wav"}
      ],
      selectedSound: new Audio(this.state.sounds[0].url)
    };
  };

  return(
    <Sound src=""/>


  )


  play(){





  }


  render(){
    return(

    )
  }
}

export default Sound;
