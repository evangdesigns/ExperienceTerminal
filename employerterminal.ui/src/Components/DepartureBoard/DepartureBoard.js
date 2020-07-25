import React from 'react';
import DepartureRow from './DepartureRow/DepartureRow';
import './DepartureBoard.scss';

class DepartureBoard extends React.Component {

  render () {
    const { messages, letterCount } = this.props;
    const buildBoard = messages.map(message => <DepartureRow key={message} message={message} letterCount={letterCount} />)

    return (
      <div className="DepartureBoard">
        {messages
        ? buildBoard
        : <h1 className="text-center">No Departures</h1>
        }
      </div>
    );
  }
}

export default DepartureBoard;