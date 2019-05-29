import React , {Component} from 'react';
import PlayButton from '../component/PlayButton.js';
import BpmSlider from '../component/BpmSlider.js';

class MetronomeContainer extends Component{

  constructor(props){
    super(props);
      this.state = {
        isPlaying: false,
        bpm: 180
      };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSliderMovement = this.handleSliderMovement.bind(this);
  }

  handleButtonClick(evt){
    console.log("click");
    this.state.isPlaying === true ? this.setState({isPlaying: false}) : this.setState({isPlaying: true});
  }

  handleSliderMovement(evt){
    console.log(evt.target.value)
  }

  render(){
    return(
      <div className="metronome-container">
        <BpmSlider
          slider = {this.state.bpm}
          handleSliderMovement = {this.handleSliderMovement}
        />
        <PlayButton
          isPlaying = {this.state.isPlaying}
          handleButtonClick = {this.handleButtonClick}
        />
      </div>
    );
  }

}

export default MetronomeContainer;
