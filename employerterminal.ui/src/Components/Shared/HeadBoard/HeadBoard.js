import React from 'react';
import DepartureBoard from '../DepartureBoard/DepartureBoard';
import TitleSelector from './TitleSelector/TitleSelector';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { Row, Col, Jumbotron } from 'react-bootstrap';



class HeadBoard extends React.Component {

  render () {
    const { selectedTitle, titles, titleChange } = this.props;
    return (
      <Jumbotron bsPrefix="head-board">
        <Row className="board-header mx-2">
          <Col>
            <Row>
              <Col>
              <h1 className="welcome">
                  <Logo className="logo"/>
                  &nbsp;Welcome
                </h1>
              </Col>
            </Row>
          </Col>
          <Col>
            <h1 className="text-right">Experience Terminal</h1>
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