import React from 'react';
import './DepartureLetter.scss';

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-™®";
const alphaArray = alphabet.split('');

class DepartureLetter extends React.Component {
  state = {
    letter: ' '
  }

  alphabetSoup = (ltr) => {
    let result = alphaArray.indexOf(ltr.toUpperCase())
    return result;
  }

  flipRecurser = () => {
    const outgoing = this.alphabetSoup(this.state.letter);
    const incoming = this.alphabetSoup(this.props.inLetter);
    //if the index of the current state is less than the incoming letter
    if ( incoming < outgoing && outgoing !== 0 ) {
      this.setState({ letter: alphaArray[outgoing - 1] })
    } else if (incoming > outgoing) {
      this.setState({ letter: alphaArray[outgoing + 1] })
      //continually running over and over and over. Which means, this happens on the componentDidMount, so look at the row
      //state never actully changes? or just resets everytime there's a new title implimented?
    } else if (incoming === outgoing) {
      return null
    }
  }

  componentDidMount() {
    setInterval(this.flipRecurser, 50)
  }

  componentDidUpdate() {
    setInterval(this.flipRecurser, 50)
  }

  componentWillUnmount() {
    clearInterval();
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
            <span className="text" style={{transitionDuration:'50ms', transitionTimingFunction: 'ease-out', transform:'scaleY(1)', top:0}}>{letter}</span>
          </span>
        </span>
      </span>
    </div>
    );
  }
}

export default DepartureLetter;