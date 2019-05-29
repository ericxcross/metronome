import React , {Component} from 'react';
import PlayButton from '../component/PlayButton.js';
import BpmSlider from '../component/BpmSlider.js';
import BpmDisplay from '../component/BpmDisplay.js';
import SoundButtons from '../component/SoundButtons.js';


import bass from "../sounds/bass_guitar.wav"
import snare from "../sounds/drum_snare.wav"
import quack from "../sounds/duck_quack.wav"
import snap from "../sounds/finger_snap.wav"

let playSound;

class MetronomeContainer extends Component{

  constructor(props){
    super(props);
      this.state = {
        isPlaying: false,
        bpm: 180,
        currentAudioFile: 0
      };
      this.audioFiles = [
        {name: "snap", sound: new Audio(snap) },
        {name: "snare", sound: new Audio(snare)},
        {name: "quack", sound: new Audio(quack)},
        {name: "bass", sound: new Audio(bass)}
        ];
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSliderMovement = this.handleSliderMovement.bind(this);
  }

  handleButtonClick(evt){
    if(this.state.isPlaying === false){
      this.setState({isPlaying: true})
      document.querySelector("#metronome-container").style.animationName = "color";
      this.setFlashSpeed();
      this.playAudioFile();
    }else{
      this.setState({isPlaying: false});
      document.querySelector("#metronome-container").style.animationName = "";
      clearInterval(playSound);
    }
  }

  playAudioFile(){
    // this.audioFiles[0].sound.play();
    // console.log('BPM setInterval Interval:', this.bpmCalculate() * 1000);
    playSound = setInterval( () => {
      this.audioFiles[2].sound.load();
      this.audioFiles[2].sound.play();
      }, this.bpmCalculate()
    )
    // setInterval(function: function, interval: int)
  }


  handleSliderMovement(evt){
    this.setState({bpm: evt.target.value})
    this.setFlashSpeed();
    clearInterval(playSound);
    this.playAudioFile();
  }

  bpmCalculate(){
    // the ms delay between sounds will be 1000ms
    return (60/this.state.bpm)*1000;
  }

  setFlashSpeed(){
    const flashSpeed = this.bpmCalculate().toString() + "ms";
    document.querySelector("#metronome-container").style.animationDuration = flashSpeed;
  }

  render(){
    return(
      <div id="metronome-container">
        <BpmSlider
          slider = {this.state.bpm}
          handleSliderMovement = {this.handleSliderMovement}
        />
        <BpmDisplay
          bpm = {this.state.bpm}
        />
        <SoundButtons/>
        <PlayButton
          isPlaying = {this.state.isPlaying}
          handleButtonClick = {this.handleButtonClick}
        />
      </div>
    );
  }
}

export default MetronomeContainer;
