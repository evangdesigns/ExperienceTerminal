import React from 'react';
import SkillBox from '../Skills/SkillBox';
import { ReactComponent as Arrow} from '../../../images/icons/icon_arrow.svg';
import { Row, Col, Container, Media } from 'react-bootstrap';

import { getTitle } from '../../../helpers/data/titles';

import './DirectiveSign.scss';

class DirectiveSign extends React.Component {
  state = {
    next: [],
    prev: []
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getNextTitle(titleId)
    this.getPreviousTitle(titleId)
  }

  componentWillReceiveProps(nextProps) {
    const { titleId } = this.props;
    if (nextProps.titleId !== titleId ) {
      this.getNextTitle(nextProps.titleId);
      this.getPreviousTitle(nextProps.titleId)
      }
    }

  getNextTitle = (titleId) => {
    let nextTitle = 0;
    if (titleId === 1 ) {
      nextTitle = titleId + 2;
    } else if (titleId === 3 || titleId === 4 || titleId === 5) {
      nextTitle = titleId + 1;
    } else if (titleId === 6) {
      nextTitle = 1;
    }
    getTitle(nextTitle)
    .then(title => this.setState({ next : title }))
  }

  getPreviousTitle = (titleId) => {
    let prevTitle = 0;
    if (titleId === 1 ) {
      prevTitle = 6;
    } else if (titleId === 4 || titleId === 5 || titleId === 6) {
      prevTitle = titleId - 1;
    } else if (titleId === 3) {
      prevTitle = 1;
    }
    getTitle(prevTitle)
    .then(title => this.setState({ prev : title }))
  }

  render () {
    const { selectedTitle, titleId } = this.props;
    const { next, prev } = this.state;
    return (
      <div>
        <div className="bars d-flex justify-content-around">
          <svg  width="25" height="40" style={{marginTop:-20, marginBottom:-20}}>
            <rect width="25" height="40" />
          </svg>
          <svg width="25" height="40" style={{marginTop:-20, marginBottom:-20}}>
            <rect width="25" height="40" />
          </svg>
        </div>
        <Container bsPrefix="DirectiveSign">
        <Row className="upperDeck py-3">
          <Col>
            <Media>
              <Arrow className="align-self-start mr-3 hrzArrow" transform="rotate(180)" />
              <Media.Body>
              <h3>{prev.title_Name}</h3>
              </Media.Body>
            </Media>
          </Col>
          <Col>
          <Media>
            <Media.Body>
            <h3 className="text-right">{next.title_Name}</h3>
            </Media.Body>
            <Arrow className="align-self-start ml-3 hrzArrow" />
          </Media>
          </Col>
        </Row>
        <Row>
          <Col className="py-3">
            <h1 className="text-center">{selectedTitle}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={1} className="align-self-end px-0">
          <Arrow  className="mb-2 vrtArrow" transform="rotate(90)" />
          </Col>
          <Col xs={10} className="px-0">
            <SkillBox titleId={titleId} />
          </Col>
          <Col xs={1} className="align-self-end px-0">
          <Arrow  className="mb-2 vrtArrow float-right" transform="rotate(90)"/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default DirectiveSign;