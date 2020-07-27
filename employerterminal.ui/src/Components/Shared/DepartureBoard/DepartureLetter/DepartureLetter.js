import React from 'react';
// import { Animated } from "react-animated-css";
// import { flip } from '../../../helpers/utilities/lettersGalore';
import './DepartureLetter.scss';

class DepartureLetter extends React.Component {
  render () {
    const { letter } = this.props;
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