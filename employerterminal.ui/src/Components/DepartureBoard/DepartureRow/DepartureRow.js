import React from 'react';
import DepartureLetter from '../DepartureLetter/DepartureLetter';
import { splitTheDifference } from '../../../helpers/utilities/makeADifference';
import './DepartureRow.scss';

class DepartureRow extends React.Component {
  state = {
    letters: []
  }

  componentDidMount() {
    const { message, letterCount } = this.props;
    const arr = Array.from(message);
    const newLetters = splitTheDifference(arr,letterCount)
    this.setState({ letters: newLetters })
  }

  render () {
    const { letters } = this.state;
    const buildRow = letters.map((letter) => <DepartureLetter letter={letter}/>)
    return (
      <div className="DepartureRow">
        {letters
        ? buildRow
        : <h1 className="text-center">No Departures</h1>}
      </div>
    );
  }
}

export default DepartureRow;