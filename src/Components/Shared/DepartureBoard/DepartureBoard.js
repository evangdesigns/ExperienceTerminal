import React from 'react';
import DepartureRow from './DepartureRow/DepartureRow';
import './DepartureBoard.scss';

class DepartureBoard extends React.Component {

  renderView = () => {
    const { messages, letterCount } = this.props;
    if (messages) {
      return (
        messages.map(message => <DepartureRow key={message} message={message} letterCount={letterCount} />)
      )
    } else {
      return (
        <h1 className="text-center">No Departures</h1>
      )
    }
  }

  render () {
    return (
      <div className="DepartureBoard">
        {this.renderView()}
      </div>
    );
  }
}

export default DepartureBoard;