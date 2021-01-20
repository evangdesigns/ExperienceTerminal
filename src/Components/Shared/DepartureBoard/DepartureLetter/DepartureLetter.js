import React from 'react';
import './DepartureLetter.scss';

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-™®";
const alphaArray = alphabet.split('');

class DepartureLetter extends React.Component {
  state = {
    letter: ' '
  }

  alphabetSoup = (ltr) => {
    let result = alphaArray.indexOf(ltr)
    return result;
  }

  flipRecurser = () => {
    const { letter } = this.state;
    let oldLI = this.alphabetSoup(letter);
    let newLI = this.alphabetSoup(this.props.inLetter);
    // console.log(oldLI, newLI)
    if (newLI > oldLI ) {
        this.setState({ letter: alphaArray[oldLI + 1]})
    } else if ( newLI < oldLI ) {
      this.setState({ letter: alphaArray[newLI + 1]})
    }
  }

  componentDidMount() {
    const { letter } = this.state;
    let oldLI = this.alphabetSoup(letter);
    let newLI = this.alphabetSoup(this.props.inLetter);
    if (newLI === oldLI) {
      return null;
    } else if (newLI !== oldLI) {
    setInterval(this.flipRecurser, 100)
    }
  }

  componentWillUnmount() {
    clearInterval();
    window.sessionStorage.clear();
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
        <span className="foldLetter">
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