import React from 'react';
import { Jumbotron, Col, Row } from 'react-bootstrap';
import DepartureBoard from '../../Shared/DepartureBoard/DepartureBoard';
import RadioSelector from '../../Shared/RadioSelection/RadioSelection';

class TitleBoard extends React.Component {

  render () {
    const { title } = this.props;
    return (
      <Jumbotron bsPrefix="head-board">
        <Row>
        <Col xs={1}>
          <RadioSelector status="selected" title={""} />
        </Col>
        <Col>
          <DepartureBoard letterCount={18} messages={[title]} />
        </Col>
        <Col xs={1}>
        </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default TitleBoard;