import React from 'react';
import './DepartureLetter.scss';

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-";

const alphabetSoup = (ltr) => {
  const result = alphabet.filter((a) => a === ltr);
  console.log(result)
}

const flip = (currentLetter, newLetter) => {
    const startPoint = alphabetSoup(currentLetter);
    const endPoint = alphabetSoup(newLetter);
    // take in letter and loop through alphabetSoup starting point till letter matches new letter.
	for (var i = 0, l = alphabet.length; i < l; i++) {
		(function (i) {
			window.setTimeout (function () {
				alphabet[i].spin ();
			}, 20 * i + Math.random () * 400);
		})(i);
	}
};

class DepartureLetter extends React.Component {
  state = {
    letter: ' ',
    newLetter: '',
  }

  componentDidMount() {
    const { letter } = this.setState;
  }

  componentDidUpdate() {
    const { letter } = this.state;
    const { newLetter } = this.props;
    this.SetState = { newLetter:newLetter }
    flip(letter, newLetter);
  }

  render () {
    const { letter } = this.props;
    return (
      <div className="DepartureLetter">
        <span className="letter">
        <span className="flap bottom">
            <span className="text">{letter}</span>
          </span>
        <span className="flap top">
            <span className="text">{letter}</span>
          </span>
          <span className="fold">
            <span className="flap falling" style={{display:'none', top:'auto', bottom:0,}}>
              <span className="text" style={{transitionDuration:'50ms', transitionTimingFunction: 'ease-out', transform:'scaleY(1)', top:0}}>{letter}</span>
            </span>
          </span>
        </span>
      </div>
    );
  }
}

export default DepartureLetter;