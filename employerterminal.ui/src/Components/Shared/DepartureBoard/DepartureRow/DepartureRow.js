import React from 'react';
import DepartureLetter from '../DepartureLetter/DepartureLetter';
import { splitTheDifference } from '../../../../helpers/utilities/makeADifference';

class DepartureRow extends React.Component {
state = {
  letters: []
}
  getLetters = (letterCount, message) => {
    const arr = Array.from(message);
    const newLetters = splitTheDifference(arr,letterCount)
    this.setState({letters : newLetters})
  }

  componentDidMount() {
    const { letterCount, message } = this.props;
    this.getLetters(letterCount, message)
  }

  render () {
    const { letters }  = this.state;
    const buildRow = letters.map((letter, index) => <DepartureLetter key={index} inLetter={letter}/>)
    return (
      <div className="DepartureRow d-flex justify-content-center">
      {buildRow}
      </div>
    );
  }
}

export default DepartureRow;