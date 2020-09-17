import React from 'react';
import { Jumbotron, Col, Row } from 'react-bootstrap';

class TitleBoard extends React.Component {

  render () {
    const { title } = this.props;
    return (
      <Jumbotron bsPrefix="head-board">
        <Row>
        {/* <Col xs={1} className="align-middle text-center align-content-center justify-content-center">
          <RadioSelector status="selected" title={""} />
        </Col> */}
        <Col>
          <h2 className="text-center">{title.toUpperCase()}</h2>
        </Col>
        {/* <Col xs={1}>
        </Col> */}
        </Row>
      </Jumbotron>
    );
  }
}

export default TitleBoard;