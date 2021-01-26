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
          <Col xl={2} lg={2} md={2} sm={12} xs={12}>
            <Logo className="logo center-sm"/>
          </Col>
          <Col className="align-middle" xl={10} lg={10} md={10} sm={12} xs={12}>
          <h1 className="header-title center-sm">Experience Terminal</h1>
          </Col>
        </Row>
        <Row>
          <DepartureBoard
            letterCount={18}
            messages={['Evan Grabenstein', selectedTitle ]}
          />
        </Row>
        <Row className="title-selector-container hide-sm">
          <TitleSelector titles={titles} selectedTitle={selectedTitle} titleChange={titleChange}/>
        </Row>
      </Jumbotron>
    );
  }
}

export default HeadBoard;