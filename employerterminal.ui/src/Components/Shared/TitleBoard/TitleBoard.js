import React from 'react';
import { Jumbotron, Col, Row } from 'react-bootstrap';

class TitleBoard extends React.Component {

  render () {
    const { title } = this.props;
    return (
      <Jumbotron bsPrefix="head-board">
        <Row>
          <Col>
            <h2 className="text-center">{title.toUpperCase()}</h2>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default TitleBoard;