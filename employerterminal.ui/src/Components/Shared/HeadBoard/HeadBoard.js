import React from 'react';
import DepartureBoard from '../DepartureBoard/DepartureBoard';
import TitleSelector from './TitleSelector/TitleSelector';
import RadioSelection from '../RadioSelection/RadioSelection';
import { ReactComponent as Arrow } from '../../../images/icons/arrow.svg';
import { Row, Col, Jumbotron } from 'react-bootstrap';

class HeadBoard extends React.Component {

  render () {
    const { selectedTitle, titles, titleChange } = this.props;
    return (
      <Jumbotron bsPrefix="head-board">
        <Row className="board-header d-flex flex-wrap justify-content-between">
          <Col inline>
            <Row>
              <Col lg={2}><Arrow className="arrow"/><img src="src/images/icons/arrow.svg" alt="test"/></Col>
              <Col>
              <h1 className="align-middle">Employer Terminal</h1>
              <p className="align-middle">Arrivals</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <h1 className="text-right">Welcome To My Portfolio</h1>
            <p className="text-right">Pick A Stop.</p>
          </Col>
        </Row>
        <Row>
          <DepartureBoard
            letterCount={20}
            messages={['Evan Grabenstein', selectedTitle ]}
          />
        </Row>
        <Row className="title-selector-container">
          <TitleSelector titles={titles} selectedTitle={selectedTitle} titleChange={titleChange}/>
        </Row>
      </Jumbotron>
    );
  }
}

export default HeadBoard;