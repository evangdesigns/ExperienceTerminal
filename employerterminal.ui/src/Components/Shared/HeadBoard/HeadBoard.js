import React from 'react';
import DepartureBoard from '../DepartureBoard/DepartureBoard';
import TitleSelector from './TitleSelector/TitleSelector';
import { ReactComponent as Arrow } from '../../../images/icons/icon_arrow.svg';

// import './HeadBoard.scss';

class HeadBoard extends React.Component {

  render () {
    const { selectedTitle, titles, titleChange } = this.props;
    return (
      <div className="head-board">
        <div className="board-header d-flex flex-wrap justify-content-between">
          <div className="inline">
            <Arrow className="arrow"/><h1>Arrivals</h1>
          </div>
          <div className="inline">
            <h1>Employer Terminal</h1>
          </div>
        </div>
        <DepartureBoard
          letterCount={20}
          messages={['Evan Grabenstein', selectedTitle ]}
        />
        <div className="title-selector-container">
          <TitleSelector titles={titles} selectedTitle={selectedTitle} titleChange={titleChange}/>
        </div>
      </div>
    );
  }
}

export default HeadBoard;