import React from 'react';
import DepartureRow from './DepartureRow/DepartureRow';
import './DepartureBoard.scss';

class DepartureBoard extends React.Component {
  state = {
    rowCount: '',
    letterCount: '',
    messages: []
  }

  componentDidMount() {
    const { rowCount, letterCount, messages } = this.props;
    this.setState({ rowCount: rowCount, letterCount:letterCount, messages:messages })
  }

  render () {
    const { messages, letterCount } = this.state;
    const buildBoard = messages.map((message) => <DepartureRow message={message} letterCount={letterCount} />)
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