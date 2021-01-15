import React from 'react';
import SkillBox from '../Skills/SkillBox';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow} from '../../../images/icons/icon_arrow.svg';
import { Row, Col, Container, Media } from 'react-bootstrap';
import { getTitle } from '../../../helpers/data/titles';

import './DirectiveSign.scss';


class DirectiveSign extends React.Component {
  state = {
    next: [],
    prev: []
  }

  getNextTitle = (titleId) => {
    let nextTitle = 0;
    if (titleId === 1 || titleId === 2 || titleId === 3 || titleId === 4) {
      nextTitle = titleId + 1;
    } else if (titleId === 5) {
      nextTitle = 1;
    }
    getTitle(nextTitle)
    .then(title => this.setState({ next : title }))
  }

  getPreviousTitle = (titleId) => {
    let prevTitle = 0;
    if (titleId === 1 ) {
      prevTitle = 5;
    } else if (titleId === 2 || titleId === 3 || titleId === 4 || titleId === 5) {
      prevTitle = titleId - 1;
    }
    getTitle(prevTitle)
    .then(title => this.setState({ prev : title }))
  }

  // routeEvent = (title) => {
  //   const { routeWriter } = this.props;
  //   routeWriter(title);
  // }

  eventHandler = (e) => {
    e.preventDefault();
    const { titleChange } = this.props;
    const newTitle = e.target.id;
    titleChange(newTitle);
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getNextTitle(titleId)
    this.getPreviousTitle(titleId)
  }

  componentDidUpdate(prevProps) {
    const { titleId } = this.props;
    if (prevProps.titleId !== titleId ) {
      this.getNextTitle(titleId);
      this.getPreviousTitle(titleId)
      }
    }

  render () {
    const { selectedTitle, titleId, routeWriter } = this.props;
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
          <Col onClick={this.eventHandler}>
          <Link to={routeWriter(prev.title_name)}>
            <div className="clickOverlay" id={prev.title_name}></div>
          </Link>
            <Media className="underlay">
              <Arrow className="align-self-start mr-3 hrzArrow" transform="rotate(180)"/>
              <Media.Body>
              <h3><img src={`images/icons/title/${prev.title_icon}.png`} alt=" " width={50} /> {prev.title_name}</h3>
              </Media.Body>
            </Media>
          </Col>
          <Col onClick={this.eventHandler}>
          <Link to={routeWriter(next.title_name)}>
            <div className="clickOverlay" id={next.title_name}></div>
          </Link>
          <Media className="underlay">
            <Media.Body>
            <h3 className="text-right"><img src={`images/icons/title/${next.title_icon}.png`}  alt=" " width={50} /> {next.title_name}</h3>
            </Media.Body>
              <Arrow className="align-self-start ml-3 hrzArrow"/>
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