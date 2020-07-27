import React from 'react';
import DepartureLetter from '../DepartureLetter/DepartureLetter';
import { splitTheDifference } from '../../../../helpers/utilities/makeADifference';
import './DepartureRow.scss';

class DepartureRow extends React.Component {

  getLetters() {
    const { letterCount, message } = this.props;
    const arr = Array.from(message);
    const newLetters = splitTheDifference(arr,letterCount)
    return newLetters;
  }

  render () {
    const letters  = this.getLetters();
    const buildRow = letters.map((letter) => <DepartureLetter letter={letter}/>)
    return (
      <div className="DepartureRow d-flex justify-content-center">
      {buildRow}
      </div>
    );
  }
}

export default DepartureRow;