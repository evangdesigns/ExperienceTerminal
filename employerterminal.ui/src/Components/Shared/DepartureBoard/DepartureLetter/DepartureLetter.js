import React from 'react';
import {Transition, animated} from 'react-spring/renderprops'
// import { Animated } from "react-animated-css";
import './DepartureLetter.scss';

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-™®";
const alphaArray = alphabet.split('');

class DepartureLetter extends React.Component {
  state = {
    letter: ' '
  }

  alphabetSoup = (ltr) => {
    const result = alphaArray.indexOf(ltr.toUpperCase())
    return result;
  }

  flip = () => {
    const { letter } = this.state;
    const { inLetter } = this.props;
    const startPoint = this.alphabetSoup(letter);
    const endPoint = this.alphabetSoup(inLetter);
    console.log(startPoint, endPoint)
    if (startPoint > endPoint ) {
      for(var i = startPoint; i < endPoint + 1; i--) {
        setInterval(() => this.setState({letter: alphaArray[i]}), 500)
      }
    } else if (startPoint < endPoint) {
      setTimeout(()=>{
        for(i = startPoint; i < endPoint+1; i++) {
        this.setState({letter: alphaArray[i]})
      }}, 500)
    }
  };

  componentDidMount() {
    this.flip()
  }

  render () {
    const { letter } = this.state
    return (
      <div className="DepartureLetter">
        <span className="letter">
        <span className="flap top">
          <span className="text">{letter}</span>
        </span>
        <span className="flap bottom">
          <span className="text">{letter}</span>
        </span>
        <span className="fold">
          <span className="flap falling" style={{ top:'auto', bottom:0,}}>
            <span className="text" style={{transitionDuration:'50ms', transitionTimingFunction: 'ease-out', transform:'scaleY(1)', top:0}}>{this.state.letter}</span>
          </span>
        </span>
      </span>
    </div>
    );
  }
}

export default DepartureLetter;