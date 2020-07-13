import React from 'react';
import DepartureBoard from '../Components/DepartureBoard/DepartureBoard';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <DepartureBoard
          rowCount={2}
          letterCount={20}
          messages={['Evan Grabenstein', 'Graphic Designer', 'and Awesome Guy']}
        />
      </div>
    );
  }
}

export default App;
