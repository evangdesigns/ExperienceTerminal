import React from 'react';
import DepartureBoard from '../DepartureBoard';
import TitleSelector from './TitleSelector/TitleSelector';
import { ReactComponent as Logo } from '../../../../images/logo.svg';
import { Row, Col, Jumbotron } from 'react-bootstrap';



class HeadBoard extends React.Component {

  render () {
    const { selectedTitle, titles, titleChange } = this.props;
    return (
      <Jumbotron bsPrefix="head-board">
        <Row className="board-header d-flex flex-wrap justify-content-between">
          <Col inline>
            <Row>
              <Col className="pr-0" lg={2}><Logo className="logo"/></Col>
              <Col>
              <h1 className="align-middle">Arrivals</h1>
              </Col>
            </Row>
          </Col>
          <Col>
            <h1 className="text-right">Employer Terminal</h1>
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