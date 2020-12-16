import React from 'react';
import DepartureLetter from '../DepartureLetter/DepartureLetter';
import { splitTheDifference } from '../../../../helpers/utilities/makeADifference';

class DepartureRow extends React.Component {
state = {
  message: [],
}
  getLetters = (letterCount, message) => {
    const arr = Array.from(message.toUpperCase());
    const newLetters = splitTheDifference(arr,letterCount)
    this.setState({message : newLetters})
  }

  componentDidMount() {
    const { letterCount, message } = this.props;
    this.getLetters(letterCount, message)
  }

  render () {
    const { message }  = this.state;
    const buildRow = message.map((letter, index) => <DepartureLetter key={index} letterId={letter+index} inLetter={letter} />)
    return (
      <div className="DepartureRow d-flex justify-content-center">
      {buildRow}
      </div>
    );
  }
}

export default DepartureRow;